import {
  Title,
  Text,
  Container,
  Flex,
  Anchor,
  Accordion,
  AccordionItem,
  AccordionControl,
  AccordionPanel,
} from '@mantine/core';
import classes from './FAQSection.module.css';
import { Section } from '@/components/Section/Section';
import { faqItems } from './data';

export function FAQSection() {
  return (
    <Section id="faq" ariaLabel="Frequently asked questions">
      <Container maw={{ base: '100%', xs: '76%' }} mt={{ base: 50, md: 70 }}>
        <Flex align="center" direction="column" gap={{ base: 70, md: 70 }}>
          <Flex direction="column" flex="1" gap="md">
            <Title variant="title" ta="center" className={classes.title}>
              Frequently asked questions
            </Title>
          </Flex>

          <Accordion flex="1" w={{ base: '100%', sm: '50rem' }} variant="contained" color="gray.3">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionControl>
                  <Text fw="bold">{item.question}</Text>
                </AccordionControl>
                <AccordionPanel pr="md">{item.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <Text c="dimmed" size="sm" ta="center">
            Have another question? Contact me on <Anchor href="">somewhere</Anchor> or via{' '}
            <Anchor href="">somewhere else</Anchor>.
          </Text>
        </Flex>
      </Container>
    </Section>
  );
}
