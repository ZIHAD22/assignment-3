import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { BCRYPT_SR } from "../../config";
import { IUserModel, TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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
  user.password = await bcrypt.hash(user.password, Number(BCRYPT_SR));
  next();
});

userSchema.post("save", function (user, next) {
  user.password = "";
  next();
});

userSchema.statics.isPasswordMatched = async (plainPassword, hashPassword) => {
  return await bcrypt.compare(plainPassword, hashPassword);
};

const UserModel = model<TUser, IUserModel>("User", userSchema);

export default UserModel;
