import catchAsync from "../util/catchAsync/catchAsync";
import { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    await schema.parseAsync({
      body: req.body,
    });

    return next();
  });
};

export default validateRequest;
