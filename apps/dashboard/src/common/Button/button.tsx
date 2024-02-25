import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import Loader from "../Loader/Loader";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-inverted shadow hover:bg-inverted active:ring-inverted",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 dark:hover:bg-primary/80 disabled:shadow-sm",
        outline:
          "border border-border bg-bg dark:text-emphasis shadow-sm hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive dark:bg-attention text-destructive-foreground shadow-sm hover:bg-destructive/90 active:ring-secondary",
        ghost: "hover:bg-accent text",
        link: "text underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  asDiv?: boolean;
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
}
const Button = React.forwardRef<
  HTMLButtonElement | HTMLDivElement,
  ButtonProps
>((props: ButtonProps, ref) => {
  const {
    className,
    variant,
    size,
    asDiv = false,
    asChild = false,
    loading = false,
    prefixIcon,
    suffixIcon,
  } = props;
  const Comp = asChild ? Slot : asDiv ? "div" : "button";
  const disabled = props.disabled || loading;

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref as React.RefObject<HTMLButtonElement | HTMLDivElement | any>}
      {...props}
      disabled={disabled}
    >
      {loading ? (
        <div className="flex items-center justify-center w-full gap-2">
          <Loader size={15} color={variant === "default" ? "#556671" : ""} />
          <span aria-disabled>{props.children}</span>
        </div>
      ) : (
        <div
          className={cn(
            "flex items-center justify-center",
            prefixIcon ? "gap-2" : "",
            suffixIcon ? "gap-2" : ""
          )}
        >
          {prefixIcon && <>{prefixIcon}</>}
          {props.children}
          {suffixIcon && <>{suffixIcon}</>}
        </div>
      )}
    </Comp>
  );
});
Button.displayName = "Button";
export { Button, buttonVariants };
