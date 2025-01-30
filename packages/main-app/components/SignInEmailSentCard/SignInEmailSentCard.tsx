"use client";

import { Card, Text, Progress, Group, Button } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SignInEmailSentCard() {
  const [progress, setProgress] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev === 90 ? 100 : 90));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card withBorder padding='lg' radius='md' maw='24rem'>
      <Image src='/logo_text_white.png' alt='logo' height={50} width={170} />

      <Text fz='lg' fw={500} mt='md'>
        You're almost there!
      </Text>

      <Text fz='sm' c='dimmed' mt={5}>
        Please head to your email inbox and click the link we sent you to sign
        in to Product.
      </Text>

      <Progress
        transitionDuration={1500}
        animated
        striped
        value={progress}
        mt='md'
      />

      <Group mt='xl' justify='space-between' wrap="nowrap">
        <Button
          component='a'
          href='https://mail.google.com'
          h={60}
          size='lg'
          variant='light'
          color='white'
        >
          <Image
            src='/gmail_logo.png'
            alt='gmail-logo'
            height={30}
            width={40}
          />
        </Button>

        <Button
          component='a'
          href='https://mail.yahoo.com'
          h={60}
          size='lg'
          variant='light'
          color='white'
        >
          <Image
            src='/yahoo_logo.png'
            alt='yahoo-logo'
            height={50}
            width={82}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Button>

        <Button
          component='a'
          href='https://outlook.live.com'
          h={60}
          size='lg'
          variant='light'
          color='white'
        >
          <Image
            src='/outlook_logo.png'
            alt='outlook-logo'
            height={35}
            width={35}
          />
        </Button>
      </Group>
    </Card>
  );
}
