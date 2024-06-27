import { RequestHandler } from "express";
import catchAsync from "../../util/catchAsync/catchAsync";
import sendRes from "../../util/sendRes/sendRes";
import { createUserDB, loginUserDB } from "./user.service";

const userSignUp: RequestHandler = catchAsync(async (req, res, next) => {
  const data = req.body;

  const result = await createUserDB(data);

  sendRes({
    res,
    message: "User Created Successfully",
    statusCode: 201,
    data: result,
  });
});

const userLogin: RequestHandler = catchAsync(async (req, res, next) => {
  const data = req.body;

  const result = await loginUserDB(data);

  sendRes({
    res,
    message: "User Login Successfully",
    statusCode: 201,
    data: data,
  });
});

export { userSignUp, userLogin };
