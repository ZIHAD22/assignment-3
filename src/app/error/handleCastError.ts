import mongoose from "mongoose";
import { THandleErrorResponds } from "../interface/error.interface";
import { TErrorSources } from "../middlewares/globalErrorHandler/globalErrorHandler.interface";

const handleCastError = (
  err: mongoose.Error.CastError
): THandleErrorResponds => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: "Invalid ID",
    errorSources,
  };
};

export default handleCastError;
