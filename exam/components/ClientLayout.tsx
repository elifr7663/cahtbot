"use client";

import { Provider } from "react-redux";
import store from "@/store/store";
import ThemeRegistry from "@/components/theme/ThemeRegistry";
import { geistSans, geistMono } from "@/components/theme/theme";
import { Providers } from "@/app/providers";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </Provider>
      );
    } 


