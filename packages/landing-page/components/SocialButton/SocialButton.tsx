import { BoxProps, Button, ElementProps, ButtonProps } from '@mantine/core';
import { IconBrandDiscord, IconBrandX } from '@tabler/icons-react';

export interface SocialButtonProps extends BoxProps, ElementProps<'a', 'type'> {
  icon?: React.ReactNode;
  buttonProps?: ButtonProps;
}

export function SocialButton({ icon, buttonProps, ...others }: SocialButtonProps) {
  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      leftSection={icon}
      radius="md"
      size="sm"
      {...buttonProps}
      {...others}
    />
  );
}

export function DiscordButton({ className, ...others }: SocialButtonProps) {
  return (
    <SocialButton
      color="#5865f2"
      icon={<IconBrandDiscord size={16} />}
      href="https://discord.gg/QepFYTtWdX"
      {...others}
    >
      Join my Discord
    </SocialButton>
  );
}

export function TwitterButton({ className, ...others }: SocialButtonProps) {
  return (
    <SocialButton
      color="gray.3"
      icon={<IconBrandX size={16} />}
      href="https://twitter.com/thebuz__"
      {...others}
    >
      Follow me on X
    </SocialButton>
  );
}
