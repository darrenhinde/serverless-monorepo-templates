import { Divider, DividerProps } from '@mantine/core';

export type GhostDividerProps = {
  dividerProps?: DividerProps;
  direction?: 'center' | 'left' | 'right';
};

export const GhostDivider = ({ dividerProps, direction = 'center' }: GhostDividerProps) => {
  const getGradient = () => {
    switch (direction) {
      case 'left':
        return 'linear-gradient(to right, var(--mantine-color-gray-7), rgba(0, 0, 0, 0))';
      case 'right':
        return 'linear-gradient(to left, var(--mantine-color-gray-7), rgba(0, 0, 0, 0))';
      default:
        return 'linear-gradient(to right, rgba(0, 0, 0, 0), var(--mantine-color-gray-7), rgba(0, 0, 0, 0))';
    }
  };

  return (
    <Divider
      style={{
        background: getGradient(),
        height: '1px',
        border: 'none',
        ...dividerProps?.style,
      }}
      {...dividerProps}
    />
  );
};
