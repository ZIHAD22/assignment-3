import { Router } from "express";
import { createFacility } from "./facility.controller";

const facilityRouter = Router();

facilityRouter.post("/", createFacility);

export default facilityRouter;
