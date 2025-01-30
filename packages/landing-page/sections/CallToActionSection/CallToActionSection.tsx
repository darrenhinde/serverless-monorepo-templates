'use client';

import { Title, Text, Box, Button, Flex, Avatar, Indicator, AvatarGroup, rgba } from '@mantine/core';
import classes from './CallToActionSection.module.css';
import { Section } from '@/components/Section/Section';
import { useNewsletterSubscription } from '@/hooks/useNewsletterSubscription';
// import { useStripeCheckout } from '@/hooks/useStripeCheckout';

export function CallToActionSection() {
  /* Note: You might just as well send you customers to stripe checkout here */
  // const { handleCheckout, loading } = useStripeCheckout();

  const { toggle: toggleNewsletterModal, modal } = useNewsletterSubscription();

  return (
    <>
      <Section id="call-to-action" ariaLabel="Call to action">
        <Title lh={0.5} variant="title" className={classes.title} ta="center" mt={100}>
          This is the final call to action
          <br />
          <Box component="span" pos="relative" display="inline-block">
            <Text
              className={classes.title}
              variant="gradient"
              component="span"
              style={{ textShadow: `0 0 5px ${rgba('var(--mantine-color-brand-2)', 0.5)}` }}
            >
              to hook your customers
            </Text>
          </Box>
        </Title>

        <Flex direction="column" justify="center" align="center" gap="xl" mt="xl">
          {/* Note: You might just as well send you customers to stripe checkout here */}
          <Button onClick={toggleNewsletterModal} className={classes.shine} size="lg" my="0 auto">
            Subscribe to newsletter
          </Button>

          <Flex direction="column" gap="sm" align="center" mt="md">
            <AvatarGroup>
              <Avatar size="lg" src="https://avatar.iran.liara.run/public/23" bg="black" />
              <Avatar size="lg" src="https://avatar.iran.liara.run/public/6" bg="black" />
              <Avatar size="lg" src="https://avatar.iran.liara.run/public/42" bg="black" />
              <Indicator offset={4} processing withBorder size={12}>
                <Avatar size="lg" src="https://avatar.iran.liara.run/public/1" bg="black" />
              </Indicator>
            </AvatarGroup>

            <Flex align="center" gap={4}>
              <Text fs="italic" c="gray.6" variant="title">
                join{' '}
                <Text component="span" c="green.9">
                  +1000
                </Text>{' '}
                customers already using the product
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Section>

      {modal}
    </>
  );
}
