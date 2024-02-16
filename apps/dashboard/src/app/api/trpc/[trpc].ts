import { appRouter, createTRPCContext } from "@repo/api";
import { createNextApiHandler } from "@trpc/server/adapters/next";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  /**
   * @link https://trpc.io/docs/v11/context
   */

  createContext: createTRPCContext,

  /**
   * @link https://trpc.io/docs/v11/error-handling
   */

  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      // send to bug reporting
      console.error("Something went wrong", error);
    }
  },

  /**
   * Enable query batching
   */

  batching: {
    enabled: true,
  },
});
