import { cn } from "@/lib/utils";
import * as React from "react";
import { Label } from "./Label";
import { useFormContext } from "react-hook-form";
import { Alert } from "../Alert/Alert";

type TextAreaProps = JSX.IntrinsicElements["textarea"];

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextAreaInput(props, ref) {
    return (
      <textarea
        ref={ref}
        {...props}
        className={cn(
          "hover:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default mb-2 block w-full rounded-md border px-3 py-2 text-sm transition focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:cursor-not-allowed",
          props.className
        )}
      />
    );
  }
);

type TextAreaFieldProps = {
  label?: React.ReactNode;
  t?: (key: string) => string;
} & React.ComponentProps<typeof TextArea> & {
    name: string;
    labelProps?: React.ComponentProps<typeof Label>;
  };

export const TextAreaField = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(function TextField(props, ref) {
  const id = React.useId();
  const methods = useFormContext();
  const {
    label = props.name as string,
    labelProps,
    placeholder = `${props.name}_placeholder` !== `${props.name}_placeholder`
      ? `${props.name}_placeholder`
      : "",
    ...passThrough
  } = props;
  return (
    <div>
      {!!props.name && (
        <Label htmlFor={id} {...labelProps}>
          {label}
        </Label>
      )}
      <TextArea ref={ref} placeholder={placeholder} {...passThrough} />
      {methods?.formState?.errors[props.name]?.message && (
        <Alert
          className="mt-1"
          severity="error"
          message={<>{methods.formState.errors[props.name]?.message}</>}
        />
      )}
    </div>
  );
});
