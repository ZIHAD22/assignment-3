import { Router } from "express";
import { userLogin, userSignUp } from "./user.controller";

const userRouter = Router();

userRouter.post("/signup", userSignUp);
userRouter.post("/login", userLogin);

export default userRouter;
