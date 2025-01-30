"use client";

import {
  Text,
  Progress,
  Card,
  ProgressProps,
  Indicator,
  Transition,
} from "@mantine/core";
import { useEffect, useState } from "react";

export type ProgressCardProps = {
  label: string;
  progress: string;
  progressProps: Omit<ProgressProps, "value">;
  withIndicator?: boolean;
  transitionDuration?: number;
  delay?: number;
  value?: number;
};

export function ProgressCard({
  label,
  progress,
  progressProps,
  withIndicator,
  transitionDuration = 1000,
  delay = 0,
  value = 0,
}: ProgressCardProps) {
  const [_value, setValue] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(_value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Transition
      keepMounted
      mounted={mounted}
      transition='fade-down'
      duration={transitionDuration}
      enterDelay={delay}
      timingFunction='ease'
    >
      {(styles) => (
        <Card
          style={styles}
          withBorder
          radius='md'
          padding='xl'
          bg='var(--mantine-color-body)'
        >
          {withIndicator ? (
            <Indicator processing color={progressProps.color}>
              <Text fz='xs' tt='uppercase' fw={700} c='dimmed'>
                {label}
              </Text>
            </Indicator>
          ) : (
            <Text fz='xs' tt='uppercase' fw={700} c='dimmed'>
              {label}
            </Text>
          )}

          <Text fz='lg' fw={500}>
            {progress}
          </Text>

          <Progress
            mt='md'
            size='lg'
            radius='xl'
            transitionDuration={transitionDuration}
            {...progressProps}
            value={value}
          />
        </Card>
      )}
    </Transition>
  );
}
