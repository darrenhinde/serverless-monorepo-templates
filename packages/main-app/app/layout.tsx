import "@mantine/core/styles.css";
import "mantine-react-table/styles.css";
import "../global.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "@/theme/theme";
import { TRPCProvider } from "@/trpc/provider";
import { CSPostHogProvider } from "./providers";
import { CookiesDialog } from "@/components/Cookies/CookiesDialog";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript forceColorScheme='dark' defaultColorScheme='dark' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <CSPostHogProvider>
        <body>
          <MantineProvider forceColorScheme='dark' theme={theme}>
            <TRPCProvider>{children}</TRPCProvider>
            <CookiesDialog />
          </MantineProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
