'use client';

import { EmailButtonGroup } from '@/components/EmailButtonGroup/EmailButtonGroup';
import { Center, Container, Flex, Progress, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CheckoutSuccess() {
  const [progress, setProgress] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev === 90 ? 100 : 90));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container size="sm" h="50vh">
      <Center h="100%">
        <Flex direction="column" align="center">
          <Title ta="center" order={1}>
            Success!{' '}
            <Image alt="heart emoji" src="/emojis/heart_emoji.png" width={25} height={25} />
          </Title>

          <Text ta="center" c="dimmed" mt={5} maw="40rem">
            You have successfully checked out! Check your email for the next steps.
          </Text>

          <Progress w="100%" transitionDuration={1500} animated striped value={progress} mt="md" />

          <EmailButtonGroup />
        </Flex>
      </Center>
    </Container>
  );
}
