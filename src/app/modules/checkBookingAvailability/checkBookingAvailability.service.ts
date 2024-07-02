import BookingModel from "../Booking/booking.model";

const checkBookingAvailabilityDB = async (date: string) => {
  const available = await BookingModel.find({
    date: date,
    isBooked: "confirmed",
  }).select("startTime endTime -_id");
  return available;
};

export { checkBookingAvailabilityDB };
