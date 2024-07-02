import { z } from "zod";

const createFacilityValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is Require" }),
    description: z.string({ required_error: "Description is Require" }),
    location: z.string({ required_error: "Location is Require" }),
    pricePerHour: z.number({ required_error: "Price Per Hour is Require" }),
  }),
});

export { createFacilityValidation };
