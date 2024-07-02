import mongoose from "mongoose";
import { THandleErrorResponds } from "../interface/error.interface";
import { TErrorSources } from "../middlewares/globalErrorHandler/globalErrorHandler.interface";

const handleValidationError = (
  err: mongoose.Error.ValidationError
): THandleErrorResponds => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    }
  );

  const statusCode = 400;

  return {
    statusCode,
    message: "Validation Error",
    errorSources,
  };
};

export default handleValidationError;
