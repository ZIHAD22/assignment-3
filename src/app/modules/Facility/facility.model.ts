import { Schema, model } from "mongoose";
import TFacility from "./facility.interface";

const facilitySchema = new Schema<TFacility>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    pricePerHour: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const FacilityModel = model<TFacility>("Facility", facilitySchema);

export default FacilityModel;
