"use server";
import { db } from "@repo/db";
import { encryptPassword } from "@repo/lib";
import { RegisterSchema } from "@repo/shared";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields) {
    return { error: "Invalid Field!" };
  }
  try {
    const { username, email, password } = values;
    const hashedPassword = await encryptPassword(password);
    // Checking for existing user with same email
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email already in user!!!" };
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
    // TODO: Send a verification email to the user
    return { success: "Successfully Registered!!!" };
  } catch (error) {}
};
