/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API
 *
 * These allow you to access things like the database, the session, etc, when
 * processing a request
 */
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import type { Session } from "@repo/auth";
import { getServerSession } from "@repo/auth";
import { db } from "@repo/db";

// Options for creating the inner tRPC context
interface CreateContextOptions {
  session: Session | null;
}

/**
 * This helper generates the "internals" for a tRPC context. If you need to use
 * it, you can export it from here
 */
const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    db,
  };
};

export type Context = Awaited<ReturnType<typeof createInnerTRPCContext>>;

/**
 * This is the actual context used in the router to process every request
 */
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the server using getServerSession function
  const session = await getServerSession({ req, res });

  return createInnerTRPCContext({
    session,
  });
};

/**
 * 2. INITIALIZATION
 *
 * This is where the trpc API is initialized, connecting the context and
 * transformer
 */
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces used to build the tRPC API
 */

/**
 * Creates new routers and subrouters in the tRPC API
 */
export const createTRPCRouter = t.router;

/**
 * Public (unauthed) procedure
 *
 * Base piece to build new queries and mutations. Allows access to session data
 * if the user is logged in
 */
export const publicProcedure = t.procedure;

/**
 * Middleware that enforces users are logged in before running the procedure
 */
const isAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // Infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

/**
 * Protected (authed) procedure
 *
 * Only accessible to logged-in users. Verifies the session is valid and
 * guarantees ctx.session.user is not null
 */

export const protectedProcedure = t.procedure.use(isAuthenticated);

/**
 * Create a server-side caller
 * @link https://trpc.io/docs/v11/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory;
