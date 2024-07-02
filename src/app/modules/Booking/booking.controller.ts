import catchAsync from "../../util/catchAsync/catchAsync";
import sendRes from "../../util/sendRes/sendRes";
import UserModel from "../User/user.model";
import {
  calculatePayAbleAmountDB,
  cancelBookingsDB,
  createBookingDB,
  fetchAllBookingsDB,
  getUserBookingsDB,
} from "./booking.service";

const fetchAllBookings = catchAsync(async (req, res, next) => {
  const result = await fetchAllBookingsDB();
  sendRes({
    res,
    message: "Bookings retrieved successfully",
    statusCode: 200,
    data: result,
  });
});

const getUsersBookings = catchAsync(async (req, res, next) => {
  const id = req.data.jwtDU?._id;
  const result = await getUserBookingsDB(id);
  sendRes({
    res,
    message: "Bookings retrieved successfully",
    statusCode: 200,
    data: result,
  });
});

const createBooking = catchAsync(async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const { durationHours, jwtDU } = req.data;

  const totalPayableAmount = await calculatePayAbleAmountDB(
    data.facility,
    durationHours as number
  );
  const result = await createBookingDB(data, totalPayableAmount, jwtDU?._id);
  sendRes({
    res,
    message: "Booking Successful",
    statusCode: 201,
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

export { createBooking, fetchAllBookings, cancelBookings, getUsersBookings };
