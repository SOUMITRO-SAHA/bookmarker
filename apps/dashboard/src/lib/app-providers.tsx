"use client";

import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { SessionProvider } from "next-auth/react";
import * as React from "react";

interface AppProvidersProps {
  //Props
}

const AppProviders: React.FC<AppProvidersProps> = (
  props: AppProvidersProps
) => {
  return (
    <TrpcProvider>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Children */}
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </SessionProvider>
    </TrpcProvider>
  );
};

export default AppProviders;
