'use client';

import { Title, Text, Box, Container, Flex } from '@mantine/core';
import classes from './TestimonialsSection.module.css';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GhostBadge } from '@/components/GhostBadge/GhostBadge';
import { Section } from '@/components/Section/Section';
import { testimonials } from './data';
import { TestimonialCard } from '@/components/TestimonalCard/TestimonalCard';
import { useEffect, useState } from 'react';

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section id="testimonials" ariaLabel="What other devs have to say">
      <Box ta="center" mt={{ base: 'sm', sm: 'xl', md: 70 }}>
        <GhostBadge>Discover what other devs have to say</GhostBadge>
      </Box>

      <Flex align="center" justify="center" gap="sm" mt="xl">
        <Title className={classes.title} ta="center" variant="title">
          Developers love nextsystems
        </Title>
        <Image src="/emojis/heart_emoji.png" alt="heart emoji" width={40} height={40} />
      </Flex>

      <Text ta="center" c="gray.2" size="lg" maw={580} mx="auto" mt="md" mb="xl">
        People learn new skills and technologies, dive into the AWS ecosystem, make their first
        revenue online, and build their dream projects on AWS.
      </Text>

      <Container pt="xl">
        {mounted ? (
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="var(--mantine-spacing-md)">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.username} {...testimonial} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : null}
      </Container>
    </Section>
  );
}
