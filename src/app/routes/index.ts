import { Router } from "express";
import userRouter from "../modules/User/user.route";
import TModuleRouters from "./index.interface";
import facilityRouter from "../modules/Facility/facility.route";
import bookingRouter from "../modules/Booking/booking.route";

const router = Router();

const moduleRoutes: TModuleRouters = [
  {
    path: "/auth",
    route: userRouter,
  },
  {
    path: "/facility",
    route: facilityRouter,
  },
  {
    path: "/bookings",
    route: bookingRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
