import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { BCRYPT_SR } from "../../config";
import { IUserModel, TUser } from "./user.interface";
import CError from "../../error/CError";

const userSchema = new Schema<TUser, IUserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      required: true,
      default: "user",
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  const isValidUser = await UserModel.findOne({ email: user.email });
  if (isValidUser) {
    throw new CError(501, "User is Already Exist");
  }
  user.password = await bcrypt.hash(user.password, Number(BCRYPT_SR));
  next();
});

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.statics.isPasswordMatched = async (plainPassword, hashPassword) => {
  return await bcrypt.compare(plainPassword, hashPassword);
};
userSchema.statics.isUserExist = async (id) => {
  return await UserModel.findById(id);
};
const UserModel = model<TUser, IUserModel>("User", userSchema);

export default UserModel;
