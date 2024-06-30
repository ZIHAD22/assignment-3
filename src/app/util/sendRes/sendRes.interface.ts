import { Response } from "express";

type TPayload<T> = {
  res: Response;
  success?: boolean;
  statusCode: number;
  message?: string;
  token?: string;
  data: T;
};

export default TPayload;
