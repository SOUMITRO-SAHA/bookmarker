"use client";
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
  FormMessage,
} from "@/common/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@repo/shared";

interface SignupFormProps {
  //Props
}

const SignupForm: React.FC<SignupFormProps> = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    const { username, email, password } = values;
    console.log(username, email, password);
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
                <FormLabel>User Name</FormLabel>
                <InputField
                  placeholder="username"
                  addOnLeading={<div>bookmarker/</div>}
                  {...field}
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
                    placeholder="i.e. john.demo@emample.com"
                    {...field}
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
                  <PasswordField {...field} />
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
        <div className="w-full">
          <Button type="submit" size={"lg"}>
            Create Account
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignupForm;
