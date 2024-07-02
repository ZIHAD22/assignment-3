import { TErrorSources } from "../middlewares/globalErrorHandler/globalErrorHandler.interface";

type TZodErrorResponds = {
  errorSources: TErrorSources;
  statusCode: number;
  message: string;
};

export { TErrorSources, TZodErrorResponds };
