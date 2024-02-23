import { folderRouter } from "./router/folder";
import { procedures } from "./router/procedures";
import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
  procedures: procedures,
  folder: folderRouter,
  test: publicProcedure.query(() => {
    return {
      message: "Testing !!! 🎉🎉🎉🎉",
    };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
