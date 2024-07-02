import { Router } from "express";
import {
  cancelBookings,
  checkBookingAvailability,
  createBooking,
  fetchAllBookings,
  getUsersBookings,
} from "./booking.controller";
import { calculateDurationHours } from "./booking.middlewares";
import auth from "../../middlewares/Auth/auth";

const bookingRouter = Router();

bookingRouter.get("/", auth("admin"), fetchAllBookings);
bookingRouter.get("/user", auth("user"), getUsersBookings);
bookingRouter.post("/", auth("user"), calculateDurationHours, createBooking);
bookingRouter.patch("/:id", auth("user"), cancelBookings);
bookingRouter.patch("/:date", checkBookingAvailability);

export default bookingRouter;
