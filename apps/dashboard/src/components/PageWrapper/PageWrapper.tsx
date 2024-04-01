import AppProviders from "@/lib/app-providers";
import { usePathname } from "next/navigation";
import Script from "next/script";
import React from "react";

export type PageWrapperProps = Readonly<{
  getLayout: ((page: React.ReactElement) => React.ReactNode) | null;
  nonce: string | undefined;
  children: React.ReactNode;
  themeBasis: string | null;
  isThemeSupported?: boolean;
}>;

const PageWrapper = (props: PageWrapperProps) => {
  const pathname = usePathname();
  let pageStatus = 200;
  if (pathname === "/404") {
    pageStatus = 404;
  } else if (pathname === "/500") {
    pageStatus = 500;
  }

  const nonce =
    typeof window !== "undefined"
      ? props.nonce
        ? ""
        : undefined
      : props.nonce;
  const providerProps: PageWrapperProps = {
    ...props,
    nonce,
  };

  const getLayout: (page: React.ReactElement) => React.ReactNode =
    props.getLayout ?? ((page) => page);

  return (
    <AppProviders {...providerProps}>
      <>
        <Script
          id="page-status"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `window.PageStatus = '${pageStatus}'`,
          }}
        />
        <>{props.children}</>
      </>
    </AppProviders>
  );
};

export default PageWrapper;
