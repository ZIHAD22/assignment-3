import { RequestHandler } from "express";
import { TUserRole } from "../../modules/User/user.interface";
import catchAsync from "../../util/catchAsync/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import CError from "../../error/CError";
import { JWT_ACCESS_SECRET } from "../../config";
import UserModel from "../../modules/User/user.model";

const auth = (...userRole: TUserRole[]): RequestHandler => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new CError(501, "Access forbidden !");
    }

    const decoded = jwt.verify(token, JWT_ACCESS_SECRET) as JwtPayload;
    const { role, _id, iat } = decoded;

    const user = await UserModel.isUserExist(_id);
    if (!user) {
      throw new CError(501, "User Not Exist");
    }

    const isValidRole = userRole.includes(role);
    console.log(isValidRole);
    if (userRole && !isValidRole) {
      throw new CError(501, "Access forbidden !");
    }

    console.log(decoded);
    req.data = { jwtDU: decoded };
    return next();
  });
};

export default auth;
