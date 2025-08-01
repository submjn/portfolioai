"use client";

import { HeroUIProvider as UIProvider } from "@heroui/react";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

export function HeroUIProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  
  return (
    <UIProvider>
      {children}
    </UIProvider>
  );
}
