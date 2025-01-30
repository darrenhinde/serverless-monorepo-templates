import { SignInEmailSentCard } from "@/components/SignInEmailSentCard/SignInEmailSentCard";
import { Center, Flex } from "@mantine/core";

export default function SignIn() {
  return (
    <Center h='100vh'>
      <Flex gap='sm' direction='column' align='center'>
        <SignInEmailSentCard />
      </Flex>
    </Center>
  );
}
