import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { SubscribeNewsletterModal } from '../components/SubscribeNewsletterModal/SubscribeNewsletterModal';
import React from 'react';
import { NewsletterSignupSchema } from '@nextsystems/schemas/NewsletterSignupSchema';
import { SubscribeNewsletterSuccessModal } from '@/components/SubscribeNewsletterModal/SubscribeNewsletterSuccessModal';
import { SubscribeNewsletterErrorModal } from '@/components/SubscribeNewsletterModal/SubscribeNewsletterErrorModal';

export const useNewsletterSubscription = () => {
  const [loading, setLoading] = useState(false);

  const [opened, { open, close, toggle }] = useDisclosure(false);
  const [successOpened, { open: openSuccess, close: closeSuccess }] = useDisclosure(false);
  const [errorOpened, { open: openError, close: closeError }] = useDisclosure(false);

  const handleSubscribe = async (data: NewsletterSignupSchema) => {
    setLoading(true);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'An unknown error occurred');
      }

      await response.json();
      close();
      openSuccess();
    } catch (error) {
      console.error(error);
      close();
      openError();
    } finally {
      setLoading(false);
    }
  };

  return {
    open,
    close,
    toggle,
    modal: (
      <>
        <SubscribeNewsletterModal
          opened={opened}
          onClose={close}
          handleSubscribe={handleSubscribe}
          loading={loading}
          centered
        />

        <SubscribeNewsletterSuccessModal centered opened={successOpened} onClose={closeSuccess} />

        <SubscribeNewsletterErrorModal
          centered
          opened={errorOpened}
          onClose={closeError}
          onTryAgain={() => {
            closeError();
            open();
          }}
        />
      </>
    ),
  };
};
