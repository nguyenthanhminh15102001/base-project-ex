import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AppProvider } from "@/providers/AppProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Base Project",
  description: "Next.js App Router base project",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
