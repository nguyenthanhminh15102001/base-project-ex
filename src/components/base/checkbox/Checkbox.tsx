"use client";

import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  type CheckboxProps as MuiProps,
} from "@mui/material";

export type CheckboxProps = MuiProps & {
  label?: string;
};

export function Checkbox({ label, ...props }: CheckboxProps) {
  if (!label) {
    return <MuiCheckbox {...props} />;
  }

  return (
    <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />
  );
}
