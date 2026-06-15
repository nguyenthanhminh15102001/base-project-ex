import type { Metadata } from "next";

import { DesignSystemShowcase } from "./DesignSystemShowcase";

export const metadata: Metadata = {
  title: "Design System",
  description: "Base component and theme showcase",
};

export default function DemoPage() {
  return <DesignSystemShowcase />;
}
