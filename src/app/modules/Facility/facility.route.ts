import { Router } from "express";
import { createFacility, getAllFacility } from "./facility.controller";

const facilityRouter = Router();

facilityRouter.get("/", getAllFacility);
facilityRouter.post("/", createFacility);

export default facilityRouter;
