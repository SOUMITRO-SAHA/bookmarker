import * as React from "react";

import { Input } from "../ui/input";
import { InputFieldProps } from "./types";
import { Button } from "../Button";
import { Tooltip } from "../tooltip/Tooltip";
import { Eye, EyeOff, X } from "lucide-react";
import { HintsOrErrors } from "./HintOrErrors";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { Label } from "./Label";

type AddonProps = {
  children: React.ReactNode;
  isFilled?: boolean;
  className?: string;
  error?: boolean;
  onClickAddon?: () => void;
};

const Addon = ({
  isFilled,
  children,
  className,
  error,
  onClickAddon,
}: AddonProps) => (
  <div
    onClick={onClickAddon && onClickAddon}
    className={cn(
      "addon-wrapper border-default [input:hover_+_&]:border-emphasis [input:hover_+_&]:border-l-default [&:has(+_input:hover)]:border-emphasis [&:has(+_input:hover)]:border-r-default h-10 border px-3",
      isFilled && "bg-subtle",
      onClickAddon && "cursor-pointer disabled:hover:cursor-not-allowed",
      className
    )}
  >
    <div
      className={cn(
        "min-h-9 flex flex-col justify-center text-sm leading-7",
        error ? "text-error" : "text-default"
      )}
    >
      <span className="flex whitespace-nowrap">{children}</span>
    </div>
  </div>
);

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(props, ref) {
    const id = React.useId();
    const name = props.name || "";
    const {
      label = name,
      labelProps,
      labelClassName,
      disabled,
      LockedIcon,
      placeholder = `${name}_placeholder`,
      className,
      addOnLeading,
      addOnSuffix,
      addOnFilled = true,
      addOnClassname,
      inputIsFullWidth,
      hint,
      type,
      hintErrors,
      labelSrOnly,
      containerClassName,
      readOnly,
      showAsteriskIndicator,
      onClickAddon,
      ...passThrough
    } = props;

    const [inputValue, setInputValue] = React.useState<string>("");

    return (
      <div className={cn(containerClassName)}>
        {!!name && (
          <Skeleton
            as={Label}
            htmlFor={id}
            loadingClassName="w-16"
            {...labelProps}
            className={cn(
              labelClassName,
              labelSrOnly && "sr-only",
              props.error && "text-error"
            )}
          >
            {label}
            {showAsteriskIndicator && !readOnly && passThrough.required ? (
              <span className="text-default ml-1 font-medium">*</span>
            ) : null}
            {LockedIcon}
          </Skeleton>
        )}
        {addOnLeading || addOnSuffix ? (
          <div
            dir="ltr"
            className="focus-within:ring-primary group relative mb-1 flex items-center rounded-md focus-within:outline-none focus-within:ring-2"
          >
            {addOnLeading && (
              <Addon
                isFilled={addOnFilled}
                className={cn(
                  "ltr:rounded-l-md rtl:rounded-r-md",
                  addOnClassname
                )}
              >
                {addOnLeading}
              </Addon>
            )}
            <Input
              id={id}
              type={type}
              placeholder={placeholder}
              className={cn(
                className,
                "disabled:bg-muted disabled:hover:border-primary-foregrounddisabled:cursor-not-allowed",
                addOnLeading && "rounded-l-none border-l-0",
                addOnSuffix && "rounded-r-none border-r-0",
                type === "search" && "pr-8",
                "!my-0 !ring-0"
              )}
              {...passThrough}
              {...(type == "search" && {
                onChange: (e) => {
                  setInputValue(e.target.value);
                  props.onChange && props.onChange(e);
                },
                value: inputValue,
              })}
              disabled={readOnly || disabled}
              ref={ref}
            />
            {addOnSuffix && (
              <Addon
                onClickAddon={onClickAddon}
                isFilled={addOnFilled}
                className={cn(
                  "ltr:rounded-r-md rtl:rounded-l-md",
                  addOnClassname
                )}
              >
                {addOnSuffix}
              </Addon>
            )}
            {type === "search" && inputValue?.toString().length > 0 && (
              <X
                className="text-subtle absolute top-2.5 h-4 w-4 cursor-pointer ltr:right-2 rtl:left-2"
                onClick={(e) => {
                  setInputValue("");
                  props.onChange &&
                    props.onChange(
                      e as unknown as React.ChangeEvent<HTMLInputElement>
                    );
                }}
              />
            )}
          </div>
        ) : (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            className={cn(
              className,
              "disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed"
            )}
            {...passThrough}
            readOnly={readOnly}
            ref={ref}
            disabled={readOnly || disabled}
          />
        )}
        <HintsOrErrors hintErrors={hintErrors} fieldName={name} />
        {hint && (
          <div className="text-default mt-2 flex items-center text-sm">
            {hint}
          </div>
        )}
      </div>
    );
  }
);

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
        "addon-wrapper placeholder:leading-8 mb-0 ltr:border-r-0 ltr:pr-10 rtl:border-l-0 rtl:pl-10",
        props.className
      )}
      addOnFilled={false}
      addOnSuffix={
        <Tooltip
          content={textLabel}
          className="bg-primary text-primary-foreground"
        >
          <Button
            className="text-emphasis w-6 p-1 h-10"
            variant={"ghost"}
            onClick={() => toggleIsPasswordVisible()}
          >
            {isPasswordVisible ? (
              <EyeOff className="h-4 stroke-[2.5px]" />
            ) : (
              <Eye className="h-4 stroke-[2.5px]" />
            )}
            <span className="sr-only">{textLabel}</span>
          </Button>
        </Tooltip>
      }
    />
  );
});
