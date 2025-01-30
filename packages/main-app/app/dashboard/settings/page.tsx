import { auth } from "@/auth/auth";
import { UserButton } from "@/components/UserButton/UserButton";
import { Container, Flex, Text, Title, Tooltip } from "@mantine/core";
import { redirect } from "next/navigation";

export default async function Settings() {
  const session = await auth();

  if (!session) return redirect("/sign-in");

  const { image, name, email } = session.user || {};

  return (
    <Container size='sm' pt='xl'>
      <Title>Settings</Title>
      <Text c='dimmed'>
        Here you can manage your account settings and preferences.
      </Text>

      <Flex mt='xl' direction='column' gap='xs'>
        <Text c='dimmed' size='sm'>
          Logged in as
        </Text>

        <Tooltip
          color='gray.9'
          position='right'
          label='Update your profile'
          openDelay={600}
        >
          <UserButton
            name={name || ""}
            email={email || ""}
            avatar={image || ""}
            buttonProps={{ maw: 300 }}
          />
        </Tooltip>
      </Flex>
    </Container>
  );
}
