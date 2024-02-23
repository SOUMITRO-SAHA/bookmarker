import GitHub from "@auth/core/providers/github";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [GitHub],
} satisfies NextAuthConfig;
