import catchAsync from "../../util/catchAsync/catchAsync";
import sendRes from "../../util/sendRes/sendRes";
import { createFacilityDB, getAllFacilityDB } from "./facility.service";

const getAllFacility = catchAsync(async (req, res, next) => {
  const result = await getAllFacilityDB();

  sendRes({
    res,
    message: "Fetch All Facilities",
    statusCode: 200,
    data: result,
  });
});

const createFacility = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await createFacilityDB(data);
  sendRes({
    res,
    message: "Facility Created Successfully",
    statusCode: 201,
    data: data,
  });
});

export { createFacility, getAllFacility };
