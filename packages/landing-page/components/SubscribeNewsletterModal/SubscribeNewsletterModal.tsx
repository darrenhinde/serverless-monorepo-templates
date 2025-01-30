'use client';

import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Flex,
  Modal,
  ModalProps,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core';
import Image from 'next/image';
import { DiscordButton, TwitterButton } from '../SocialButton/SocialButton';
import { useForm, zodResolver } from '@mantine/form';
import { NewsletterSignupSchema } from '@nextsystems/schemas/NewsletterSignupSchema';
import { IconAt, IconInfoCircle, IconUser } from '@tabler/icons-react';
import Link from 'next/link';

export type SubscribeNewsletterModalProps = ModalProps & {
  handleSubscribe: (data: NewsletterSignupSchema) => void;
  loading: boolean;
};

export const SubscribeNewsletterModal = (props: SubscribeNewsletterModalProps) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      allowMarketing: false as any,
    },

    validate: zodResolver(NewsletterSignupSchema),
  });

  return (
    <Modal {...props} title="Subscribe to the newsletter">
      <form onSubmit={form.onSubmit(props.handleSubscribe)}>
        <Flex direction="column" gap="sm">
          <Text c="dimmed">A text explaining the benefits of subscribing to the newsletter.</Text>

          <TextInput
            leftSection={<IconUser />}
            ta="center"
            placeholder="Your name"
            key={form.key('name')}
            {...form.getInputProps('name')}
          />

          <TextInput
            leftSection={<IconAt />}
            ta="center"
            placeholder="Your email"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />

          <Flex mx="auto" align="center" gap="xs" mt="xs">
            <Checkbox
              label="Allow me to send you occasional emails"
              key={form.key('allowMarketing')}
              {...form.getInputProps('allowMarketing')}
            />

            <Flex align="center" visibleFrom="sm">
              <Tooltip
                color="gray.8"
                w={300}
                multiline
                label="I won't spam your inbox. I simply want to stay in contact and occasionally send updates about Product"
              >
                <IconInfoCircle color="var(--mantine-color-dimmed)" size={15} />
              </Tooltip>
            </Flex>
          </Flex>

          <Button type="submit" mt="xs" loading={props.loading}>
            Subscribe to the newsletter
          </Button>

          <Text ta="center" c="gray.7" size="xs" mt="sm">
            By submitting, you acknowledge that the information you provide will be used in
            accordance with our{' '}
            <Anchor c="gray.6" component={Link} href="/privacy-policy">
              privacy policy
            </Anchor>
            . I will send you occasional emails about promotions, new products or important updates.
          </Text>
        </Flex>
      </form>
    </Modal>
  );
};
