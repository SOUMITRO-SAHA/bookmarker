import { protectedProcedure, publicProcedure, createTRPCRouter } from "../trpc";
import z from "zod";

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @repo/auth package
    return "you can see this secret message!";
  }),
  signUp: publicProcedure.input(signInSchema).mutation(async (input) => {}),
});
