"use client";

import { ReactElement } from "react";

// next

// project import
import Snackbar from "@/components/@extended/Snackbar";
import ThemeCustomization from "@/themes";

import ScrollTop from "@/components/ScrollTop";
import Notistack from "@/components/third-party/Notistack";

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
        <Notistack>
          <Snackbar />
          <ScrollTop>{children}</ScrollTop>
        </Notistack>
      </ThemeCustomization>
    </ConfigProvider>
  );
}
