import { createTRPCRouter, publicProcedure } from "./trpc";
import { folderRouter } from "./router/folder";

export const appRouter = createTRPCRouter({
  folder: folderRouter,
  test: publicProcedure.query(() => {
    return {
      message: "Testing !!! 🎉🎉🎉🎉",
    };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
