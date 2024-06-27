import TFacility from "./facility.interface";
import FacilityModel from "./facility.model";

const createFacilityDB = async (payload: TFacility) => {
  const result = await FacilityModel.create(payload);
  return result;
};

export { createFacilityDB };
