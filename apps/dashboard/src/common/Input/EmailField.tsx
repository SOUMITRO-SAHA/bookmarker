import * as React from "react";
import { InputFieldProps } from "./types";
import { Input } from "../ui/input";
import { InputField } from "./InputField";

export const EmailInput = React.forwardRef<HTMLInputElement, InputFieldProps>(
  function EmailInput(props, ref) {
    return (
      <Input
        ref={ref}
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
        inputMode="email"
        {...props}
      />
    );
  }
);

export const EmailField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  function EmailField(props, ref) {
    return (
      <InputField
        ref={ref}
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
        inputMode="email"
        {...props}
      />
    );
  }
);
