import { RequestHandler } from "express";
import catchAsync from "../../util/catchAsync/catchAsync";
import sendRes from "../../util/sendRes/sendRes";

const userSignUp: RequestHandler = catchAsync((req, res, next) => {
  sendRes({
    res,
    message: "all ok",
    statusCode: 200,
    data: {},
  });
});

export { userSignUp };
