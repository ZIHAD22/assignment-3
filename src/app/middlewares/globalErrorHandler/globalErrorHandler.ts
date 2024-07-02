import { ErrorRequestHandler } from "express";
import CError from "../../error/CError";
import { TErrorSources } from "./globalErrorHandler.interface";
import { ZodError } from "zod";
import handleZodError from "../../error/handleZodError";
import { NODE_ENV } from "../../config";
import handleCastError from "../../error/handleCastError";
import handleDuplicateError from "../../error/handleDuplicateError";
import handleValidationError from "../../error/handleValidationError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = err.message ? err.message : "Something went wrong!";
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
  } else if (
    err?.name === "JsonWebTokenError" &&
    err.message === "jwt malformed"
  ) {
    statusCode = err?.statusCode;
    message = "Access Forbidden";
    errorSources = [
      {
        path: "",
        message: err?.message,
      },
    ];
  } else if (err instanceof ZodError) {
    const modifyErrorData = handleZodError(err);
    statusCode = modifyErrorData.statusCode;
    errorSources = modifyErrorData.errorSources;
    message = modifyErrorData.message;
  } else if (err?.name === "CastError") {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  } else if (err?.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }

  return res.json({
    success: false,
    statusCode: statusCode,
    message: message,
    errorSources,
    error: err,
    stack: NODE_ENV === "DEV" ? err?.stack : null,
  });
};

export default globalErrorHandler;
