import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import { cn } from "@/lib/utils";
import { IS_PRODUCTION } from "@repo/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const h = headers();

  const fullUrl = h.get("x-url") ?? "";
  const nonce = h.get("x-csp") ?? "";

  const isSSG = !fullUrl;

  return (
    <html
      lang="en"
      className="overflow-hidden debug-screens"
      data-nextjs-router="app"
      suppressHydrationWarning
    >
      <head nonce={nonce}>
        {!IS_PRODUCTION && process.env.VERCEL_ENV === "preview" && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <Script
            data-project-id="KjpMrKTnXquJVKfeqmjdTffVPf1a6Unw2LZ58iE4"
            src="https://snippet.meticulous.ai/v1/stagingMeticulousSnippet.js"
          />
        )}
        <style>{`
          :root {
            --font-inter: ${interFont.style.fontFamily.replace(/\'/g, "")};
          }
        `}</style>
      </head>
      <body
        className={cn(
          "dark:bg-darkgray-50 todesktop:!bg-transparent bg-subtle antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
