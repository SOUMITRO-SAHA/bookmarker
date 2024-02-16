"use client";

import { Button } from "@repo/ui/dist/components/ui/button.mjs";

export default function Page(): JSX.Element {
  return (
    <main className="flex items-center justify-center w-screen h-screen text-white bg-red-500">
      <div className="text-center">
        <div className="my-3 text-3xl">Home Page</div>
        <Button type="submit" className="w-20 h-auto disabled:opacity-100">
          Login
        </Button>
      </div>
    </main>
  );
}
