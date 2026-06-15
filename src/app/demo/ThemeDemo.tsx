"use client";

import { Box, Button, Chip, Stack, Typography } from "@mui/material";

import { useAppTheme } from "@/providers/AppThemeProvider";

const themes = ["light", "dark", "blue", "orange"] as const;

export function ThemeDemo() {
  const { themeName, setThemeName } = useAppTheme();

  return (
    <Stack spacing={2}>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
          }}
        >
          Active Theme
        </Typography>

        <Chip sx={{ mt: 1 }} color="primary" label={themeName} />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          flexWrap: "wrap",
        }}
      >
        {themes.map((theme) => (
          <Button
            key={theme}
            variant={themeName === theme ? "contained" : "outlined"}
            color="primary"
            onClick={() => setThemeName(theme)}
          >
            {theme}
          </Button>
        ))}
      </Box>
    </Stack>
  );
}
