"use client";

import MuiButton, {
  type ButtonProps as MuiButtonProps,
} from "@mui/material/Button";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type ButtonProps = Omit<MuiButtonProps, "size"> & {
  children: ReactNode;
  href?: string;
  openNewTab?: boolean;
  size?: ButtonSize;
  rounded?: boolean;
};

const sizeStyles: Record<ButtonSize, object> = {
  xs: {
    height: 28,
    px: 1.5,
    fontSize: 12,
  },
  sm: {
    height: 32,
    px: 2,
    fontSize: 13,
  },
  md: {
    height: 40,
    px: 2.5,
    fontSize: 14,
  },
  lg: {
    height: 48,
    px: 3,
    fontSize: 15,
  },
  xl: {
    height: 56,
    px: 4,
    fontSize: 16,
  },
};

export function Button({
  children,
  href,
  openNewTab = false,
  size = "md",
  rounded = false,
  sx,
  ...props
}: ButtonProps) {
  const styles = {
    ...sizeStyles[size],
    borderRadius: rounded ? 999 : 1,
    textTransform: "none",
    fontWeight: 600,
    ...sx,
  };

  if (href) {
    return (
      <MuiButton
        component={Link}
        href={href}
        target={openNewTab ? "_blank" : undefined}
        rel={openNewTab ? "noopener noreferrer" : undefined}
        sx={styles}
        {...props}
      >
        {children}
      </MuiButton>
    );
  }

  return (
    <MuiButton sx={styles} {...props}>
      {children}
    </MuiButton>
  );
}
