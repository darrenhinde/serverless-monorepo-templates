import {
  Title,
  Text,
  Box,
  Container,
  Flex,
  Grid,
  GridCol,
  StyleProp,
  Divider,
  rgba,
} from '@mantine/core';
import classes from './FeaturesSection.module.css';
import { ColSpan } from '@mantine/core/lib/components/Grid/GridCol/GridCol';
import {
  IconBook,
  IconChartDots3,
  IconChartLine,
  IconCookie,
  IconCreditCard,
  IconDeviceDesktopAnalytics,
  IconDeviceMobile,
  IconLayout,
  IconLock,
  IconMail,
  IconSearch,
  IconUpload,
} from '@tabler/icons-react';
import { GhostBadge } from '@/components/GhostBadge/GhostBadge';
import { Section } from '@/components/Section/Section';

export function FeaturesSection() {
  return (
    <Section id="section-4" ariaLabel="Section 4">
      <Box ta="center" mt={{ base: 'sm', sm: 'xl', md: 70 }}>
        <GhostBadge badgeProps={{ mb: { base: 'xs', sm: 'sm', md: 'lg' } }}>
          <Box component="span">Showcase all of your features</Box>
        </GhostBadge>
      </Box>

      <Title variant="title" lh={0.5} className={classes.title} ta="center" mt="xl">
        Let's show the user a list of
        <br />
        <Text
          className={classes.title}
          variant="gradient"
          component="span"
          style={{ textShadow: `0 0 5px ${rgba('var(--mantine-color-brand-2)', 0.5)}` }}
        >
          all the features{' '}
        </Text>
        of your product
      </Title>

      <Text
        ta="center"
        c="gray.2"
        size="lg"
        maw={580}
        mx="auto"
        mt="md"
        mb={{ base: 'xs', sm: 'sm', md: 'xl' }}
      >
        This is the place where you can really list out everything your product has to offer, not
        just the highlights
      </Text>

      <Container>
        <Divider pt="md" label="Category 1" />
        <Grid
          justify="center"
          align="center"
          w="100%"
          py="xl"
          gutter={{ base: 40, xs: 20, sm: 40 }}
        >
          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconLayout size={24} />}
          />

          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconSearch size={24} />}
          />
          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconCreditCard size={24} />}
          />
          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconDeviceMobile size={24} />}
          />
          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconBook size={24} />}
          />
          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconChartDots3 size={24} />}
          />
        </Grid>

        <Divider pt="md" label="Category 2" />

        <Grid
          justify="center"
          align="center"
          w="100%"
          py="xl"
          gutter={{ base: 40, xs: 20, sm: 40 }}
        >
          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconLock size={24} />}
          />

          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconUpload size={24} />}
          />
          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconChartLine size={24} />}
          />
          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconMail size={24} />}
          />
          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconDeviceDesktopAnalytics size={24} />}
          />
          <Feature
            title="Beautiful Feature"
            description="Small description of the feature in a single sentence if possible"
            span={{ base: 12, xs: 5, sm: 4 }}
            icon={<IconCookie size={24} />}
          />
        </Grid>
      </Container>
    </Section>
  );
}

const Feature = ({
  title,
  description,
  span,
  icon,
}: {
  title: string;
  description: string;
  span: StyleProp<ColSpan>;
  icon?: React.ReactNode;
}) => (
  <GridCol span={span}>
    <Box>
      <Flex align="center" gap={6}>
        {icon}
        <Text size="xl" fw={600}>
          {title}
        </Text>
      </Flex>

      <Text c="dimmed">{description}</Text>
    </Box>
  </GridCol>
);
