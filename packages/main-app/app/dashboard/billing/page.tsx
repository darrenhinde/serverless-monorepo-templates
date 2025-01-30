import { Button, Container, Group, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

export default async function Billing() {
  return (
    <Container size='sm' pt='xl'>
      <Group justify='space-between'>
        <Title>Billing</Title>
        <Button
          variant='subtle'
          leftSection={<IconExternalLink />}
          target='_blank'
          component='a'
          href={process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_LINK}
        >
          Go to customer portal
        </Button>
      </Group>
    </Container>
  );
}
