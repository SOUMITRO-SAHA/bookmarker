import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import * as z from "zod";

const ZCreateFolderSchema = z.object({
  iconId: z.number(),
  name: z.string(),
});

export const folderRouter = createTRPCRouter({
  getAllFolders: publicProcedure.query(async ({ ctx }) => {
    try {
      if (ctx.session?.user) {
        const folders = await ctx.db.folder.findMany({
          where: {
            userId: ctx.session.user.id,
          },
        });

        return folders;
      }
    } catch (error) {
      if (error instanceof Error) return new Error(error.message);
    }
  }),
  createFolder: protectedProcedure
    .input(ZCreateFolderSchema)
    .mutation(async () => {
      // TODO: Create this
    }),
});
