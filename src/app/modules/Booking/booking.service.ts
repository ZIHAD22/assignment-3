import CError from "../../error/CError";
import FacilityModel from "../Facility/facility.model";
import TBooking from "./booking.interface";
import BookingModel from "./booking.model";

const calculatePayAbleAmountDB = async (id: string, duration: number) => {
  // find price per hour
  const pricePerHour = await FacilityModel.findById(id).select(
    "pricePerHour -_id"
  );
  if (pricePerHour) {
    return pricePerHour.pricePerHour * duration;
  } else {
    throw new CError(500, "please select a valid facility");
  }
};

// create booking
const createBookingDB = async (
  payload: TBooking,
  totalPayableAmount: number,
  userId: string
) => {
  const result = BookingModel.create({
    ...payload,
    payableAmount: totalPayableAmount,
    user: userId,
  });

  return result;
};

// fetch all bookings
const fetchAllBookingsDB = async () => {
  const result = await BookingModel.find()
    .populate("user")
    .populate("facility");

  return result;
};

const cancelBookingsDB = async (id: string) => {
  const result = await BookingModel.findByIdAndUpdate(
    id,
    {
      isBooked: "canceled",
    },
    { new: true }
  );
  return result;
};

const getUserBookingsDB = async (id: string) => {
  const result = await BookingModel.find({ user: id });
  return result;
};

const checkBookingAvailabilityDB = async () => {};

export {
  createBookingDB,
  calculatePayAbleAmountDB,
  fetchAllBookingsDB,
  cancelBookingsDB,
  getUserBookingsDB,
  checkBookingAvailabilityDB,
};
