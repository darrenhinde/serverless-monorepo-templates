"use client";

import { Button, Divider, Flex, rem } from "@mantine/core";
import {
  IconLogout,
  IconSettings,
  IconCreditCard,
  IconHome,
  IconUsers,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tabs = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome },
  { link: "/dashboard/employees", label: "Employees", icon: IconUsers },
  { link: "/dashboard/settings", label: "Settings", icon: IconSettings },
  { link: "/dashboard/billing", label: "Billing", icon: IconCreditCard },
];

export function Navbar() {
  const pathname = usePathname();

  const [loading, setLoading] = useState<string | null>(null);

  const links = tabs.map((item) => (
    <Button
      loading={loading === item.link}
      display='flex'
      style={{ alignItems: "center", textDecoration: "none" }}
      fz='sm'
      size='md'
      variant='transparent'
      component={Link}
      href={item.link}
      className={classes.link}
      data-active={item.link === pathname || undefined}
      key={item.label}
      leftSection={<item.icon stroke={1.5} />}
    >
      {item.label}
    </Button>
  ));

  return (
    <Flex component='nav' direction='column' p='md' w={rem(300)} h='100vh'>
      <Image src='/logo_text_white.png' alt='logo' width={170} height={50} />

      <Flex direction='column' gap='xs' mt='xl' flex='1'>
        {links}
      </Flex>

      <Divider mb='md' />

      <Button
        loading={loading === "sign-out"}
        display='flex'
        style={{ alignItems: "center", textDecoration: "none" }}
        fz='sm'
        size='md'
        variant='transparent'
        className={classes.link}
        onClick={async (event) => {
          event.preventDefault();
          try {
            setLoading("sign-out");
            await signOut({ redirect: true, callbackUrl: "/sign-in" });
          } catch (err) {
            console.error(err);
          } finally {
            setLoading(null);
          }
        }}
        leftSection={<IconLogout className={classes.linkIcon} stroke={1.5} />}
      >
        Logout
      </Button>
    </Flex>
  );
}
