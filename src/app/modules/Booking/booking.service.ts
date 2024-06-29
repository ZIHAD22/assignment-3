import CError from "../../error/CError";
import TFacility from "../Facility/facility.interface";
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
  totalPayableAmount: number
) => {
  const result = BookingModel.create({
    ...payload,
    payableAmount: totalPayableAmount,
    user: "667d90400b35955cc340374b",
  });

  return result;
};

export { createBookingDB, calculatePayAbleAmountDB };
