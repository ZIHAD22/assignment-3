import { Router } from "express";
import { checkBookingAvailability } from "./checkBookingAvailability.controller";

const checkBookingAvailabilityRouter = Router();

checkBookingAvailabilityRouter.get("/", checkBookingAvailability);

export default checkBookingAvailabilityRouter;
