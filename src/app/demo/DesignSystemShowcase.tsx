"use client";

import { useState, type ChangeEvent, type ReactNode } from "react";
import {
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import {
  Button,
  Checkbox,
  Input,
  Loading,
  Modal,
  Select,
} from "@/components/ui";
import { ThemeDemo } from "./ThemeDemo";

const selectOptions = [
  { label: "Default", value: "default" },
  { label: "Focused", value: "focused" },
  { label: "Completed", value: "completed" },
];

const colorTokens = [
  { name: "Primary", paletteKey: "primary" },
  { name: "Secondary", paletteKey: "secondary" },
  { name: "Error", paletteKey: "error" },
  { name: "Info", paletteKey: "info" },
] as const;

const buttonSizes = ["xs", "sm", "md", "lg", "xl"] as const;

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        p: { xs: 2, md: 3 },
      }}
    >
      <Stack spacing={2.5}>
        <Box>
          <Typography component="h2" variant="h6" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5 }}>
            {description}
          </Typography>
        </Box>
        <Divider />
        {children}
      </Stack>
    </Paper>
  );
}

export function DesignSystemShowcase() {
  const theme = useTheme();
  const [selectedState, setSelectedState] = useState("default");
  const [accepted, setAccepted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSelectChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedState(event.target.value);
  }

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        px: { xs: 2, md: 4 },
        py: { xs: 3, md: 5 },
        transition: (theme) =>
          theme.transitions.create(["background-color", "color"]),
      }}
    >
      <Box sx={{ maxWidth: 1180, mx: "auto" }}>
        <Stack spacing={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box>
              <Chip label="Base Project EX" color="primary" size="small" />
              <Typography
                component="h1"
                variant="h3"
                sx={{
                  mt: 1.5,
                  fontWeight: 800,
                  maxWidth: 720,
                }}
              >
                Design System
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mt: 1, maxWidth: 680, fontSize: 18 }}
              >
                Tổng quan theme, token màu và các base components đang có trong
                project.
              </Typography>
            </Box>

            <Paper
              elevation={0}
              sx={{
                alignSelf: { xs: "stretch", md: "flex-start" },
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                p: 2,
                minWidth: { md: 260 },
              }}
            >
              <Typography variant="overline" color="text.secondary">
                Theme
              </Typography>
              <Typography sx={{ fontWeight: 700 }}>
                {theme.typography.fontFamily}
              </Typography>
              <Typography color="text.secondary">
                Radius {theme.shape.borderRadius}px
              </Typography>
            </Paper>
          </Box>

          <Section
            title="Theme Demo"
            description="Kiểm tra MUI theme tokens áp dụng vào base components."
          >
            <ThemeDemo />
          </Section>

          <Section
            title="Color Tokens"
            description="Các màu chính đang khai báo trong MUI theme."
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, minmax(0, 1fr))",
                  md: "repeat(4, minmax(0, 1fr))",
                },
                gap: 2,
              }}
            >
              {colorTokens.map((token) => {
                const color = theme.palette[token.paletteKey].main;

                return (
                  <Box key={token.paletteKey}>
                    <Box
                      sx={{
                        height: 96,
                        borderRadius: 2,
                        bgcolor: color,
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    />
                    <Typography sx={{ mt: 1, fontWeight: 700 }}>
                      {token.name}
                    </Typography>
                    <Typography color="text.secondary">{color}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Section>

          <Section
            title="Typography"
            description="Scale chữ mặc định từ MUI theme."
          >
            <Stack spacing={1.5}>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>
                Heading / h4
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Section title / h6
              </Typography>
              <Typography>
                Body text dùng cho nội dung chính, mô tả trạng thái và thông tin
                trong form.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Caption text / metadata
              </Typography>
            </Stack>
          </Section>

          <Section
            title="Buttons"
            description="Các size và biến thể có sẵn của base Button."
          >
            <Stack spacing={2.5}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                {buttonSizes.map((size) => (
                  <Button key={size} size={size} variant="contained">
                    {size.toUpperCase()}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
                <Button rounded variant="contained" color="secondary">
                  Rounded
                </Button>
              </Box>
            </Stack>
          </Section>

          <Section
            title="Form Controls"
            description="Input, Select và Checkbox dùng chung cho các form."
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 2,
                alignItems: "start",
              }}
            >
              <Input label="Tên hiển thị" placeholder="Nguyễn Văn A" />
              <Select
                label="Trạng thái"
                value={selectedState}
                options={selectOptions}
                onChange={handleSelectChange}
                fullWidth
              />
              <Box sx={{ pt: { md: 0.5 } }}>
                <Checkbox
                  checked={accepted}
                  label="Nhận thông báo hệ thống"
                  onChange={(event) => setAccepted(event.target.checked)}
                />
              </Box>
            </Box>
          </Section>

          <Section
            title="Feedback"
            description="Loading và Modal cho các luồng phản hồi nhanh."
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 180,
                  border: "1px dashed",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <Loading />
              </Box>
              <Button variant="contained" onClick={() => setIsModalOpen(true)}>
                Open modal
              </Button>
            </Box>
          </Section>
        </Stack>
      </Box>

      <Modal
        open={isModalOpen}
        title="Design system modal"
        onClose={() => setIsModalOpen(false)}
      >
        <Stack spacing={2} sx={{ pt: 2 }}>
          <Typography>
            Modal này đang dùng component base của project, kèm close button và
            layout từ MUI theme.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button variant="outlined" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </Box>
        </Stack>
      </Modal>
    </Box>
  );
}
