"use client";

import { Button } from "@/common/Button";
import { BrandTitle } from "@/lib/constant";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <nav className="container flex items-center justify-between p-5 mx-auto max-w-7xl">
      <div className="flex items-center gap-3">
        <Image
          src={theme === "light" ? "/bookmarker.svg" : "/bookmarker-light.svg"}
          alt=""
          width={40}
          height={40}
        />
        <h1 className="text-2xl font-semibold ">{BrandTitle}</h1>
      </div>
      <ul className="flex items-center gap-5 p-3 px-10 rounded-full bg-subtle border-border">
        <li>
          <Link href={"#home"}>Home</Link>
        </li>
        <li>
          <Link href={"#pricing"}>Pricing</Link>
        </li>
      </ul>
      <Button size={"lg"}>
        <Link href={"/auth/login"}>Login</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
