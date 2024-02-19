import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import * as React from "react";

import { InputField } from "./InputField";
import { InputFieldProps } from "./types";
import Tooltip from "../tooltip/Tooltip";

export const PasswordField = React.forwardRef<
  HTMLInputElement,
  InputFieldProps
>(function PasswordField(props, ref) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const toggleIsPasswordVisible = React.useCallback(
    () => setIsPasswordVisible(!isPasswordVisible),
    [isPasswordVisible, setIsPasswordVisible]
  );
  const textLabel = isPasswordVisible ? "hide_password" : "show_password";

  return (
    <InputField
      type={isPasswordVisible ? "text" : "password"}
      placeholder={props.placeholder || "•••••••••••••"}
      ref={ref}
      {...props}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 mb-0 ltr:border-r-0 ltr:pr-10 rtl:border-l-0 rtl:pl-10",
        props.className
      )}
      addOnFilled={false}
      addOnSuffix={
        <Tooltip content={textLabel}>
          <button
            className="text-emphasis h-9"
            tabIndex={-1}
            type="button"
            onClick={() => toggleIsPasswordVisible()}
          >
            {isPasswordVisible ? (
              <EyeOff className="h-4 stroke-[2.5px]" />
            ) : (
              <Eye className="h-4 stroke-[2.5px]" />
            )}
            <span className="sr-only">{textLabel}</span>
          </button>
        </Tooltip>
      }
    />
  );
});
