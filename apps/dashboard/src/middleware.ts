import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { NextAuthRequest } from "node_modules/next-auth/lib";

const { auth } = NextAuth(authConfig);

// Explicitly specify the type annotation for the auth function
const customAuth: any = (req: NextAuthRequest) => {
  const isLoggedIn = !!req.auth;
  console.log("Routes", req.nextUrl.pathname);
  console.log("Logged In Status: ", isLoggedIn);
};

// Export the custom auth function
export default auth(customAuth);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
