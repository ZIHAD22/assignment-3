import { Schema, Types, model } from "mongoose";
import TBooking from "./booking.interface";
import CError from "../../error/CError";

const bookingSchema = new Schema<TBooking>(
  {
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    user: {
      type: Types.ObjectId,
      required: true,
      ref: "User",
    },
    facility: {
      type: Types.ObjectId,
      required: true,
      ref: "Facility",
    },
    payableAmount: {
      type: Number,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ["confirmed", "unconfirmed", "canceled"],
      default: "confirmed",
    },
  },
  { timestamps: true }
);

bookingSchema.pre("save", async function (next) {
  const data = this;
  const result = await BookingModel.findOne({
    date: data?.date,
    startTime: data?.startTime,
    endTime: data?.endTime,
  }).select("startTime endTime -_id");
  if (result) {
    throw new CError(501, "Facility Not Available At This Time");
  }
});

const BookingModel = model<TBooking>("Booking", bookingSchema);

export default BookingModel;
