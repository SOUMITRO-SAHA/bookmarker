import type { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { db } from "@repo/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export function isNumber(n: string) {
  return !isNaN(parseFloat(n)) && !isNaN(+n);
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  cookies: defaultCookies(WEBAPP_URL?.startsWith("https://")),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};
