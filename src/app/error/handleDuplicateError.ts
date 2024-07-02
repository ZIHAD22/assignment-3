import { THandleErrorResponds } from "../interface/error.interface";
import { TErrorSources } from "../middlewares/globalErrorHandler/globalErrorHandler.interface";

const handleDuplicateError = (err: any): THandleErrorResponds => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: "",
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: "Invalid ID",
    errorSources,
  };
};

export default handleDuplicateError;
