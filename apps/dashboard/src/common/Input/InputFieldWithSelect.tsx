import * as React from "react";

import type { InputFieldProps } from "./types";
import { InputField } from "./InputField";
import { UnstyledSelect } from "../form/Select";

export const InputFieldWithSelect = React.forwardRef<
  HTMLInputElement,
  InputFieldProps & { selectProps: typeof UnstyledSelect }
>(function EmailField(props, ref) {
  return (
    <InputField
      ref={ref}
      {...props}
      inputIsFullWidth={false}
      addOnClassname="!px-0"
      addOnSuffix={<UnstyledSelect {...props.selectProps} />}
    />
  );
});
