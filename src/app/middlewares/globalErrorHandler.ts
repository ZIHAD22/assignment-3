import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.json({
    success: false,
    statusCode: 400,
    message: "Something went wrong",
    error: err,
  });

  next();
};

export default globalErrorHandler;
