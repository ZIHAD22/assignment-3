import { Router } from "express";
import { userLogin, userSignUp } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createUserValidation, loginUserValidation } from "./user.validation";

const userRouter = Router();

userRouter.post("/signup", validateRequest(createUserValidation), userSignUp);
userRouter.post("/login", validateRequest(loginUserValidation), userLogin);

export default userRouter;
