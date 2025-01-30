import { Box, BoxProps } from '@mantine/core';
import styles from './ProcessingDot.module.css';

export type ProcessingDotProps = BoxProps & {
  size?: number;
  color?: string;
};

export const ProcessingDot = ({ size = 20, color = 'green', ...props }: ProcessingDotProps) => {
  return (
    <Box
      className={styles.processing}
      style={{
        ...props.style,
        borderRadius: 9999,
      }}
      bg={color}
      w={size}
      h={size}
      {...props}
    />
  );
};
