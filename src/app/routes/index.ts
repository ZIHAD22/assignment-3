import { Router } from "express";
import userRouter from "../modules/User/user.route";
import TModuleRouters from "./index.interface";
import facilityRouter from "../modules/Facility/facility.route";
import bookingRouter from "../modules/Booking/booking.route";
import auth from "../middlewares/Auth/auth";

const router = Router();

const moduleRoutes: TModuleRouters = [
  {
    path: "/auth",
    route: userRouter,
  },
  {
    path: "/facility",
    route: facilityRouter,
    middleware: [auth("admin")],
  },
  {
    path: "/bookings",
    route: bookingRouter,
  },
];

moduleRoutes.forEach((route) => {
  if (route.middleware) {
    router.use(route.path, ...route.middleware, route.route);
  } else {
    router.use(route.path, route.route);
  }
});

export default router;
