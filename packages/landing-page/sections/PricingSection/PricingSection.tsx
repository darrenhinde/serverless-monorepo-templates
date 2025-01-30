'use client';

import classes from './PricingSection.module.css';
import { Title, Text, Box, Container, Flex, Button, rgba } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { ProcessingDot } from '@/components/ProcessingDot/ProcessingDot';
import { PricingCard } from '@/components/PricingCard/PricingCard';
import { GhostBadge } from '@/components/GhostBadge/GhostBadge';
import { useStripeCheckout } from '@/hooks/useStripeCheckout';
import { Section } from '@/components/Section/Section';

export function PricingSection() {
  const { handleCheckout, loading } = useStripeCheckout();

  return (
    <Section id="section-6">
      <Box ta="center" mt={{ base: 'sm', sm: 'xl', md: 50 }}>
        <GhostBadge>Pricing</GhostBadge>
      </Box>

      <Title variant="title" lh={0.5} className={classes.title} ta="center" mt="xl">
        Once more, tell the user, <br />
        <Text
          className={classes.title}
          variant="gradient"
          component="span"
          style={{ textShadow: `0 0 5px ${rgba('var(--mantine-color-brand-2)', 0.5)}` }}
        >
          whe he must{' '}
        </Text>
        buy your product
      </Title>

      <Container maw={{ sm: '60rem' }} mt={60}>
        <Flex
          align="center"
          gap={80}
          justify="center"
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <PricingCard
            key={'premium'}
            title="Premium"
            price="$99"
            suffix="USD / lifetime"
            cardProps={{ p: { base: 'sm', xs: 'xl' }, w: { base: '100%', xs: 'unset' } }}
            features={[
              { title: 'The first feature of the product' },
              { title: 'The second feature of the product' },
              { title: 'The third feature of the product' },
              { title: 'The fourth feature of the product' },
              { title: 'The fifth feature of the product' },
              { title: 'The sixth feature of the product' },
              { title: 'The seventh feature of the product' },
              { title: 'The eighth feature of the product' },
              { title: 'The ninth feature of the product' },
              { title: 'An unavailable feature', notAvailable: true },
              { title: 'Another unavailable feature', notAvailable: true },
            ]}
            button={
              <Flex direction="column" gap="md">
                <Button
                  onClick={() => handleCheckout('premium')}
                  loading={loading === 'premium'}
                  fullWidth
                  className={classes.shine}
                  size="lg"
                  my="0 auto"
                >
                  Get Product
                </Button>

                <Text ta="center" fs="italic" c="gray.6" fw={500} variant="title">
                  Another small call to action or benefit
                </Text>
              </Flex>
            }
          />

          <PricingCard
            popular
            key="exclusive"
            title="exclusive"
            price="$179"
            oldPrice="$279"
            suffix="USD / lifetime"
            cardProps={{ p: { base: 'sm', xs: 'xl' }, w: { base: '100%', xs: 'unset' } }}
            features={[
              { title: 'The first feature of the product' },
              { title: 'The second feature of the product' },
              { title: 'The third feature of the product' },
              { title: 'The fourth feature of the product' },
              { title: 'The fifth feature of the product' },
              { title: 'The sixth feature of the product' },
              { title: 'The seventh feature of the product' },
              { title: 'The eighth feature of the product' },
              { title: 'The ninth feature of the product' },
              {
                title: 'Here this feature is available',
                icon: <IconCheck size={20} color="var(--mantine-color-brand-5)" />,
              },
              {
                title: 'And this feature is also available here',
                icon: <IconCheck size={20} color="var(--mantine-color-brand-5)" />,
              },
            ]}
            button={
              <Flex direction="column" gap="md">
                <Button
                  onClick={() => handleCheckout('exclusive')}
                  loading={loading === 'exclusive'}
                  fullWidth
                  className={classes.shine}
                  size="lg"
                  my="0 auto"
                >
                  Get Product
                </Button>
                <Flex align="center" justify="center" gap={8}>
                  <ProcessingDot size={10} color="green.8" />
                  <Text ta="center" fs="italic" c="green.8" fw={500} variant="title">
                    show the user that he must hurry up
                  </Text>
                </Flex>
              </Flex>
            }
          />
        </Flex>
      </Container>
    </Section>
  );
}
