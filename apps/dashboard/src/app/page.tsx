"use client";
import { api } from "@/lib/trpc";
import { useEffect } from "react";

export default function Page() {
  const test = api.getUsers.query();
  console.log(test);

  return <main>Home Page</main>;
}
