import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

type TUserRole = keyof typeof USER_ROLE;

type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  address: string;
};

interface IUserModel extends Model<TUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isUserExist(id: string): Promise<TUser>;
}

export { TUser, IUserModel, TUserRole };
