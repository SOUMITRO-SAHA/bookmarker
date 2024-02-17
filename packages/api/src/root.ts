import { createTRPCRouter, publicProcedure } from "./trpc.ts";

export const appRouter = createTRPCRouter({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    const result = await ctx.db.user.findMany();
    return { message: "Welcome to tRPC!!!", result: result };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
