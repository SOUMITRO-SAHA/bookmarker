import { mergeRouters, router } from "../../trpc.js";
import { authRouter } from "../auth.js";

export const procedures = mergeRouters(
  router({
    auth: authRouter,
  })
);
