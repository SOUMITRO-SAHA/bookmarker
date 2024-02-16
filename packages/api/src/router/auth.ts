import { createTRPCRouter, publicProcedure } from "../trpc.ts";

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
});
