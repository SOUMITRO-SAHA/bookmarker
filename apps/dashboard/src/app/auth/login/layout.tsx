import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login | Bookmarker",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <>{children}</>;
}
