import catchAsync from "../../util/catchAsync/catchAsync";
import sendRes from "../../util/sendRes/sendRes";

const createFacility = catchAsync(async (req, res, next) => {
  const data = req.body;

  sendRes({
    res,
    message: "Facility Created Successfully",
    statusCode: 201,
    data: data,
  });
});

export { createFacility };
