import { Router } from "express";
import {
  createFacility,
  deleteFacility,
  getAllFacility,
  updateFacility,
} from "./facility.controller";
import validateRequest from "../../middlewares/validateRequest";
import { createFacilityValidation } from "./facility.validation";

const facilityRouter = Router();

facilityRouter.get("/", getAllFacility);
facilityRouter.post(
  "/",
  validateRequest(createFacilityValidation),
  createFacility
);
facilityRouter.patch("/:_id", updateFacility);
facilityRouter.patch("/delete/:id", deleteFacility);

export default facilityRouter;
