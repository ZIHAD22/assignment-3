import { Router } from "express";
import { userSignUp } from "./user.controller";

const userRouter = Router();

userRouter.get("/signup", userSignUp);

export default userRouter;
