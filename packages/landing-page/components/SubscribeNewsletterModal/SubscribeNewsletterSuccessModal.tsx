'use client';

import { Modal, ModalProps, Progress, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { EmailButtonGroup } from '../EmailButtonGroup/EmailButtonGroup';

export type SubscribeNewsletterSuccessModalProps = ModalProps;

export const SubscribeNewsletterSuccessModal = (props: SubscribeNewsletterSuccessModalProps) => {
  const [progress, setProgress] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev === 90 ? 100 : 90));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Modal {...props} title="Great, just one more step">
      <Title>You're almost there!</Title>
      <Text fz="sm" c="dimmed" mt={5}>
        Please verify your email to get access to the newsletter. (Note, no newsletter service is set up
        in the boilerplate yet. I recommend using <a href="https://mailerlite.com/">Mailerlite</a>{' '}
        for this.)
      </Text>

      <Progress transitionDuration={1500} animated striped value={progress} mt="md" />

      <EmailButtonGroup />
    </Modal>
  );
};
