import { NextFunction, Request, RequestHandler, Response } from "express";
import CError from "../../error/CError";

const convertTimeInHour = (time: string) => {
  const [hours, minutes] = time.split(":").map(parseFloat);
  return hours + minutes / 60;
};

const calculateDurationHours = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let durationHours: number;
  const { startTime, endTime } = req.body;
  const startHours = convertTimeInHour(startTime);
  const endHours = convertTimeInHour(endTime);
  if (endHours >= startHours) {
    durationHours = endHours - startHours;
  } else {
    throw new CError(403, "Please Provide A Valid Time");
  }

  req.data = {
    durationHours,
  };
  next();
};

export { calculateDurationHours };
