import { Router } from "express";
import userRouter from "../modules/User/user.route";
import TModuleRouters from "./index.interface";

const router = Router();

const moduleRoutes: TModuleRouters = [
  {
    path: "/auth",
    route: userRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
