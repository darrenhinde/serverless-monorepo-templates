import { Title, Text, Box, Container, Flex, Timeline, TimelineItem, rgba } from '@mantine/core';
import classes from './DurationsSection.module.css';
import Image from 'next/image';
import { IconBrandAws, IconBrowser, IconCash, IconFolders, IconKey } from '@tabler/icons-react';
import { GhostBadge } from '@/components/GhostBadge/GhostBadge';
import { Section } from '@/components/Section/Section';

export function DurationsSection() {
  return (
    <Section
      id="section-1"
      ariaLabel="How much time you save by using nextsystems to set up your project"
    >
      <Box ta="center" mt={{ base: 'sm', sm: 'xl', md: 50 }} hiddenFrom="sm">
        <GhostBadge badgeProps={{ mb: { base: 'xs', sm: 'sm', md: 'lg' } }}>
          I'm only visible on mobile
        </GhostBadge>
      </Box>

      <Container maw={{ base: '100%', xs: '80%' }} mt={{ base: 50, md: 70 }}>
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 70 }}
        >
          <Flex direction="column" flex="1" gap="sm">
            <Title
              lh={0.6}
              variant="title"
              ta={{ base: 'center', md: 'left' }}
              className={classes.title}
            >
              Show your customers here <br />
              how much{' '}
              <Text
                className={classes.title}
                variant="gradient"
                component="span"
                style={{ textShadow: `0 0 5px ${rgba('var(--mantine-color-brand-2)', 0.5)}` }}
              >
                time you save.
              </Text>{' '}
              <br />
              <Text c="dimmed" size="lg">
                Or explain what steps you save them, how much money they save or how much happier
                they are using your product.
              </Text>
            </Title>
          </Flex>

          <Timeline flex="1" color="darkRed" active={4} bulletSize={40} lineWidth={2}>
            <TimelineItem
              color="red.3"
              bullet={<IconFolders color="var(--mantine-color-body)" size={26} />}
              title={
                <Text pt={8}>
                  2+ hours{' '}
                  <Text ml="sm" component="span" c="dimmed">
                    Doing something annoying
                  </Text>
                </Text>
              }
            />

            <TimelineItem
              color="red.4"
              title={
                <Text pt={8}>
                  4+ hours{' '}
                  <Text ml="sm" component="span" c="dimmed">
                    Doing something annoying
                  </Text>
                </Text>
              }
              bullet={<IconCash color="var(--mantine-color-body)" size={26} />}
            />

            <TimelineItem
              color="red.5"
              title={
                <Text pt={8}>
                  8+ hours{' '}
                  <Text ml="sm" component="span" c="dimmed">
                    Doing something annoying
                  </Text>
                </Text>
              }
              bullet={<IconKey color="var(--mantine-color-body)" size={26} />}
            />

            <TimelineItem
              color="red.6"
              title={
                <Text pt={8}>
                  12+ hours{' '}
                  <Text ml="sm" component="span" c="dimmed">
                    Doing something annoying
                  </Text>
                </Text>
              }
              bullet={<IconBrowser color="var(--mantine-color-body)" size={26} />}
            />

            <TimelineItem
              color="red.7"
              lineVariant="dotted"
              title={
                <Text pt={8}>
                  16+ hours{' '}
                  <Text ml="sm" component="span" c="dimmed">
                    Doing something annoying
                  </Text>
                </Text>
              }
              bullet={<IconBrandAws color="var(--mantine-color-body)" size={26} />}
            />

            <TimelineItem
              color="red"
              title={
                <>
                  <Text size="lg" pt={8}>
                    Doing the most annoying thing
                  </Text>
                </>
              }
              bg="transparent"
              styles={{
                itemBullet: {
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                },
              }}
              bullet={
                <Image
                  src="/emojis/exploding_head_emoji.webp"
                  width={100}
                  height={50}
                  alt="Picture of the author"
                />
              }
            />
          </Timeline>
        </Flex>
      </Container>
    </Section>
  );
}
