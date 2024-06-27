import { Router } from "express";
import {
  createFacility,
  getAllFacility,
  updateFacility,
} from "./facility.controller";

const facilityRouter = Router();

facilityRouter.get("/", getAllFacility);
facilityRouter.post("/", createFacility);
facilityRouter.patch("/:_id", updateFacility);

export default facilityRouter;
