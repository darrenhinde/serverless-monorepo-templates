import { Title, Text, Box, Flex, Grid, GridCol, rgba } from '@mantine/core';
import classes from './LogosSection.module.css';
import Image from 'next/image';
import { GhostBadge } from '@/components/GhostBadge/GhostBadge';
import { Section } from '@/components/Section/Section';

export function LogosSection() {
  return (
    <Section id="section-2" ariaLabel="Section 2">
      <Box ta="center" mt={{ base: 'sm', sm: 'xl', md: 70 }}>
        <GhostBadge badgeProps={{ mb: { base: 'xs', sm: 'sm', md: 'lg' } }}>
          <Box component="span">Show some nice logos in this section</Box>
        </GhostBadge>
      </Box>

      <Title variant="title" lh={0.5} className={classes.title} ta="center" mt="xl">
        The{' '}
        <Text
          className={classes.title}
          variant="gradient"
          component="span"
          style={{ textShadow: `0 0 5px ${rgba('var(--mantine-color-brand-2)', 0.5)}` }}
        >
          perfect{' '}
        </Text>
        section <br /> to show some logos or brands
      </Title>

      <Text
        ta="center"
        c="gray.2"
        size="lg"
        maw={580}
        mx="auto"
        mt="xl"
        mb={{ base: 'xs', sm: 'sm', md: 'xl' }}
      >
        Here you may show some logos of technologies you use, or brands you work with, or customers
        you have already worked with before
      </Text>

      {/* This part is only visible on larger screens */}
      <Flex
        visibleFrom="sm"
        justify="space-around"
        align="center"
        gap="xl"
        w="100%"
        py="xl"
        wrap="wrap"
      >
        <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />

        <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />

        <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />

        <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />

        <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />

        <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />
      </Flex>

      {/* This part is only visible on mobile */}
      <Grid hiddenFrom="sm" justify="center" align="center" w="100%" py="xl" gutter={40}>
        <GridCol
          span={4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />
        </GridCol>
        <GridCol
          span={4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />
        </GridCol>
        <GridCol
          span={4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />
        </GridCol>
        <GridCol
          span={4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />
        </GridCol>
        <GridCol
          span={4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />
        </GridCol>
        <GridCol
          span={4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Image src="/logos/nextsystems_logo.svg" width={55} height={55} alt="nextsystems logo" />
        </GridCol>
      </Grid>
    </Section>
  );
}
