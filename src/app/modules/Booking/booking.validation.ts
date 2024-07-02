import { z } from "zod";

const createBookingValidation = z.object({
  body: z.object({
    facility: z.string({ required_error: "facility is Require" }),
    date: z.string({ required_error: "date is Require" }),
    startTime: z.string({ required_error: "startTime is Require" }),
    endTime: z.string({ required_error: "endTime is Require" }),
  }),
});

export { createBookingValidation };
