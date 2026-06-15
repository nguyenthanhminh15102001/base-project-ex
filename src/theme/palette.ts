import type { ThemeOptions } from "@mui/material/styles";

export type ThemeName = "light" | "dark" | "blue" | "orange";

export const palettes: Record<ThemeName, ThemeOptions["palette"]> = {
  light: {
    mode: "light",
    primary: { main: "#034ea1" },
    secondary: { main: "#ef981e" },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },
    divider: "#e5e7eb",
  },

  dark: {
    mode: "dark",
    primary: { main: "#60a5fa" },
    secondary: { main: "#fbbf24" },
    background: {
      default: "#0f172a",
      paper: "#111827",
    },
    text: {
      primary: "#f9fafb",
      secondary: "#9ca3af",
    },
    divider: "#374151",
  },

  blue: {
    mode: "light",
    primary: { main: "#2563eb" },
    secondary: { main: "#06b6d4" },
    background: {
      default: "#eff6ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#172554",
      secondary: "#475569",
    },
    divider: "#bfdbfe",
  },

  orange: {
    mode: "light",
    primary: { main: "#ef981e" },
    secondary: { main: "#034ea1" },
    background: {
      default: "#fff7ed",
      paper: "#ffffff",
    },
    text: {
      primary: "#431407",
      secondary: "#7c2d12",
    },
    divider: "#fed7aa",
  },
};
