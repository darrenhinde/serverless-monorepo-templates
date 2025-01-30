import { Button, Container, Text, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

export default function Imprint() {
  return (
    <Container size="40rem" p="xl">
      <Button
        mb="xl"
        p={0}
        variant="transparent"
        component={Link}
        href="/"
        leftSection={<IconArrowLeft />}
      >
        Go back
      </Button>

      <Title mb="lg">Imprint</Title>

      <Text c="dimmed" component="div">
        <p>
          <strong>YOUR_NAME</strong>
          <br />
          YOUR_ADDRESS
          <br />
          YOUR_CITY
          <br />
          YOUR_COUNTRY
        </p>

        <p>
          <strong>Contact</strong>
          <br />
          At <a href="https://your-website.com/#faq">https://your-website.com/#faq</a> you will find
          answers to the most frequently asked questions about YOUR_COMPANY's services.
        </p>
        <p>
          If you have any further questions, you can contact us by e-mail or phone:
          <br />
          Email: <a href="mailto:help@your-website.com">help@your-website.com</a>
          <br />
          Telephone: YOUR_PHONE_NUMBER
        </p>
        <p>
          <strong>Legal Information</strong>
          <br />
          YOUR_COMPANY constantly checks and updates the information on its websites. Despite all
          due care, data may have changed in the meantime. Therefore, no liability or guarantee can
          be assumed for the correctness and completeness of the information provided. The same
          applies to all other websites to which reference is made via hyperlinks. YOUR_COMPANY is
          not responsible for the content of websites reached via such links.
        </p>
        <p>
          Furthermore, YOUR_COMPANY reserves the right to make changes or additions to the
          information provided.
        </p>
        <p>
          The contents created by us on this website are subject to the copyright of the Federal
          Republic of Germany. Duplication, processing, distribution, and any kind of exploitation
          require the written consent of the respective author or creator. Copies of these pages are
          only permitted for private use, but not for commercial purposes.
        </p>
      </Text>
    </Container>
  );
}
