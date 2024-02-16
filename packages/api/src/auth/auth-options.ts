import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@repo/db";
import type { NextAuthOptions } from "next-auth";
import { nanoid } from "nanoid";
import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Define the User interface
interface User {
  id: number | string;
  name: string;
  email: string;
  image: string;
  username?: string; // Make username optional
}

// Extend the NextAuth Session interface to include the User interface
declare module "next-auth" {
  interface Session {
    user: User;
  }
}

// Define the authentication options
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/sign-in",
    error: "/error",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session(opts) {
      // Ensure that user exists in opts before accessing it
      if (!opts.user) {
        throw new Error("User not found in session options");
      }

      return {
        ...opts.session,
        user: {
          ...opts.session.user,
          id: opts.user.id,
        },
      };
    },

    async jwt({ token, user }) {
      if (token && token.email) {
        const dbUser = await db.user.findFirst({
          where: {
            email: token.email,
          },
        });

        if (!dbUser) {
          token.id = user?.id || ""; // Assign an empty string if user.id is undefined
          return token;
        }

        if (!dbUser.username) {
          await db.user.update({
            where: {
              id: dbUser.id,
            },
            data: {
              username: nanoid(10),
            },
          });
        }

        return {
          id: dbUser.id!,
          name: dbUser.name!,
          email: dbUser.email!,
          picture: dbUser.image!,
          username: dbUser.username!,
        };
      }

      return token;
    },

    redirect() {
      return "/";
    },
  },
};

// Define a function to get the authentication session
export const getAuthSession = () => getServerSession(authOptions);
