import { RequestHandler } from "express";
import catchAsync from "../../util/catchAsync/catchAsync";
import sendRes from "../../util/sendRes/sendRes";
import { createUserDB } from "./user.service";

const userSignUp: RequestHandler = catchAsync((req, res, next) => {
  const data = req.body;

  const result = createUserDB(data);

  sendRes({
    res,
    message: "all ok",
    statusCode: 200,
    data: data,
  });
});

export { userSignUp };
