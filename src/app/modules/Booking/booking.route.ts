import { Router } from "express";
import {
  cancelBookings,
  createBooking,
  fetchAllBookings,
  getUsersBookings,
} from "./booking.controller";
import { calculateDurationHours } from "./booking.middlewares";
import auth from "../../middlewares/Auth/auth";
import validateRequest from "../../middlewares/validateRequest";
import { createBookingValidation } from "./booking.validation";

const bookingRouter = Router();

bookingRouter.get("/", auth("admin"), fetchAllBookings);
bookingRouter.get("/user", auth("user"), getUsersBookings);
bookingRouter.post(
  "/",
  validateRequest(createBookingValidation),
  auth("user"),
  calculateDurationHours,
  createBooking
);
bookingRouter.patch("/:id", auth("user"), cancelBookings);

export default bookingRouter;
