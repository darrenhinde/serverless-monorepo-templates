import { Button, Flex } from '@mantine/core';
import Image from 'next/image';

export const EmailButtonGroup = () => {
  return (
    <Flex
      w={{ base: '100%', xs: 'auto' }}
      mt="xl"
      direction={{ base: 'column', xs: 'row' }}
      justify="space-between"
      wrap="nowrap"
      gap="xs"
    >
      <Button
        fullWidth
        component="a"
        href="https://mail.google.com"
        h={60}
        size="lg"
        variant="light"
        color="gray.5"
        flex={{ base: 'auto', xs: '1' }}
      >
        <Image src="/logos/gmail_logo.png" alt="gmail-logo" height={30} width={40} />
      </Button>

      <Button
        component="a"
        href="https://mail.yahoo.com"
        h={60}
        size="lg"
        variant="light"
        color="gray.5"
        flex={{ base: 'auto', xs: '2.05' }}
      >
        <Image
          src="/logos/yahoo_logo.png"
          alt="yahoo-logo"
          height={50}
          width={82}
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </Button>

      <Button
        component="a"
        href="https://outlook.live.com"
        h={60}
        size="lg"
        variant="light"
        color="gray.5"
        flex={{ base: 'auto', xs: '1' }}
      >
        <Image src="/logos/outlook_logo.png" alt="outlook-logo" height={35} width={35} />
      </Button>
    </Flex>
  );
};
