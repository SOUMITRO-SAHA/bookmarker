import * as React from "react";
import { QueryClient, type DehydratedState } from "@tanstack/react-query";
import { ENDPOINTS } from "@bookmarker/api";
import { api } from "./trpc";

interface TrpcProviderProps {
  children: React.ReactNode;
  dehydratedState?: DehydratedState;
}

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

const TrpcProvider: React.FC<TrpcProviderProps> = ({
  children,
  dehydratedState,
}) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5000,
          },
        },
      })
  );
  const url =
    typeof window !== "undefined"
      ? "/api/trpc"
      : process.env.NEXT_PUBLIC_WEBSITE_URL;

  const [trpcClient] = React.useState(() => api.c);
  return <div>TrpcProvider</div>;
};

export default TrpcProvider;
