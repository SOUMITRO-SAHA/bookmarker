import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "../../../trpc";

type FolderRouterHandlerCache = {
  folder?: typeof import("./folders").getFolderHandler;
};

const UNSTABLE_HANDLER_CACHE: FolderRouterHandlerCache = {};

export const folderRouter = createTRPCRouter({
  folderTest: publicProcedure.query(() => {
    return {
      message: "Folder Route Testing !!! 🎉🎉🎉🎉",
    };
  }),
  // folder: protectedProcedure.input().query(() => {}),
});
