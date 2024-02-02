import { z } from "zod";
export const registerSchema = z
  .object({
    username: z
      .string()
      .min(6, "username must be at least 6 characters")
      .max(24),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(24),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });
