"use client";
import { login } from "@/actions/login";
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
import { FormError } from "@/components/auth/Error";
import { FormSuccess } from "@/components/auth/Success";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@repo/shared";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface LoginFormProps {
  //Props
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [success, setSuccess] = React.useState<string>("");
  const [error, setError] = React.useState("");
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    // Before Calling the Server Actions Clearing the States
    setSuccess("");
    setError("");

    // Calling the Server Actions
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.success) setSuccess(data.success);
          if (data?.error) setError(data.error);
        })
        .catch((err) => setError(err));
    });
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
              </FormItem>
            )}
          />
        </div>
        <FormSuccess message={success} />
        <FormError message={error} />
        <Button loading={isPending} size={"full"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
