import { createTheme } from "@mui/material/styles";

import { components } from "./components";

import { shape } from "./shape";
import { typography } from "./typography";
import { palettes, ThemeName } from "./palette";

export function createAppTheme(themeName: ThemeName) {
  return createTheme({
    palette: palettes[themeName],
    typography,
    shape,
    components,
  });
}
