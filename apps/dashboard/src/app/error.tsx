"use client";

import { Button } from "@/common/Button";
import { PageTitle, TitleHeader } from "@/components/General";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface errorProps {
  //Props
}

const error: React.FC<errorProps> = () => {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-background">
      <section className="flex flex-col justify-center">
        <TitleHeader
          title="Error 404"
          subtitle="This page does not exist."
          description="Check for spelling mistakes or go back to the previous page."
        />
        <Button
          variant={"link"}
          onClick={() => {
            window.location.reload();
          }}
        >
          <Link href={"/"} className="flex items-center gap-3">
            <span>
              <ArrowLeft />
            </span>
            <span>Go Back to Home</span>
          </Link>
        </Button>
      </section>
    </main>
  );
};

export default error;
