import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  rem,
  UnstyledButtonProps,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./UserButton.module.css";

export type UserButtonProps = {
  name: string;
  email: string;
  avatar?: string;
  buttonProps?: UnstyledButtonProps;
};

export const UserButton = ({
  name,
  email,
  avatar,
  buttonProps,
}: UserButtonProps) => {
  return (
    <UnstyledButton
      p='md'
      w='100%'
      display='block'
      color='black'
      style={{
        borderStyle: "solid",
        borderColor: "var(--mantine-color-gray-8)",
        borderWidth: "1px",
        borderRadius: "var(--mantine-radius-lg)",
      }}
      className={classes.hover}
      {...buttonProps}
    >
      <Group>
        <Avatar name={name} src={avatar} radius='xl' />

        <div style={{ flex: 1 }}>
          <Text size='sm' fw={500}>
            {name}
          </Text>

          <Text c='dimmed' size='xs'>
            {email}
          </Text>
        </div>

        <IconChevronRight
          style={{ width: rem(14), height: rem(14) }}
          stroke={1.5}
        />
      </Group>
    </UnstyledButton>
  );
};
