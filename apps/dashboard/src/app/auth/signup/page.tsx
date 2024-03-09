"use client";
import { Button } from "@/common/Button";
import { InputField } from "@/common/Input/InputField";
import { PasswordField } from "@/common/Input/PasswordField";
import SignupForm from "@/components/auth/Signup/SignupForm";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

interface pageProps {
  //Props
}

const page: React.FC<pageProps> = () => {
  return (
    <main className="grid w-screen h-screen grid-cols-12">
      {/* Left Side */}
      <section className="flex flex-col items-center justify-center col-span-7 dark:bg-subtle">
        {/* TODO: Add the Testimonials or Screen Shoots */}
        {/* Testimonials */}
        <div className="w-[80%]"></div>
      </section>

      {/* Right Side */}
      <section className="flex flex-col items-center justify-center h-full col-span-5 px-14 bg-muted">
        <div className="mb-8 text-center">
          <h3 className="mb-3 text-3xl font-semibold">
            Create your Bookmarker account
          </h3>
          <p className="dark:text-subtle">Free for everyone</p>
        </div>

        {/* Form */}
        <SignupForm />

        <div className="divider mt-5 my-3 w-[70%]" />

        {/* Go to Login Page */}
        <div className="uppercase text-md">
          <span>Already have an account?</span>
          <Button variant={"link"}>
            <Link href="/auth/login" className="uppercase">
              Signin
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default page;
