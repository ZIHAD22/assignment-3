import { ErrorRequestHandler } from "express";
import CError from "../../error/CError";
import { TErrorSources } from "./globalErrorHandler.interface";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err instanceof CError) {
    statusCode = err?.statusCode;
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err?.message,
      },
    ];
  }

  return res.json({
    success: false,
    statusCode: statusCode,
    message: message,
    error: err,
    errorSources,
  });
};

export default globalErrorHandler;
