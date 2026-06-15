"use client";

import { MenuItem, TextField, type TextFieldProps } from "@mui/material";

export type SelectOption = {
  label: string;
  value: string | number;
};

export type SelectProps = Omit<TextFieldProps, "select"> & {
  options: SelectOption[];
};

export function Select({ options, ...props }: SelectProps) {
  return (
    <TextField select {...props}>
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
