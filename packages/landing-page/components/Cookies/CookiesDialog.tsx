'use client';

import { Dialog } from '@mantine/core';
import { useDisclosure, useTimeout } from '@mantine/hooks';
import { CookiesBanner } from './CookiesBanner';
import { useEffect } from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export const CookiesDialog = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const { consentGiven, acceptCookies, declineCookies } = useCookieConsent();

  const { start, clear } = useTimeout(() => {
    if (consentGiven === 'undecided') {
      open();
    }
  }, 2000);

  useEffect(() => {
    start();
    return clear;
  }, []);

  return (
    <Dialog
      transitionProps={{ transition: 'slide-left', duration: 1000 }}
      p={0}
      opened={opened}
      onClose={close}
      title="Cookies"
    >
      <CookiesBanner
        onClose={() => {
          close();
        }}
        onAccept={() => {
          acceptCookies();
          close();
        }}
        onDecline={() => {
          declineCookies();
          close();
        }}
      />
    </Dialog>
  );
};
