import { Router } from "express";
import { createBooking, fetchAllBookings } from "./booking.controller";
import { calculateDurationHours } from "./booking.middlewares";

const bookingRouter = Router();

bookingRouter.get("/", fetchAllBookings);
bookingRouter.post("/", calculateDurationHours, createBooking);

export default bookingRouter;
