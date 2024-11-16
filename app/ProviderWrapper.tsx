"use client";

import { ReactElement } from "react";

// next

// project import
import ThemeCustomization from "@/themes";

import ScrollTop from "@/components/ScrollTop";

import { ConfigProvider } from "@/contexts/ConfigContext";

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function ProviderWrapper({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <ConfigProvider>
      <ThemeCustomization>
        <ScrollTop>{children}</ScrollTop>
      </ThemeCustomization>
    </ConfigProvider>
  );
}
