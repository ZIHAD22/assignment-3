import { ZodError, ZodIssue } from "zod";
import { THandleErrorResponds } from "../interface/error.interface";
import { TErrorSources } from "../middlewares/globalErrorHandler/globalErrorHandler.interface";

const handleZodError = (error: ZodError): THandleErrorResponds => {
  const errorSources: TErrorSources = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: "Validation Error",
    errorSources,
  };
};

export default handleZodError;
