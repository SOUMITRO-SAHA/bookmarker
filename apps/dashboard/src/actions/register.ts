"use server";
import * as z from "zod";
import { RegisterSchema } from "@repo/shared";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields) {
    return { error: "Invalid Field!" };
  }

  console.log(validatedFields);
  //   const { username, email, password } = validatedFields;
  return { success: "Successfully Registered!!!" };
};
