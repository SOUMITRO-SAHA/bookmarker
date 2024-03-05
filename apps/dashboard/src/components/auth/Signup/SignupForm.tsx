"use client";
import { register } from "@/actions/register";
import { Button } from "@/common/Button";
import { InputField } from "@/common/Input/InputField";
import { PasswordField } from "@/common/Input/PasswordField";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/common/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@repo/shared";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormSuccess } from "../Success";
import { FormError } from "../Error";

interface SignupFormProps {
  //Props
}

const SignupForm: React.FC<SignupFormProps> = () => {
  const [isPending, startTransition] = React.useTransition();
  const [success, setSuccess] = React.useState<string>("");
  const [error, setError] = React.useState("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setSuccess("");
    setError("");

    startTransition(() => {
      register(values)
        .then((data) => {
          if (data.success) setSuccess(data.success);
          if (data.error) setError(data.error);
        })
        .catch((err) => {
          setError(err);
        });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserName</FormLabel>
                <InputField
                  {...field}
                  disabled={isPending}
                  placeholder="username"
                  addOnLeading={<div>bookmarker/</div>}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl className="mt-[1px]">
                  <InputField
                    {...field}
                    disabled={isPending}
                    placeholder="i.e. john.demo@emample.com"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordField disabled={isPending} {...field} />
                </FormControl>
                <FormDescription>
                  <ul className="mt-1 ml-8 text-sm list-disc">
                    <li>Mix of uppercase & lowercase letters</li>
                    <li>Minimum 8 characters long</li>
                    <li>Contain at least 1 number</li>
                  </ul>
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
        <FormSuccess message={success} />
        <FormError message={error} />
        <Button type="submit" loading={isPending} size={"full"}>
          Create Account
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
