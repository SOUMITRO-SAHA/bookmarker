"use server";
import { db } from "@bookmarker/db";
import { encryptPassword } from "@bookmarker/lib";
import { RegisterSchema } from "@bookmarker/shared";
import * as z from "zod";

type Register = {
  success: boolean;
  message: string;
  data?: any;
};

export const register = async (
  values: z.infer<typeof RegisterSchema>
): Promise<Register | undefined> => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields) {
    return { success: false, message: "Invalid Field!" };
  }

  try {
    const { username, email, password } = values;
    const hashedPassword = await encryptPassword(password);

    // Checking for existing user with same email
    const existingUser = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return { success: false, message: "Email already in use!!!" };
    }

    // Creating new User
    const newUser = await db.user.create({
      data: { email, username },
    });

    // Creating new user Passowrd
    await db.userPassword.create({
      data: {
        hash: hashedPassword,
        userId: newUser.id,
      },
    });
    return { success: true, message: "Successfully Registered!!!" };
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: "Error: " + error.message };
  }
};
