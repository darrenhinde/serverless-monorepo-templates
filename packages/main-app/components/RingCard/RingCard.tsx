"use client";

import {
  RingProgress,
  Text,
  Paper,
  Center,
  Group,
  rem,
  Transition,
} from "@mantine/core";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

export type RingCardProps = {
  label: string;
  stats: string;
  progress: number;
  color: string;
  arrow: "up" | "down";
  transitionDuration?: number;
  delay?: number;
  value?: number;
};

export function RingCard(props: RingCardProps) {
  const Icon = icons[props.arrow];

  const [_value, setValue] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(_value);
    }, props.delay);

    return () => clearTimeout(timer);
  }, [props.delay]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Transition
      keepMounted
      mounted={mounted}
      transition='fade-down'
      duration={props.transitionDuration || 1000}
      enterDelay={props.delay}
      timingFunction='ease'
    >
      {(styles) => (
        <Paper style={styles} withBorder radius='md' p='xs' key={props.label}>
          <Group>
            <RingProgress
              size={80}
              roundCaps
              thickness={8}
              sections={[{ value: props.progress, color: props.color }]}
              label={
                <Center>
                  <Icon
                    style={{ width: rem(20), height: rem(20) }}
                    stroke={1.5}
                  />
                </Center>
              }
            />

            <div>
              <Text c='dimmed' size='xs' tt='uppercase' fw={700}>
                {props.label}
              </Text>
              <Text fw={700} size='xl'>
                {props.stats}
              </Text>
            </div>
          </Group>
        </Paper>
      )}
    </Transition>
  );
}
