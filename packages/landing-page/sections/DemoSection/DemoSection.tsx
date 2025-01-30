import { DemoTabs } from '@/components/DemoTabs/DemoTabs';
import { Section } from '@/components/Section/Section';
import { Box, Image } from '@mantine/core';
import {
  Icon24Hours,
  IconChartLine,
  IconCloudComputing,
  IconCode,
  IconLock,
  IconMoneybag,
} from '@tabler/icons-react';

export function DemoSection() {
  return (
    <Section id="section-3" ariaLabel="Feature demos" containerProps={{ visibleFrom: 'sm' }}>
      <Box visibleFrom="sm" h="xl" />

      <DemoTabs
        data={[
          {
            demo: (
              <Box
                w="100%"
                h="620px"
                style={{
                  overflow: 'hidden',
                  borderRadius: 12,
                  position: 'relative',
                }}
              >
                <Image src="/example_feature.png" alt="Example Feature" />
              </Box>
            ),
            icon: <IconLock />,
            name: 'Cool Feature of your product',
            description: 'Description of the cool feature',
          },
          {
            demo: (
              <Box
                w="100%"
                h="620px"
                style={{
                  overflow: 'hidden',
                  borderRadius: 12,
                  position: 'relative',
                }}
              >
                <Image src="/example_feature.png" alt="Example Feature" />
              </Box>
            ),
            icon: <IconCloudComputing />,
            name: 'Cool Feature of your product',
            description: 'Description of the cool feature',
          },
          {
            demo: (
              <Box
                w="100%"
                h="620px"
                style={{
                  overflow: 'hidden',
                  borderRadius: 12,
                  position: 'relative',
                }}
              >
                <Image src="/example_feature.png" alt="Example Feature" />
              </Box>
            ),
            icon: <IconMoneybag />,
            name: 'Cool Feature of your product',
            description: 'Description of the cool feature',
          },
          {
            demo: (
              <Box
                w="100%"
                h="620px"
                style={{
                  overflow: 'hidden',
                  borderRadius: 12,
                  position: 'relative',
                }}
              >
                <Image src="/example_feature.png" alt="Example Feature" />
              </Box>
            ),
            icon: <IconCode />,
            name: 'Cool Feature of your product',
            description: 'Description of the cool feature',
          },

          {
            demo: (
              <Box
                w="100%"
                h="620px"
                style={{
                  overflow: 'hidden',
                  borderRadius: 12,
                  position: 'relative',
                }}
              >
                <Image src="/example_feature.png" alt="Example Feature" />
              </Box>
            ),
            icon: <IconChartLine />,
            name: 'Cool Feature of your product',
            description: 'Description of the cool feature',
          },
          {
            demo: (
              <Box
                w="100%"
                h="620px"
                style={{
                  overflow: 'hidden',
                  borderRadius: 12,
                  position: 'relative',
                }}
              >
                <Image src="/example_feature.png" alt="Example Feature" />
              </Box>
            ),
            icon: <Icon24Hours />,
            name: 'Cool Feature of your product',
            description: 'Description of the cool feature',
          },
        ]}
        title="Feature demos"
      />
    </Section>
  );
}
