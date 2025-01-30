'use client';

import { useRef, useState } from 'react';
import { ReactNode } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  rem,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './DemoTabs.module.css';

export type DemoTabsProps = {
  title: string;
  data: {
    demo: ReactNode;
    icon: ReactNode;
    name: string;
    description: string;
  }[];
};

export function DemoTabs({ data, title }: DemoTabsProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const animationTimeout = useRef<number>();
  const [active, setActive] = useState(0);
  const theme = useMantineTheme();
  const controlSize = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`) ? 70 : 80;

  const handleActiveChange = (index: number) => {
    setActive(index);
    if (index !== active) {
      setShouldAnimate(true);
      window.clearTimeout(animationTimeout.current);
      animationTimeout.current = window.setTimeout(() => setShouldAnimate(false), 500);
    }
  };

  const controls = data.map((item, index) => (
    <UnstyledButton<'button'>
      key={item.name}
      onClick={() => handleActiveChange(index)}
      data-active={index === active || undefined}
      className={classes.control}
    >
      <Flex align="center" gap="sm" pos="relative" style={{ zIndex: 3 }}>
        {item.icon}

        <Flex direction="column">
          <Text size="lg" style={{ zIndex: 5 }}>
            {item.name}
          </Text>

          <Text c="dimmed" size="sm">
            {item.description}
          </Text>
        </Flex>
      </Flex>
    </UnstyledButton>
  ));

  const ActiveDemo = data[active].demo;

  return (
    <Container size="60rem">
      <Grid gutter="lg" mt="md">
        <Grid.Col span={{ base: 12, md: 5 }}>
          <div style={{ position: 'relative' }}>
            <Box
              className={classes.controlsIndicator}
              style={{
                height: rem(controlSize),
                transform: `translateY(${rem(controlSize * active)})`,
              }}
            />
            {controls}
          </div>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 7 }}>
          <div className={classes.demo} data-should-animate={shouldAnimate || undefined}>
            {ActiveDemo}
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
