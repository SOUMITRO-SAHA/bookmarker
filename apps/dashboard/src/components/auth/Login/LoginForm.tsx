"use client";
import { Button } from "@/common/Button";
import { InputField } from "@/common/Input/InputField";
import { PasswordField } from "@/common/Input/PasswordField";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/common/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@repo/shared";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface LoginFormProps {
  //Props
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    const { email, password } = values;
    // TODO: Now send this to the Next-Auth
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
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
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
