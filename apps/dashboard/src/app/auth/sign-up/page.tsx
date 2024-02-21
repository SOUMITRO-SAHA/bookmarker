"use client";
import { Button } from "@/common/Button";
import { PasswordField } from "@/common/Input/PasswordField";
import { Input } from "@/common/ui/input";
import { cn } from "@/lib/utils";
import { signupSchema } from "@repo/db/zod-utils";
import * as React from "react";
import { FaGoogle, FaInstagram } from "react-icons/fa6";
import z from "zod";

interface pageProps {
  //Props
}

type FormValues = z.infer<typeof signupSchema>;

interface FormData {
  name: string;
  password: string;
}
const formDataInitialState = {
  name: "",
  password: "",
};

const page: React.FC<pageProps> = () => {
  const [formData, setFormData] = React.useState(formDataInitialState);

  // Function
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // Side Effect

  return (
    <main
      className={cn(
        "bg-background flex h-screen w-screen flex-col items-center justify-center"
      )}
    >
      <div className="text-center my-8">
        <h4 className="text-primary-foreground dark:text-primary">
          Bookmarker
        </h4>
        <h2 className="text-3xl">Welcome Back</h2>
      </div>
      <section
        className={cn(
          "dark:bg-background-muted rounded w-[30rem] p-8 px-12 border border-border"
        )}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="emailField">Email Addres</label>
            <Input placeholder="jhon@email.com" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <div>Password</div>
              <div className="cursor-pointer hover:underline">Forgot?</div>
            </div>
            <PasswordField />
          </div>

          <Button className={cn("mt-6")}>Sign In</Button>

          <div className="divider" />
        </form>

        <div className="w-full flex flex-col gap-5 mt-3">
          <Button
            variant="outline"
            size={"lg"}
            className={cn("flex w-full items-center gap-2")}
          >
            <FaGoogle />
            <span>Sign in with Google</span>
          </Button>
          <Button
            variant="outline"
            size={"lg"}
            className={cn("flex w-full items-center gap-2")}
          >
            <FaInstagram />
            <span>Sign in with Instagram</span>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default page;
