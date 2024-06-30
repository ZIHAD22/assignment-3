import catchAsync from "../../util/catchAsync/catchAsync";
import sendRes from "../../util/sendRes/sendRes";
import {
  createFacilityDB,
  deleteFacilityDB,
  getAllFacilityDB,
  updateFacilityDB,
} from "./facility.service";

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

const updateFacility = catchAsync(async (req, res, next) => {
  const { _id } = req.params;
  const data = req.body;
  const result = await updateFacilityDB({ _id, data });
  sendRes({
    res,
    message: "Facility Updated Successfully",
    statusCode: 200,
    data: result,
  });
});

const deleteFacility = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await deleteFacilityDB(id);
  sendRes({
    res,
    message: "Facility Deleted Successfully",
    statusCode: 200,
    data: result,
  });
});

export { createFacility, getAllFacility, updateFacility, deleteFacility };
