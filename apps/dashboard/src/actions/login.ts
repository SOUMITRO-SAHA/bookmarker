"use server";
import { LoginSchema } from "@repo/shared";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields!!!" };
  }
  try {
    const { email, password } = values;
    console.log(email, password);
    return { success: "Successfully Logged in!" };
  } catch (error) {}
};
