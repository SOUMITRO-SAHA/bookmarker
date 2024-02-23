import { createNewToken, encryptPassword } from "@repo/lib";
import { TRPCError } from "@trpc/server";
import * as z from "zod";

export const signUpSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string().min(1, "Password required!!!"),
});

export type SignUp = {
  username: string;
  email: string;
  password: string;
};

export type SignUpOptions = {
  input: SignUp;
  ctx: any;
};

export const signUpHandler = async ({ input, ctx }: SignUpOptions) => {
  const { username, email, password } = input;
  try {
    const existingUser = await ctx.db.user.findUnique({
      where: { email, username },
    });

    if (existingUser) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "User Already Exists, Please Login!!!",
      });
    }

    const encryptedPassword = await encryptPassword(password);

    const newUser = await ctx.db.user.create({
      username,
      email,
      password: encryptedPassword,
    });

    if (!newUser) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
    const userInfo = {
      id: existingUser.id as string,
      username: existingUser.username as string,
      email: existingUser.email as string,
      role: existingUser.role as string,
    };
    // Now We have Token
    const token = await createNewToken(userInfo);

    // Now add the token in the database
    const user = await ctx.db.user.update({
      where: { id: newUser.id },
      data: {
        access_token: token,
      },
    });

    // Remove the password from the response
    user.password = undefined;

    return user;
  } catch (error) {
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
  }
};
