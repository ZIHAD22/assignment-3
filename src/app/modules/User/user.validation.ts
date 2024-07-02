import { z } from "zod";

const createUserValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is Require" }),
    email: z.string({ required_error: "Email is Require" }),
    password: z.string({ required_error: "Password is Require" }),
    phone: z.string({ required_error: "Phone Number is Require" }),
    role: z.enum(["admin", "user"], { required_error: "Role is Require" }),
    address: z.string({ required_error: "Address is Require" }),
  }),
});

export { createUserValidation };
