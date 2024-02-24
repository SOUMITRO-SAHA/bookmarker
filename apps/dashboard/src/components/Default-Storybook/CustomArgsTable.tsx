import { ArgsTable } from "@storybook/addon-docs";
import type { SortType } from "@storybook/blocks";
import type { PropDescriptor } from "@storybook/preview-api";

type Component = any;
type BasePorps = {
  include?: PropDescriptor;
  exclude?: PropDescriptor;
  sort?: SortType;
};
type OfProps = BasePorps & {
  of: "." | "^" | Component;
};

export function CustomArgsTable({ of, sort }: OfProps) {
  return (
    <div className="custom-args-wrapper">
      <ArgsTable of={of} sort={sort} />
    </div>
  );
}
