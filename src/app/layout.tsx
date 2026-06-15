import type { Metadata } from "next";
import type { ReactNode } from "react";

import { MuiProvider } from "@/providers/MuiProvider";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next.js App Router base",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
