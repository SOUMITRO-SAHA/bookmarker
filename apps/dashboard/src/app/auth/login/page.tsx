"use client";
import { Button } from "@/common/Button";
import { InputField } from "@/common/Input/InputField";
import { PasswordField } from "@/common/Input/PasswordField";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@repo/db/zod-utils";
import { signIn } from "next-auth/react";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
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

interface LoginValues {
  email: string;
  password: string;
  totpCode: string;
  backupCode: string;
  csrfToken: string;
}

const page: React.FC<pageProps> = () => {
  const formSchema = z
    .object({
      email: z
        .string()
        .min(1, "error_required_field")
        .email("enter_valid_email"),
      password: z.string().min(1, "error_required_field"),
    })
    // Passthrough other fields like totpCode
    .passthrough();

  const methods = useForm<LoginValues>({ resolver: zodResolver(formSchema) });
  const { register, formState } = methods;
  const [twoFactorRequired, setTwoFactorRequired] = React.useState(false);
  const [twoFactorLostAccess, setTwoFactorLostAccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  // Function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
          <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="emailField">Email Addres</label>
            <InputField placeholder="jhon@email.com" />
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

        <div className="flex flex-col w-full gap-5 mt-3">
          <Button
            variant="outline"
            size={"lg"}
            className={cn("flex w-full items-center gap-2")}
            onClick={async (e) => {
              e.preventDefault();
              await signIn("google");
            }}
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
        {/* Regester Page Redirection */}
      </section>
      <h3 className="mt-6">
        <span>Don't have an account?</span>
        <Button variant={"link"} className="p-2">
          <Link href={"signup"} className="uppercase">
            Sign up
          </Link>
        </Button>
      </h3>
    </main>
  );
};

export default page;
