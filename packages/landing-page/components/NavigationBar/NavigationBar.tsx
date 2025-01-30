import { Anchor, Flex, Container, Group } from '@mantine/core';
import { Logo } from '../Logo/Logo';

export function NavigationBar() {
  return (
    <Container maw="80rem" component="header" py="md">
      <Group wrap="nowrap" p="md" align="center" justify="space-between">
        <Logo />

        <Flex
          justify="flex-start"
          pl={{ base: 'sm', xs: 'xl', sm: '6rem' }}
          gap={{ base: 'xl', xs: 64 }}
        >
          <Anchor variant="title" fw={600} size="lg" href="#section-1">
            Section 1
          </Anchor>

          <Anchor visibleFrom="xs" variant="title" fw={600} size="lg" href="#section-2">
            Section 2
          </Anchor>

          <Anchor variant="title" fw={600} size="lg" href="#section-3">
            Section 3
          </Anchor>

          <Anchor visibleFrom="md" variant="title" fw={600} size="lg" href="/docs">
            Docs
          </Anchor>
        </Flex>
      </Group>
    </Container>
  );
}
