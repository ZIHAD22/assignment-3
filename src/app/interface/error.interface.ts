import { TErrorSources } from "../middlewares/globalErrorHandler/globalErrorHandler.interface";

type THandleErrorResponds = {
  errorSources: TErrorSources;
  statusCode: number;
  message: string;
};

export { THandleErrorResponds };
