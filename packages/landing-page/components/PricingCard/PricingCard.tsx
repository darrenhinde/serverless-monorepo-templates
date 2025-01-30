import {
  Badge,
  Box,
  Card,
  CardProps,
  Flex,
  List,
  ListItem,
  ListProps,
  Text,
  Title,
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import classes from './PricingCard.module.css';

export type PricingCardProps = {
  title?: string;
  oldPrice?: string;
  price: string;
  suffix?: React.ReactNode;
  features: {
    title: string;
    icon?: React.ReactNode;
    notAvailable?: boolean;
  }[];
  listProps?: ListProps;
  cardProps?: CardProps;
  button?: React.ReactNode;
  popular?: boolean;
};

export const PricingCard = (props: PricingCardProps) => {
  return (
    <Card
      miw={'50%'}
      style={{
        background: `linear-gradient(to bottom, var(--mantine-color-gray-9), rgba(0, 0, 0, 0))`,
        border: props.popular
          ? '1px solid var(--mantine-color-brand-5)'
          : '1px solid var(--mantine-color-gray-9)',
      }}
      p={'xl'}
      shadow="md"
      {...props.cardProps}
    >
      <Flex direction="column" gap="md">
        <Flex align="center" gap="xs">
          {props.title ? (
            <Badge color={props.popular ? 'brand' : 'gray.8'} size="lg">
              {props.title}
            </Badge>
          ) : null}

          {props.popular ? (
            <Text variant="title" fs="italic" c="dimmed">
              popular
            </Text>
          ) : null}
        </Flex>

        <Flex align="center" gap="xs">
          {props.oldPrice ? (
            <Text
              c="red.8"
              fw={500}
              variant="title"
              component="span"
              size="xl"
              style={{ textDecoration: 'line-through' }}
            >
              {props.oldPrice}
            </Text>
          ) : null}

          <Title component={Text} variant="title" size={'xl'} className={classes.price}>
            {props.price}
            <Text c="dimmed" fw="bold" ml="xs" variant="title" component="span">
              {props.suffix}
            </Text>
          </Title>
        </Flex>

        <List
          visibleFrom="xs"
          center
          spacing="md"
          icon={<IconCheck size={20} />}
          {...props.listProps}
        >
          {props.features.map((feature) => (
            <ListItem
              key={feature.title}
              icon={feature.icon || (feature.notAvailable ? <IconX size={20} /> : undefined)}
              c={feature.notAvailable ? 'gray.7' : undefined}
            >
              {feature.title}
            </ListItem>
          ))}
        </List>

        <List
          hiddenFrom="xs"
          size="sm"
          center
          spacing="sm"
          icon={<IconCheck size={20} />}
          {...props.listProps}
        >
          {props.features.map((feature) => (
            <ListItem
              key={feature.title}
              icon={feature.icon || (feature.notAvailable ? <IconX size={20} /> : undefined)}
              c={feature.notAvailable ? 'gray.7' : undefined}
            >
              {feature.title}
            </ListItem>
          ))}
        </List>

        <Box w="100%" mt="lg">
          {props.button}
        </Box>
      </Flex>
    </Card>
  );
};
