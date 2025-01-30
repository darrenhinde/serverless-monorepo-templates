'use client';

import {
  Title,
  Text,
  Box,
  Button,
  Flex,
  Avatar,
  Indicator,
  AvatarGroup,
  Transition,
  rgba,
} from '@mantine/core';
import classes from './HeroSection.module.css';
import { GhostBadge } from '@/components/GhostBadge/GhostBadge';
import { Section } from '@/components/Section/Section';
import { useStripeCheckout } from '@/hooks/useStripeCheckout';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const { handleCheckout, loading } = useStripeCheckout();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section
      noDivider
      id="hero"
      ariaLabel="A descriptive aria label"
      containerProps={{ h: { base: '30rem', sm: '45rem' } }}
    >
      <Transition
        keepMounted
        mounted={mounted}
        transition="fade-down"
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <Box ta="center" mt={{ base: 'sm', sm: 'xl', md: 50 }} style={styles}>
            <GhostBadge withDot badgeProps={{ mb: { base: 'xs', sm: 'sm', md: 'lg' } }}>
              <Box component="span">A product for ambitious customers</Box>
            </GhostBadge>
          </Box>
        )}
      </Transition>

      <Transition
        keepMounted
        mounted={mounted}
        transition="fade-down"
        enterDelay={100}
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <Title
            lh={0.3}
            variant="title"
            className={classes.title}
            style={styles}
            ta="center"
            mt="xl"
          >
            Your business needs
            <br />
            <Box component="span" pos="relative" display="inline-block">
              <Text
                className={classes.title}
                variant="gradient"
                component="span"
                style={{ textShadow: `0 0 5px ${rgba('var(--mantine-color-brand-2)', 0.5)}` }}
              >
                a great title
              </Text>
            </Box>
          </Title>
        )}
      </Transition>

      <Transition
        keepMounted
        mounted={mounted}
        transition="fade-down"
        enterDelay={200}
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <Text
            component="h2"
            style={styles}
            ta="center"
            c="gray.2"
            size="xl"
            maw={600}
            mx="auto"
            mt="sm"
            mb={{ base: 'xs', sm: 'sm', md: 'xl' }}
          >
            This is the ultimate subtitle for the ultimate product: Write a great subtitle
            summarizing your offer in a maximum two sentences
          </Text>
        )}
      </Transition>

      <Transition
        keepMounted
        mounted={mounted}
        transition="fade-down"
        enterDelay={300}
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <Flex
            style={styles}
            direction="column"
            justify="center"
            align="center"
            gap="xl"
            mt={{ base: 'xl', sm: 'sm' }}
          >
            <Button
              onClick={() => handleCheckout('exclusive')}
              loading={loading === 'exclusive'}
              className={classes.shine}
              size="lg"
              my="0 auto"
            >
              Get Product
            </Button>

            <Flex direction="column" gap="sm" align="center" mt="md">
              <AvatarGroup>
                <Avatar size="lg" src="https://avatar.iran.liara.run/public/35" bg="black" />
                <Avatar size="lg" src="https://avatar.iran.liara.run/public/36" bg="black" />
                <Avatar size="lg" src="https://avatar.iran.liara.run/public/17" bg="black" />
                <Indicator offset={8} processing withBorder size={12}>
                  <Avatar size="lg" src="https://avatar.iran.liara.run/public/48" bg="black" />
                </Indicator>
              </AvatarGroup>

              <Flex align="center" gap={4}>
                <Text fs="italic" c="gray.6" variant="title">
                  <Text component="span" c="green.9">
                    $100 off
                  </Text>{' '}
                  for the first x customers
                </Text>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Transition>
    </Section>
  );
}
