import { Button, Container, Divider, Flex, Text } from '@mantine/core';
import { Logo } from '../Logo/Logo';
import { DiscordButton, TwitterButton } from '../SocialButton/SocialButton';
import { LinksGroup } from './LinksGroup';
import Link from 'next/link';
import Image from 'next/image';

export type FooterProps = {
  groups: Array<React.ReactElement<typeof LinksGroup>>;
};

export function Footer({ groups }: FooterProps) {
  return (
    <Container size="80rem" mt="xl" p="xl">
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        justify="space-between"
        align={{ base: 'center', sm: 'flex-start' }}
        py={{ base: 'md', sm: 'xl' }}
      >
        <Flex
          direction="column"
          justify={{ base: 'center', sm: 'flex-start' }}
          align={{ base: 'center', sm: 'flex-start' }}
          gap="sm"
          maw={250}
        >
          <Logo />

          <Text ta={{ base: 'center', sm: 'left' }} c="dimmed" size="sm">
            Your products slogan or tagline
          </Text>
        </Flex>

        <Flex
          mt={{ base: 'xl', sm: 0 }}
          ta={{ base: 'center', sm: 'left' }}
          direction={{ base: 'column', sm: 'row' }}
          gap="xl"
        >
          {groups}
        </Flex>
      </Flex>

      <Divider color="gray.8" mt="xl" mb="md" />

      <Flex
        gap="xl"
        w="100%"
        direction={{ base: 'column-reverse', sm: 'row' }}
        align="center"
        justify={{ base: 'center', sm: 'space-between' }}
      >
        <Button
          radius="sm"
          size="compact-md"
          variant="outline"
          c="white"
          style={{ borderColor: 'var(--mantine-color-gray-7)' }}
          component={Link}
          href="https://blitz-ship.com"
        >
          <Flex align="center">
            <Text size="xs" mr={1}>
              Built with
            </Text>

            <Image src="/bolt_yellow.svg" width={14} height={14} alt="Logo" />

            <Text variant="title" lh="2" fw={900} fz="xs" fs="italic">
              nextsystems
            </Text>
          </Flex>
        </Button>

        <Flex gap="xs" direction={{ base: 'column', sm: 'row' }}>
          <DiscordButton buttonProps={{ size: 'compact-sm', fw: 'normal', variant: 'outline' }} />
          <TwitterButton buttonProps={{ size: 'compact-sm', fw: 'normal', variant: 'outline' }} />
        </Flex>
      </Flex>
    </Container>
  );
}
