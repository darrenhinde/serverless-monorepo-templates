import { Title, Text, Box, Flex, Image } from '@mantine/core';
import classes from './FoundersWordSection.module.css';
import { IconCheck } from '@tabler/icons-react';
import { GhostBadge } from '@/components/GhostBadge/GhostBadge';
import { GhostDivider } from '@/components/GhostDivider/GhostDivider';
import { Section } from '@/components/Section/Section';

export function FoundersWordSection() {
  return (
    <Section id="section-5" ariaLabel="A message from the founder of nextsystems">
      <Box ta="center" mt={{ base: 'sm', sm: 'xl', md: 50 }}>
        <GhostBadge badgeProps={{ mb: 'xl' }}>A message from your time-saving sidekick</GhostBadge>
      </Box>

      <Flex align="center" direction="column" gap="xl">
        <Box
          w={200}
          h={200}
          pos="relative"
          mx="auto"
          style={{
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <Image src="https://avatar.iran.liara.run/public/4" alt="Founder picture" />
        </Box>

        <Flex direction="column" gap="md">
          <Flex align="center" justify="center" gap="sm">
            <Title className={classes.title} ta="center" variant="title">
              Hey, I'm the founder
            </Title>
            <Image src="/emojis/hand_emoji.png" alt="hand emoji" width={40} height={40} />
          </Flex>

          <Flex direction="column" maw={{ base: '100%', xs: '36rem' }} c="dimmed" gap="sm">
            <Text className={classes.text}>
              This is the perfect place to tell your story, and why you're the best person to solve
              the user's problem.
            </Text>

            <Flex gap={{ base: 3, sm: 'xs' }} align="center" mt="md">
              <IconCheck color="var(--mantine-color-green-6)" size={20} />
              <Text className={classes.bullet}>Add some bullet points</Text>
            </Flex>

            <Flex gap={{ base: 3, sm: 'xs' }} align="center">
              <IconCheck color="var(--mantine-color-green-6)" size={20} />
              <Text className={classes.bullet}>And some more bullet points</Text>
            </Flex>

            <Flex gap={{ base: 3, sm: 'xs' }} align="center" mb="md">
              <IconCheck color="var(--mantine-color-green-6)" size={20} />
              <Text className={classes.bullet}>And even more bullet points to really show off</Text>
            </Flex>

            <GhostDivider dividerProps={{ my: 'md', visibleFrom: 'xs' }} />

            <Text className={classes.text}>
              This is also the place where you can get a little more personal and tell the user why
              they should listen to you.
            </Text>
            <Text className={classes.text}>
              Maybe even tell some anecdotes about your journey, or what inspired you to build this
              product.
            </Text>

            <Flex gap={{ base: 3, sm: 'xs' }} align="center" mt="md">
              <IconCheck color="var(--mantine-color-green-6)" size={20} />
              <Text className={classes.bullet}>And of course, bullet points</Text>
            </Flex>

            <Flex gap={{ base: 3, sm: 'xs' }} align="center">
              <IconCheck color="var(--mantine-color-green-6)" size={20} />
              <Text className={classes.bullet}>You can barely overdo it with bullet points</Text>
            </Flex>

            <Flex gap={{ base: 3, sm: 'xs' }} align="center">
              <IconCheck color="var(--mantine-color-green-6)" size={20} />
              <Text className={classes.bullet}>Trust me, everyone loves bullet points</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
}
