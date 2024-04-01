import { mergeRouters, router } from "../../trpc";
import { authRouter } from "./auth/__router";

export const procedures = mergeRouters(
  router({
    auth: authRouter,
  })
);
