import { RequestHandler } from "express";
import { TUserRole } from "../../modules/User/user.interface";
import catchAsync from "../../util/catchAsync/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import CError from "../../error/CError";
import { JWT_ACCESS_SECRET } from "../../config";

const auth = (...userRole: TUserRole[]): RequestHandler => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new CError(501, "You are not authorized!");
    }

    const decoded = jwt.verify("token", JWT_ACCESS_SECRET) as JwtPayload;
    const { role, _id, iat } = decoded;
  });
};

export default auth;
