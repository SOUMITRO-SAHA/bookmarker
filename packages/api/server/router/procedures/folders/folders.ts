import { TRPCError } from "@trpc/server";
import * as z from "zod";

export const folderSchema = z.object({
  name: z.string(),
});

export const subfolderSchema = z.object({
  id: z.number().min(1, { message: "" }),
});

export type Folder = {
  icon?: string;
  name: string;
};

export type FolderOptions = {
  input: Folder;
  ctx: any;
};

export const getFolderHandler = async ({ ctx }: any) => {
  try {
    const folders = await ctx.db.folder.findMany();
    if (!folders) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Folder not found!!!",
      });
    }

    return folders;
  } catch (error) {
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
  }
};

export const createNewFolderHandler = async ({
  input,
  ctx,
}: FolderOptions) => {};

export const updateFolderHandler = async ({ input, ctx }: FolderOptions) => {};

export const deleteFolderHandler = async ({ input, ctx }: FolderOptions) => {};

export const getSubfoldersByIdHandler = async ({
  input,
  ctx,
}: {
  input: { id: number };
  ctx: any;
}) => {
  try {
    const subfolders = await ctx.db.subFolders.findMany({
      where: { id: input.id },
    });

    if (!subfolders)
      throw new TRPCError({
        code: "NOT_FOUND",
      });

    return subfolders;
  } catch (error) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
    });
  }
};
