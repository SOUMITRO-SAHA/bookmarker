import Credentials from "@auth/core/providers/credentials";
import Google from "@auth/core/providers/google";
import { db } from "@bookmarker/db";
import { compareEncryptedPassword } from "@bookmarker/lib";
import { LoginSchema } from "@bookmarker/shared";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    Credentials({
      async authorize(credentials): Promise<any> {
        const validatedFields = LoginSchema.safeParse(credentials.username);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await db.user.findUnique({
            where: { email: email },
            include: { password: true },
          });

          let isPasswordMatched = false;
          if (user && user.password) {
            isPasswordMatched = await compareEncryptedPassword(
              user?.password?.hash,
              password
            );
          }

          if (isPasswordMatched) return user;
        }
      },
    }),
    Google,
  ],
} satisfies NextAuthConfig;
