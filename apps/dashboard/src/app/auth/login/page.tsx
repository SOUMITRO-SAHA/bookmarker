"use client";
import { Button } from "@/common/Button";
import LoginForm from "@/components/auth/Login/LoginForm";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@repo/db/zod-utils";
import { signIn } from "next-auth/react";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import z from "zod";

interface pageProps {
  //Props
}

const page: React.FC<pageProps> = () => {
  // Side Effect
  return (
    <main
      className={cn(
        "flex h-screen w-screen flex-col items-center justify-center"
      )}
    >
      <div className="my-8 text-center">
        <h4 className="text-primary-foreground dark:text-primary">
          Bookmarker
        </h4>
        <h2 className="mt-3 text-3xl font-semibold">Welcome Back</h2>
      </div>
      <section
        className={cn(
          "dark:bg-muted rounded w-[25rem] p-8 border border-border"
        )}
      >
        {/* Login Form */}
        <LoginForm />

        {/* Divider */}
        <div className="flex items-center justify-center w-full gap-3 my-3">
          <div className="w-[20%] divider" />
          <div className="text-xs">Or continue with</div>
          <div className="w-[20%] divider" />
        </div>
        {/* Other Providers */}
        <div className="grid items-center justify-center w-full grid-cols-12 gap-3 mt-3">
          <div className="col-span-6">
            <Button
              variant="outline"
              size={"full"}
              onClick={async (e) => {
                e.preventDefault();
                await signIn("google");
              }}
            >
              <FaGoogle />
              <span className="ml-3">Google</span>
            </Button>
          </div>
          <div className="col-span-6">
            <Button variant="outline" size={"full"}>
              <FaInstagram />
              <span className="ml-3">Instagram</span>
            </Button>
          </div>
          <div className="col-span-6">
            <Button variant="outline" size={"full"}>
              <FaTwitter />
              <span className="ml-3">Twitter</span>
            </Button>
          </div>
          <div className="w-full col-span-6">
            <Button variant="outline" size={"full"}>
              <FaLinkedin />
              <span className="ml-3">LinkedIn</span>
            </Button>
          </div>
        </div>
        {/* Regester Page Redirection */}
      </section>
      <h3 className="mt-6">
        <span>Don't have an account?</span>
        <Button variant={"link"}>
          <Link href={"signup"} className="uppercase">
            Sign up
          </Link>
        </Button>
      </h3>
    </main>
  );
};

export default page;
