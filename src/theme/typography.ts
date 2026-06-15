import type { ThemeOptions } from "@mui/material/styles";

export const typography: ThemeOptions["typography"] = {
  fontFamily: ["Inter", "Arial", "sans-serif"].join(","),

  h1: {
    fontSize: 40,
    fontWeight: 700,
  },

  h2: {
    fontSize: 32,
    fontWeight: 700,
  },

  h3: {
    fontSize: 24,
    fontWeight: 600,
  },

  body1: {
    fontSize: 16,
  },

  body2: {
    fontSize: 14,
  },
};
