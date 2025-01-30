import { DurationsSection } from '../sections/DurationsSection/DurationsSection';
import { FeaturesSection } from '../sections/FeaturesSection/FeaturesSection';
import { HeroSection } from '../sections/HeroSection/HeroSection';
import { FoundersWordSection } from '../sections/FoundersWordSection/FoundersWordSection';
import { LogosSection } from '../sections/LogosSection/LogosSection';
import { PricingSection } from '../sections/PricingSection/PricingSection';
import { FAQSection } from '../sections/FAQSection/FAQSection';
import { TestimonialsSection } from '../sections/TestimonialsSection/TestimonialsSection';
import { CallToActionSection } from '../sections/CallToActionSection/CallToActionSection';
import { DemoSection } from '../sections/DemoSection/DemoSection';
import StructuredData from '@/components/SEO/StructuredData';

export default function HomePage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={breadcrumbStructuredData} />
      <HeroSection />
      <DurationsSection />
      <LogosSection />
      <DemoSection />
      <FeaturesSection />
      <FoundersWordSection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Product Name',
  applicationCategory: 'ApplicationCategory',
  operatingSystem: 'Any',
  offers: {
    '@type': 'AggregateOffer',
    offerCount: 2,
    lowPrice: 9,
    highPrice: 99,
    priceCurrency: 'USD',
    offers: [
      {
        '@type': 'Offer',
        name: 'Basic Plan',
        price: 9,
        priceCurrency: 'USD',
        description: 'Basic plan description.',
        url: 'https://example.com/#pricing',
      },
      {
        '@type': 'Offer',
        name: 'Premium Plan',
        price: 99,
        priceCurrency: 'USD',
        description: 'Premium plan description with additional features.',
        url: 'https://example.com/#pricing',
      },
    ],
  },
  description:
    'Generic product description. Highlight key features and benefits of your product or service.',
  url: 'https://example.com/',
  author: {
    '@type': 'Person',
    name: 'Author Name',
    url: 'https://www.linkedin.com/in/authorname/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Company Name',
    logo: {
      '@type': 'ImageObject',
      url: 'https://example.com/logo.png',
    },
  },
  screenshot: 'https://example.com/screenshot.png',
  featureList: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  keywords: 'keyword1, keyword2, keyword3, keyword4, keyword5',
};

const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://example.com',
    },
  ],
};
