import { createTRPCRouter, publicProcedure } from "../../../trpc";
import { signUpSchema } from "./signup";

type AuthRouterHandlerCache = {
  signUp?: typeof import("./signup").signUpHandler;
};

const UNSTABLE_HANDLER_CACHE: AuthRouterHandlerCache = {};

export const authRouter = createTRPCRouter({
  authTesting: publicProcedure.query(() => {
    return {
      message: "Auth Route Testing !!! 🎉🎉🎉🎉",
    };
  }),
  signUp: publicProcedure
    .input(signUpSchema)
    .mutation(async ({ input, ctx }) => {
      if (!UNSTABLE_HANDLER_CACHE.signUp) {
        UNSTABLE_HANDLER_CACHE.signUp = await import("./signup.ts").then(
          (data) => data.signUpHandler({ input, ctx })
        );
      }
    }),
});
