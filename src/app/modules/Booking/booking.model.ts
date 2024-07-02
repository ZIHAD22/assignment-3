import { Schema, Types, model } from "mongoose";
import TBooking from "./booking.interface";

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

const BookingModel = model<TBooking>("Booking", bookingSchema);

export default BookingModel;
