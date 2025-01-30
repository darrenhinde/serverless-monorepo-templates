import { Card, Text, Group, Avatar, Anchor, CardSection } from '@mantine/core';
import Image from 'next/image';
import { GhostDivider } from '@/components/GhostDivider/GhostDivider';

export type TestimonialCardProps = {
  text: string;
  name: string;
  avatarSrc?: string;
  username?: string;
  userLink?: string;
  imageSrc?: string;
};

export const TestimonialCard = ({
  text,
  name,
  avatarSrc,
  username,
  userLink,
  imageSrc,
}: TestimonialCardProps) => {
  return (
    <Card style={{ border: '1px solid var(--mantine-color-gray-7)' }}>
      {imageSrc ? (
        <CardSection>
          <Image
            src={imageSrc}
            alt={`${name}'s project screenshot`}
            layout="responsive"
            width={100}
            height={100}
          />
        </CardSection>
      ) : null}

      <Text>{text}</Text>

      <GhostDivider dividerProps={{ my: 'sm' }} />

      <Group>
        <Avatar src={avatarSrc} alt={name} name={name} />
        <Text fw={500}>{name}</Text>
        {username ? (
          <Anchor href={userLink} c="dimmed">
            @{username}
          </Anchor>
        ) : null}
      </Group>
    </Card>
  );
};
