import catchAsync from "../../util/catchAsync/catchAsync";
import sendRes from "../../util/sendRes/sendRes";
import { createFacilityDB } from "./facility.service";

const createFacility = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await createFacilityDB(data);
  console.log(result);
  sendRes({
    res,
    message: "Facility Created Successfully",
    statusCode: 201,
    data: data,
  });
});

export { createFacility };
