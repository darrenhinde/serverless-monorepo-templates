import { Group, Text } from '@mantine/core';
import Image from 'next/image';
import classes from './Logo.module.css';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className={classes.text}>
      <Group wrap="nowrap" align="center" gap="xs">
        <Image src="/logos/nextsystems_logo.svg" width={28} height={28} alt="Logo" />
        <Text variant="title" fw={900} fs="italic" size="lg" style={{ textDecoration: 'none' }}>
          your brand
        </Text>
      </Group>
    </Link>
  );
};
