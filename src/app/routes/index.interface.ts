import { RequestHandler, Router } from "express";
import { TUserRole } from "../modules/User/user.interface";

type TModuleRouters = {
  path: string;
  route: Router;
  middleware?: RequestHandler[];
}[];

export default TModuleRouters;
