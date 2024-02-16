import { createTRPCRouter, publicProcedure } from "../trpc.ts";
import { z } from "zod";

export const userRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.user.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    return await ctx.db.user.findFirst({ where: { id: input } });
  }),
});
