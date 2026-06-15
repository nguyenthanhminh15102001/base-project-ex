"use client";

import TextField, { type TextFieldProps } from "@mui/material/TextField";

type InputSize = "sm" | "md" | "lg";

export type InputProps = Omit<TextFieldProps, "size"> & {
  inputSize?: InputSize;
};

const sizes = {
  sm: 36,
  md: 44,
  lg: 52,
};

export function Input({
  inputSize = "md",
  fullWidth = true,
  sx,
  ...props
}: InputProps) {
  return (
    <TextField
      fullWidth={fullWidth}
      sx={{
        "& .MuiInputBase-root": {
          height: sizes[inputSize],
        },
        ...sx,
      }}
      {...props}
    />
  );
}
