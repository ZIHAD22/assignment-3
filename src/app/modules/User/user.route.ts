import { Router } from "express";
import { userSignUp } from "./user.controller";

const userRouter = Router();

userRouter.post("/signup", userSignUp);

export default userRouter;
