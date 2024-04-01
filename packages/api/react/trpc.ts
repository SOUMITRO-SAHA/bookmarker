import type { NextPageContext } from "next/types";
import superjson from "superjson";
import type { TRPCClientErrorLike } from ".";
import type { inferRouterInputs, inferRouterOutputs } from "../server";
import {
  createTRPCNext,
  httpBatchLink,
  httpLink,
  loggerLink,
  splitLink,
} from "..";
import { ENDPOINTS } from "./shared";
import type { AppRouter } from "../server/";

type Maybe<T> = T | null | undefined;

export type Endpoint = (typeof ENDPOINTS)[number];

const resolveEndpoint = (links: any) => {
  return (ctx: any) => {
    const parts = ctx.op.path.split(".");
    let endpoint;
    let path = "";
    if (parts.length === 2) {
      endpoint = parts[0] as keyof typeof links;
      path = parts[1];
    } else {
      endpoint = parts[1] as keyof typeof links;
      path = parts.splice(2, parts.length - 2).join(".");
    }

    return links[endpoint]({ ...ctx, op: { ...ctx.op, path } });
  };
};

export const trpc = createTRPCNext<AppRouter, NextPageContext>({
  config() {
    const url =
      typeof window !== "undefined"
        ? "/api/trpc"
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}/api/trpc`
          : `${process.env.NEXT_PUBLIC_WEBAPP_URL}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            !!process.env.NEXT_PUBLIC_DEBUG ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        splitLink({
          condition: (op) => !!op.context.skipBatch,
          true: (runtime) => {
            const links = Object.fromEntries(
              ENDPOINTS.map((endpoint) => [
                endpoint,
                httpLink({
                  url: `${url}/${endpoint}`,
                })(runtime),
              ])
            );
            return resolveEndpoint(links);
          },
          false: (runtime) => {
            const links = Object.fromEntries(
              ENDPOINTS.map((endpoint) => [
                endpoint,
                httpBatchLink({ url: `${url}/${endpoint}` })(runtime),
              ])
            );
            return resolveEndpoint(links);
          },
        }),
      ],
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 1000,
            retry(failureCount, _err) {
              const err = _err as never as Maybe<
                TRPCClientErrorLike<AppRouter>
              >;
              const code = err?.data?.code;
              if (
                code === "BAD_REQUEST" ||
                code === "FORBIDDEN" ||
                code === "UNAUTHORIZED"
              ) {
                return false;
              }
              const MAX_QUERY_RETRIES = 3;
              return failureCount < MAX_QUERY_RETRIES;
            },
          },
        },
      },
      transformer: superjson,
    };
  },
  ssr: false,
});

export const transformer = superjson;

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
