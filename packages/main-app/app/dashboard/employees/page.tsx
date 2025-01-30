import { EmployeesTable } from "@/components/EmployeesTable/EmployeesTable";
import { Flex, Group, Text, Title } from "@mantine/core";

export default function Users() {
  return (
    <Flex h='100vh' w='100%' direction='column'>
      <Group justify='space-between' py='lg' px='md'>
        <Flex direction='column'>
          <Title>Employee Management</Title>
          <Text c='dimmed'>
            Using tRPC to get employees from our DynamoDB database and
            displaying them in an infinite scroll, highly performant,
            virtualized table
          </Text>
        </Flex>
      </Group>

      <EmployeesTable />
    </Flex>
  );
}
