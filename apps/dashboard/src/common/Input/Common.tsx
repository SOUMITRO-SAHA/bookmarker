import { cn } from "@/lib/utils";

export function InputLeading(props: JSX.IntrinsicElements["div"]) {
  return (
    <span className="inline-flex items-center flex-shrink-0 px-3 border rounded-l-sm bg-muted border-default text-subtle ltr:border-r-0 rtl:border-l-0 sm:text-sm sm:leading-4">
      {props.children}
    </span>
  );
}

export function FieldsetLegend(props: JSX.IntrinsicElements["legend"]) {
  return (
    <legend
      {...props}
      className={cn(
        "text-default text-sm font-medium leading-4",
        props.className
      )}
    >
      {props.children}
    </legend>
  );
}

export function InputGroupBox(props: JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={cn(
        "bg-default border-default space-y-2 rounded-sm border p-2",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
