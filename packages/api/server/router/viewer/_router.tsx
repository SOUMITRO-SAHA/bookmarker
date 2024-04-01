import { loggedInViewerRouter } from "../loggedInViewer/_router";
import { mergeRouters } from "../../trpc";

export const viewerRouter = mergeRouters(logg);
