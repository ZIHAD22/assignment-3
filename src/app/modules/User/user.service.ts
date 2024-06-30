import UserModel from "./user.model";
import jwt from "jsonwebtoken";
import CError from "../../error/CError";
import { TUser } from "./user.interface";
import { JWT_ACCESS_SECRET } from "../../config";

const createUserDB = async (payload: TUser) => {
  const result = await UserModel.create(payload);
  return result;
};

const loginUserDB = async (payload: { email: string; password: string }) => {
  const userData = await UserModel.findOne({
    email: payload.email,
  }).select("+password");

  if (!userData) {
    throw new CError(500, "User Not Found");
  }

  const isPasswordMatch = await UserModel.isPasswordMatched(
    payload.password,
    userData.password
  );

  if (!isPasswordMatch) {
    throw new CError(400, "password not match");
  }

  const jwtPayload = {
    _id: userData?._id,
    role: userData?.role,
  };

  const token = jwt.sign(jwtPayload, JWT_ACCESS_SECRET, { expiresIn: "1d" });

  return { token, userData };
};

export { createUserDB, loginUserDB };
