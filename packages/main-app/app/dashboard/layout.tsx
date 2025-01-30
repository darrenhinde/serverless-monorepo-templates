import { Navbar } from "@/components/Navbar/Navbar";
import { AppShell, AppShellMain, AppShellNavbar } from "@mantine/core";

export default function RootLayout({ children }: { children: any }) {
  return (
    <AppShell navbar={{ width: 300, breakpoint: 0 }}>
      <AppShellNavbar>
        <Navbar />
      </AppShellNavbar>

      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
