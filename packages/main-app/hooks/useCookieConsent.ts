import { useState, useEffect } from 'react';

export type CookieConsent = 'yes' | 'no' | 'undecided' | null;

export const getCookieConsent = (): CookieConsent => {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!localStorage.getItem('cookie_consent')) {
    return 'undecided';
  }
  return localStorage.getItem('cookie_consent') as CookieConsent;
};

export const useCookieConsent = () => {
  const [consentGiven, setConsentGiven] = useState<CookieConsent>(getCookieConsent());

  useEffect(() => {
    setConsentGiven(getCookieConsent());
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes');
    setConsentGiven('yes');
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'no');
    setConsentGiven('no');
  };

  return {
    consentGiven,
    acceptCookies,
    declineCookies,
  };
};
