import { Router } from "express";
import {
  cancelBookings,
  createBooking,
  fetchAllBookings,
} from "./booking.controller";
import { calculateDurationHours } from "./booking.middlewares";

const bookingRouter = Router();

bookingRouter.get("/", fetchAllBookings);
bookingRouter.post("/", calculateDurationHours, createBooking);
bookingRouter.patch("/:id", cancelBookings);

export default bookingRouter;
