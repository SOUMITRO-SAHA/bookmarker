import { createTRPCRouter } from "./trpc.ts";
import { authRouter } from "./router/auth.ts";
import { userRouter } from "./router/user.ts";

export const appRouter = createTRPCRouter({
  user: userRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
