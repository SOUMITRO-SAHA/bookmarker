import { cn } from "@/lib/utils";
import type { GroupBase, InputProps, Props } from "react-select";
import ReactSelect, { components } from "react-select";

export type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Props<Option, IsMulti, Group>;

export const InputComponent = <
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>,
>({
  inputClassName,
  ...props
}: InputProps<Option, IsMulti, Group>) => {
  return (
    <components.Input
      // disables our default form focus hightlight on the react-select input element
      inputClassName={cn("focus:ring-0 focus:ring-offset-0", inputClassName)}
      {...props}
    />
  );
};

export function UnstyledSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ ...props }: SelectProps<Option, IsMulti, Group>) {
  return (
    <ReactSelect
      {...props}
      isSearchable={false}
      theme={(theme) => ({ ...theme, borderRadius: 0, border: "none" })}
      components={{
        IndicatorSeparator: () => null,
        Input: InputComponent,
      }}
      styles={{
        container: (provided) => ({
          ...provided,
          width: "100%",
        }),
        control: (provided) => ({
          ...provided,
          backgroundColor: " transparent",
          border: "none",
          boxShadow: "none",
        }),
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? "var(--brand-text-color)" : "black",
          ":active": {
            backgroundColor: state.isSelected ? "" : "var(--brand-color)",
            color: "var(--brand-text-color)",
          },
        }),
        indicatorSeparator: () => ({
          display: "hidden",
          color: "black",
        }),
      }}
    />
  );
}
