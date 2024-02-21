"use client";

import { Button } from "@/common/Button";
import { ArrowLeft } from "lucide-react";
import React from "react";

interface errorProps {
  //Props
}

const error: React.FC<errorProps> = () => {
  return (
    <main className="bg-background">
      <div className="uppercase">Error 404</div>
      <div className="text-3xl capitalize">This page does not exist.</div>
      <div>Check for spelling mistakes or go back to the previous page.</div>
      <Button>
        <span>
          <ArrowLeft />
        </span>
        <span>Go Back to Home</span>
      </Button>
    </main>
  );
};

export default error;
