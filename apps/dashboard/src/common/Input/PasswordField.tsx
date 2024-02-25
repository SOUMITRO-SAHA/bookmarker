import * as React from "react";
import { InputField } from "./InputField";
import Tooltip from "../tooltip/Tooltip";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../Button";
import { InputFieldProps } from "./types";

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
        "addon-wrapper mb-0 ltr:border-r-0 ltr:pr-10 rtl:border-l-0 rtl:pl-10",
        props.className
      )}
      addOnFilled={false}
      addOnSuffix={
        <Tooltip content={textLabel}>
          <Button
            asDiv
            className="flex items-center justify-center w-6 h-10 p-1 cursor-pointer text-emphasis"
            variant={"ghost"}
            onClick={() => toggleIsPasswordVisible()}
            suffixIcon={
              isPasswordVisible ? (
                <EyeOff className="h-4 stroke-[2.5px]" />
              ) : (
                <Eye className="h-4 stroke-[2.5px]" />
              )
            }
          ></Button>
        </Tooltip>
      }
    />
  );
});
