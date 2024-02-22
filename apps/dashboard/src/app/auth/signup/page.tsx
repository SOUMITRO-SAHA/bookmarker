"use client";
import { Button } from "@/common/Button";
import { InputField } from "@/common/Input/InputField";
import { PasswordField } from "@/common/Input/PasswordField";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaInstagram } from "react-icons/fa6";

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

        {/* Go to Login Page */}
        <div className="text-sm">
          <span>Already have an account?</span>
          <Button variant={"link"} className={cn("p-2")}>
            <Link href="login">Signin</Link>
          </Button>
        </div>
      </section>

      {/* Right Side */}
      <section className="flex flex-col items-center justify-center h-full col-span-5 bg-muted">
        <div className="mb-8 text-center">
          <h3 className="mb-3 text-3xl font-semibold">
            Create your Bookmarker account
          </h3>
          <p className="dark:text-subtle">Free for everyone</p>
        </div>

        {/* Form */}
        <form action="" className="w-[60%] flex flex-col gap-5">
          {/* username */}
          <InputField
            placeholder="username"
            addOnLeading={<div>bookmarker/</div>}
          />
          {/* Email */}
          <div>
            <p className="mb-2">Email</p>
            <InputField placeholder="jhon@email.com" />
          </div>

          {/* Password */}
          <div>
            <div>
              <p className="mb-2">Password</p>
              <PasswordField />
              <ul className="mt-1 ml-8 text-sm list-disc">
                <li>Mix of uppercase & lowercase letters</li>
                <li>Minimum 7 characters long</li>
                <li>Contain at least 1 number</li>
              </ul>
            </div>
          </div>

          {/* Button */}
          <Button>Create Account</Button>
        </form>
        <div className="flex items-center justify-center w-full gap-2 my-8">
          <div className="divider bg-muted w-[20%]" />
          <div className="w-auto text-muted-foreground">Or continue with</div>
          <div className="divider bg-muted w-[20%]" />
        </div>

        {/* Other Provider */}
        <div className="flex items-center justify-center w-[80%] gap-5">
          <Button
            variant="outline"
            size={"lg"}
            className={cn("flex w-full items-center gap-2")}
          >
            <FaGoogle />
            <span>Google</span>
          </Button>
          <Button
            variant="outline"
            size={"lg"}
            className={cn("flex w-full items-center gap-2")}
          >
            <FaInstagram />
            <span>Instagram</span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default page;
