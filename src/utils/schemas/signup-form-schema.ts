import { z } from "zod";

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export type SignupFormSchemaType = z.infer<typeof SignupFormSchema>;
