import { Router } from "express";
import {
  createFacility,
  deleteFacility,
  getAllFacility,
  updateFacility,
} from "./facility.controller";

const facilityRouter = Router();

facilityRouter.get("/", getAllFacility);
facilityRouter.post("/", createFacility);
facilityRouter.patch("/:_id", updateFacility);
facilityRouter.patch("/delete/:id", deleteFacility);

export default facilityRouter;
