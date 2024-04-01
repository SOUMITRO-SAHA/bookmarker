import authedProcedure from "../../../procedures/authedProcedure";

export const mySelf = authedProcedure.query(async ({ ctx }) => {
  const handler = await import("../self.handler.ts").mySelfHandler;

  return handler({ ctx });
});
