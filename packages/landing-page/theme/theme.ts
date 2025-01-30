'use client';

import { Modal, Text, Title, createTheme } from '@mantine/core';
import textClasses from './Text.module.css';
import titleClasses from './Title.module.css';

/**
 * @description
 * The theme is an object where your application's colors, fonts, spacing, border-radius and other design tokens are stored.
 * @see https://mantine.dev/theming/theme-object/
 */
export const theme = createTheme({
  primaryColor: 'brand',
  primaryShade: 5,
  autoContrast: true,
  defaultRadius: 'md',
  cursorType: 'pointer',
  defaultGradient: {
    from: 'brand.3',
    to: 'brand.7',
  },
  fontFamily: '"Rubik", sans-serif',
  colors: {
    // Generate your brand colors here: https://mantine.dev/colors-generator/?color=f2ff02
    brand: [
      '#feffe2',
      '#fdffcc',
      '#faff9b',
      '#f7ff64',
      '#f5ff39',
      '#f3ff1d', // main
      '#f2ff09',
      '#d7e300',
      '#bec900',
      '#a3ae00',
    ],
  },

  // This property allows yout to override every Mantine components default props and styles
  components: {
    Text: Text.extend({
      classNames: textClasses,
    }),

    Title: Title.extend({
      classNames: titleClasses,
    }),

    Modal: Modal.extend({
      defaultProps: {
        centered: true,
        transitionProps: {
          duration: 400,
          transition: 'fade-down',
        },
      },
    }),
  },
});
