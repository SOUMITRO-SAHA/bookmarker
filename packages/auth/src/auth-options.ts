import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@repo/db";
import type { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export function isNumber(n: string) {
  return !isNaN(parseFloat(n)) && !isNaN(+n);
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 3 * 30 * 24 * 60 * 60, // 30 days
    updateAge: 7 * 24 * 60 * 60, // 24 hours
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/login" || "/auth/signup",
    signOut: "/auth/sign-out",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/register",
  },
  callbacks: {
    signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};
