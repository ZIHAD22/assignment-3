import catchAsync from "../../util/catchAsync/catchAsync";
import sendRes from "../../util/sendRes/sendRes";
import { checkBookingAvailabilityDB } from "./checkBookingAvailability.service";

const checkBookingAvailability = catchAsync(async (req, res, next) => {
  let date = req.query?.date;
  if (!date) {
    let currentDate = new Date();

    // Get the year, month, and day
    let year = currentDate.getFullYear();
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Months are zero-indexed, so we add 1
    let day = ("0" + currentDate.getDate()).slice(-2);
    let formattedDate = `${year}-${month}-${day}`;
    date = formattedDate;
  }

  const result = await checkBookingAvailabilityDB(date as string);
  sendRes({
    res,
    message: "Availability checked successfully",
    statusCode: 200,
    data: result,
  });
});

export { checkBookingAvailability };
