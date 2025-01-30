import Link from 'next/link';
import { Anchor, Flex, Text } from '@mantine/core';

export type LinksGroupProps = {
  title: string;
  data: {
    type: 'link' | 'next';
    link: string;
    label: string;
  }[];
};

export function LinksGroup({ data, title }: LinksGroupProps) {
  const links = data.map((link, index) => (
    <Anchor
      c="dimmed"
      size="sm"
      display="block"
      component={link.type === 'next' ? (Link as unknown as 'a') : 'a'}
      href={link.link}
      key={index}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Flex direction="column" gap="xs">
      <Text fw="bold">{title}</Text>
      {links}
    </Flex>
  );
}
