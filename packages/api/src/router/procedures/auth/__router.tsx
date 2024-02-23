import { createTRPCRouter, publicProcedure } from "../../../trpc.js";
import { signUpSchema } from "./signup.js";

type AuthRouterHandlerCache = {
  signUp?: typeof import("./signup.js").signUpHandler;
};

const UNSTABLE_HANDLER_CACHE: AuthRouterHandlerCache = {};

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(signUpSchema)
    .mutation(async ({ input, ctx }) => {
      if (!UNSTABLE_HANDLER_CACHE.signUp) {
        UNSTABLE_HANDLER_CACHE.signUp = await import("./signup.js").then(
          (data) => data.signUpHandler({ input, ctx })
        );
      }
    }),
});
