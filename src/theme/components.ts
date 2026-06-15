import type { ThemeOptions } from "@mui/material/styles";

export const components: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        boxShadow: "none",
        fontWeight: 600,
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
};
