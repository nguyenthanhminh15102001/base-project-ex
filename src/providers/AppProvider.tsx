"use client";

import { MuiProvider } from "./MuiProvider";
import { AppThemeProvider } from "./AppThemeProvider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppThemeProvider>
      <MuiProvider>{children}</MuiProvider>
    </AppThemeProvider>
  );
}
