import TFacility from "./facility.interface";
import FacilityModel from "./facility.model";

const getAllFacilityDB = async () => {
  const result = await FacilityModel.find({});
  return result;
};

const createFacilityDB = async (payload: TFacility) => {
  const result = await FacilityModel.create(payload);
  return result;
};

const updateFacilityDB = async (payload: any) => {
  const result = await FacilityModel.findByIdAndUpdate(
    payload._id,
    payload.data,
    {
      new: true,
      runValidators: true,
    }
  );
  console.log(result);
  return result;
};

export { createFacilityDB, getAllFacilityDB, updateFacilityDB };
