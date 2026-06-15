"use client";

import { Box, IconButton, Modal as MuiModal, SvgIcon, Typography } from "@mui/material";

import type { ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  title?: string;
  children: ReactNode;
  onClose(): void;
};

export function Modal({ open, title, children, onClose }: ModalProps) {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 520,
          maxWidth: "calc(100% - 32px)",
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 2,

          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {title && <Typography variant="h6">{title}</Typography>}

          <IconButton aria-label="Close" onClick={onClose} sx={{ ml: "auto" }}>
            <SvgIcon>
              <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29 6.29-6.3z" />
            </SvgIcon>
          </IconButton>
        </Box>

        <Box sx={{ overflowY: "auto", maxHeight: "70vh" }}>{children}</Box>
      </Box>
    </MuiModal>
  );
}
