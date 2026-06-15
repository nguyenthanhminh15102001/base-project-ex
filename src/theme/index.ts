import { createTheme } from "@mui/material/styles";

import { palette } from "./palette";

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});
