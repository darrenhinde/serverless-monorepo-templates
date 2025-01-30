import { LinksGroupProps } from '@/components/Footer/LinksGroup';

export const FOOTER_LINKS_DATA: LinksGroupProps[] = [
  {
    title: 'Links',
    data: [
      { type: 'next', label: 'Home', link: '/' },
      { type: 'next', label: 'Section 1', link: '#section-1' },
      { type: 'next', label: 'Section 2', link: '#section-2' },
      { type: 'next', label: 'Section 3', link: '#section-3' },
      { type: 'next', label: 'Documentation', link: '/docs' },
    ],
  },

  {
    title: 'Legal',
    data: [
      { type: 'link', label: 'Imprint', link: '/imprint' },
      { type: 'link', label: 'Privacy Policy', link: '/privacy-policy' },
      { type: 'link', label: 'Terms of Service', link: '/terms-of-service' },
    ],
  },
];
