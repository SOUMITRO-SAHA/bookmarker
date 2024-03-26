"use server";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@bookmarker/shared";
import { AuthError } from "next-auth";
import * as z from "zod";

type LoginResponse = {
  success: boolean;
  message: string;
  data?: any;
};

export const login = async (
  values: z.infer<typeof LoginSchema>
): Promise<LoginResponse | undefined> => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: true, message: "Invalid Fields!!!" };
  }
  try {
    const { email, password } = validatedFields.data;
    const userInfo = await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: true, data: userInfo, message: "Successfully Logged in" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, message: "Invalid credentials!!!" };
        default:
          return { success: false, message: "Something went wrong!" };
      }
    }

    throw error;
  }
};
