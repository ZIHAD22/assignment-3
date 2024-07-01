import catchAsync from "../../util/catchAsync/catchAsync";
import sendRes from "../../util/sendRes/sendRes";
import {
  calculatePayAbleAmountDB,
  cancelBookingsDB,
  createBookingDB,
  fetchAllBookingsDB,
} from "./booking.service";

const createBooking = catchAsync(async (req, res, next) => {
  const data = req.body;
  const { durationHours } = req.data;

  const totalPayableAmount = await calculatePayAbleAmountDB(
    data.facility,
    durationHours as number
  );
  const result = await createBookingDB(data, totalPayableAmount);
  sendRes({
    res,
    message: "Booking Successful",
    statusCode: 201,
    data: result,
  });
});

const fetchAllBookings = catchAsync(async (req, res, next) => {
  const result = await fetchAllBookingsDB();
  sendRes({
    res,
    message: "Bookings retrieved successfully",
    statusCode: 200,
    data: result,
  });
});

const cancelBookings = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await cancelBookingsDB(id);
  sendRes({
    res,
    message: "Booking cancelled successfully",
    statusCode: 200,
    data: result,
  });
});

export { createBooking, fetchAllBookings, cancelBookings };
