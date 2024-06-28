import TFacility from "../Facility/facility.interface";
import { TUser } from "../User/user.interface";

type TBooking = {
  date: string;
  startTime: string;
  endTime: string;
  user: TUser;
  facility: TFacility;
  payableAmount: number;
  isBooked: "confirmed" | "unconfirmed" | "canceled";
};

export default TBooking;
