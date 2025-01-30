'use client';

import { useStripeCheckout } from '@/hooks/useStripeCheckout';
import { Button, Center, Container, Flex, rgba, Text, Title, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import Image from 'next/image';

export default function CheckoutCanceled() {
  const clipboard = useClipboard();

  const { handleCheckout, loading } = useStripeCheckout();

  return (
    <Container size="sm" h="50vh">
      <Center h="100%">
        <Flex direction="column">
          <Title ta="center" order={1}>
            Oops! You don't like the offer?{' '}
            <Image
              alt="exploding head emoji"
              src="/emojis/exploding_head_emoji.webp"
              width={30}
              height={30}
            />
          </Title>
          <Text ta="center" size="lg" c="dimmed">
            Worry not! Here's a 10% off coupon to make your life easier.
          </Text>

          <Tooltip
            label="Coupon copied!"
            offset={5}
            position="bottom"
            radius="xl"
            transitionProps={{ duration: 100, transition: 'slide-down' }}
            opened={clipboard.copied}
          >
            <Button
              my="xl"
              variant="subtle"
              rightSection={clipboard.copied ? <IconCheck /> : <IconCopy />}
              radius="xl"
              size="md"
              onClick={() => clipboard.copy(process.env.NEXT_PUBLIC_STRIPE_COUPON_10_OFF)}
            >
              Copy 10% off coupon
            </Button>
          </Tooltip>

          <Flex direction="column" justify="center" align="center">
            <Button
              onClick={() => handleCheckout('premium')}
              loading={loading === 'premium'}
              leftSection={
                <Image
                  src="/bolt_gray.svg"
                  width={18}
                  height={18}
                  style={{ textShadow: `0 0 5px ${rgba('var(--mantine-color-brand-2)', 0.5)}` }}
                  alt="Product logo"
                />
              }
              size="lg"
              my="0 auto"
            >
              Get Product
            </Button>
          </Flex>
        </Flex>
      </Center>
    </Container>
  );
}
