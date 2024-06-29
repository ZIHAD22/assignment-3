import { Router } from "express";
import { createBooking } from "./booking.controller";
import { calculateDurationHours } from "./booking.middlewares";

const bookingRouter = Router();

bookingRouter.post("/", calculateDurationHours, createBooking);

export default bookingRouter;
