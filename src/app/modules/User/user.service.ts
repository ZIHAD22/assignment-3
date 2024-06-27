import { Document, HydratedDocument } from "mongoose";
import TUser from "./user.interface";
import UserModel from "./user.model";
import sendRes from "../../util/sendRes/sendRes";
import { NextFunction } from "express-serve-static-core";
import CError from "../../error/CError";

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
};

export { createUserDB, loginUserDB };
