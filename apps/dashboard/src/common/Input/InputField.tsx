import * as React from "react";
import { InputFieldProps, InputProps } from "./types";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { Label } from "./Label";
import { X } from "lucide-react";
import { HintsOrErrors } from "./HintOrErrors";

export function InputLeading(props: JSX.IntrinsicElements["div"]) {
  return (
    <span className="inline-flex items-center flex-shrink-0 px-3 border rounded-l-sm bg-muted border-default text-subtle ltr:border-r-0 rtl:border-l-0 sm:text-sm sm:leading-4">
      {props.children}
    </span>
  );
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input({ isFullWidth = true, ...props }, ref) {
    return (
      <input
        {...props}
        ref={ref}
        className={cn(
          "hover:border-emphasis dark:focus:border-emphasis border-border dark:bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default mb-2 block h-10 rounded-md border px-3 py-2 text-sm leading-4 transition focus:border-neutral-300 focus:outline-none focus:ring-2 disabled:cursor-not-allowed",
          isFullWidth && "w-full",
          props.className
        )}
      />
    );
  }
);

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
      "border-border hover:border-emphasis h-10 border px-3",
      isFilled && "bg-muted",
      onClickAddon && "cursor-pointer disabled:hover:cursor-not-allowed",
      className
    )}
  >
    <div
      className={cn(
        "min-h-9 flex flex-col justify-center text-sm leading-7",
        error ? "text-error" : "text"
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
              <span className="ml-1 font-medium text-default">*</span>
            ) : null}
            {LockedIcon}
          </Skeleton>
        )}
        {addOnLeading || addOnSuffix ? (
          <div
            dir="ltr"
            className="relative flex items-center mb-1 rounded-md focus-within:ring-brand-default group focus-within:outline-none focus-within:ring-2"
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
              isFullWidth={inputIsFullWidth}
              className={cn(
                className,
                "disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed",
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
            isFullWidth={inputIsFullWidth}
            disabled={readOnly || disabled}
          />
        )}
        <HintsOrErrors hintErrors={hintErrors} fieldName={name} />
        {hint && (
          <div className="flex items-center mt-2 text-sm text-default">
            {hint}
          </div>
        )}
      </div>
    );
  }
);

export const TextField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  function TextField(props, ref) {
    return <InputField ref={ref} {...props} />;
  }
);
