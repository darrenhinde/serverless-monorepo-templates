import { Button, Paper, Text, Group, CloseButton } from "@mantine/core";
import { IconCookie } from "@tabler/icons-react";
import Link from "next/link";

export type CookiesBannerProps = {
  onAccept: () => void;
  onDecline: () => void;
  onClose?: () => void;
};

export const CookiesBanner = (props: CookiesBannerProps) => {
  return (
    <Paper withBorder p='lg' radius='md' shadow='md'>
      <Group justify='space-between' mb='xs'>
        <Group gap='xs'>
          <IconCookie size={16} />
          <Text fz='md' fw={500}>
            Allow cookies
          </Text>
        </Group>
        <CloseButton mr={-9} mt={-9} onClick={props.onClose} />
      </Group>
      <Text c='dimmed' fz='xs'>
        We use cookies to improve your experience and optimize our service. This
        includes analytical cookies (e.g., via PostHog) and essential cookies
        for running the application. You can change your consent at any time.
        For more information, please see our{" "}
        <Link
          style={{
            textDecoration: "none",
            color: "var(--mantine-color-gray-4)",
          }}
          href='/privacy-policy'
          rel='noopener noreferrer'
          target='_blank'
        >
          Privacy Policy
        </Link>
        .
      </Text>

      <Group justify='flex-end' mt='sm'>
        <Button variant='subtle' color='red' size='xs' onClick={props.onAccept}>
          Only Essential
        </Button>

        <Button variant='light' size='xs' onClick={props.onAccept}>
          Accept
        </Button>
      </Group>
    </Paper>
  );
};
