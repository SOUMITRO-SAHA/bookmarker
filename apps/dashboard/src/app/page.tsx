"use client";
import { auth } from "@/auth";
import Navbar from "@/components/LandingPage/Navbar/Navbar";
import { SessionProvider } from "next-auth/react";

export default async function Main() {
  const session = await auth();
  console.log(session);
  return (
    <SessionProvider>
      <main>
        {/* Navbar */}
        <Navbar />
      </main>
    </SessionProvider>
  );
}
