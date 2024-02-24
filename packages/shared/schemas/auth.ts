import * as z from "zod";

export const PasswordSchema = z
  .string()
  .min(8)
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
    message:
      "Password must contain at least one lowercase letter, one uppercase letter, and one digit",
  });

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email!!!",
  }),
  password: PasswordSchema,
});

export const RegisterSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email({
    message: "Invalid email!!!",
  }),
  password: PasswordSchema,
});

export const FormSchema = LoginSchema || RegisterSchema;
