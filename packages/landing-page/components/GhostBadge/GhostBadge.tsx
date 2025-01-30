import { Badge, BadgeProps, Text, TextProps } from '@mantine/core';

export type GhostBadgeProps = {
  withDot?: boolean;
  badgeProps?: BadgeProps;
  textProps?: TextProps;
  children: React.ReactNode;
};

export const GhostBadge = (props: GhostBadgeProps) => {
  return (
    <Badge
      variant={props.withDot ? 'dot' : 'filled'}
      fw={400}
      p="md"
      style={{
        background: `linear-gradient(to top, var(--mantine-color-gray-9), rgba(0, 0, 0, 0))`,
        border: '1px solid var(--mantine-color-gray-9)',
        ...props.badgeProps?.style,
      }}
      {...props.badgeProps}
    >
      <Text
        size="sm"
        tt="initial"
        fs="italic"
        variant="gradient"
        gradient={{ from: 'gray.4', to: 'gray.5' }}
        {...props.textProps}
      >
        {props.children}
      </Text>
    </Badge>
  );
};
