"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Theme } from "@mui/material/styles";

import { createAppTheme } from "@/theme";
import { ThemeName } from "@/theme/palette";

type ThemeContextValue = {
  themeName: ThemeName;
  theme: Theme;
  setThemeName: (themeName: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  const theme = useMemo(() => createAppTheme(themeName), [themeName]);

  const value = useMemo(
    () => ({ themeName, theme, setThemeName }),
    [themeName, theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useAppTheme must be used within AppThemeProvider");
  }

  return context;
}
