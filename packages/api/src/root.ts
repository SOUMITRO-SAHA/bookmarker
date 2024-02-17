import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
  test: publicProcedure.query(() => {
    return {
      message: "Testing !!! 🎉🎉🎉🎉",
    };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
