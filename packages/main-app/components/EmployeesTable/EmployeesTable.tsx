"use client";

import { EmployeeSchema } from "@nextsystems/schemas/EmployeeSchema";
import { useMemo, useRef } from "react";
import {
  MantineReactTable,
  type MRT_ColumnDef,
  useMantineReactTable,
  MRT_RowVirtualizer,
} from "mantine-react-table";
import {
  Avatar,
  Button,
  Center,
  Drawer,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { IconPlus, IconUserMinus, IconUsersMinus } from "@tabler/icons-react";
import { useCreateMockEmployees } from "@/hooks/employees/useCreateMockEmployees";
import { useListEmployees } from "@/hooks/employees/useListEmployees";
import { useDeleteEmployee } from "@/hooks/employees/useDeleteEmployee";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useCreateEmployee } from "@/hooks/employees/useCreateEmployee";
import { useDisclosure } from "@mantine/hooks";
import { CreateEmployeeForm } from "../CreateEmployeeForm/CreateEmployeeForm";

export const EmployeesTable = () => {
  // tRPC calls
  const createMockEmployees = useCreateMockEmployees();
  const createEmployee = useCreateEmployee();
  const deleteEmployee = useDeleteEmployee();
  const listEmployees = useListEmployees();

  const pages = listEmployees.data?.pages || [];

  const employees = pages.flatMap((page) => page.data) || [];
  const cursor = pages.at(-1)?.cursor;

  // Creat Employee Drawer
  const [createDrawerOpen, createDrawer] = useDisclosure(false);

  // Table row virtualization
  const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);

  // Table infinite scroll
  const { tableRef, onBottomReached } = useInfiniteScroll({
    onLoadMore: listEmployees.fetchNextPage,
    isLoading: listEmployees.isFetching,
    hasNextPage: !!cursor,
  });

  const columns = useMemo<MRT_ColumnDef<EmployeeSchema>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        Cell: ({ row: { original: employee } }) => {
          return (
            <Flex align="center" gap="xs">
              <Avatar name={employee.name} src={employee.image}></Avatar>
              <Text>{employee.name}</Text>
            </Flex>
          );
        },
      },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "job", header: "Job" },
    ],
    []
  );

  const table = useMantineReactTable({
    // Data
    columns,
    data: employees,
    renderEmptyRowsFallback: () => (
      <Center h="100%" p="xl">
        <Stack align="center">
          <Text c="dimmed">No data to display</Text>

          {!employees.length ? (
            <Button
              variant="light"
              leftSection={<IconPlus />}
              onClick={() => createMockEmployees.mutate()}
              loading={createMockEmployees.isLoading}
            >
              Add mock users
            </Button>
          ) : null}
        </Stack>
      </Center>
    ),

    // Table options
    enableSelectAll: true,
    enableRowSelection: true,
    enableDensityToggle: false,
    mantineTopToolbarProps: { p: "xs" },
    positionToolbarAlertBanner: "none",
    enableStickyHeader: true,
    renderTopToolbarCustomActions: ({ table }) => {
      const selected = table
        .getRowModel()
        .rows.filter((row) => row.getIsSelected());

      return (
        <Group gap="sm">
          <Button leftSection={<IconPlus />} onClick={createDrawer.open}>
            Create Employee
          </Button>

          {selected.length ? (
            <Button
              variant="subtle"
              onClick={() =>
                deleteEmployee.mutate(
                  { ids: selected.map(({ original }) => original.id) },
                  { onSuccess: () => table.resetRowSelection() }
                )
              }
              leftSection={
                selected.length > 1 ? <IconUsersMinus /> : <IconUserMinus />
              }
              loading={deleteEmployee.isLoading}
            >
              {selected.length === 1 ? "Delete Employee" : "Delete Employees"}
            </Button>
          ) : null}
        </Group>
      );
    },

    // table state
    state: {
      isLoading: listEmployees.isLoading,
      showAlertBanner: listEmployees.isError,
      showProgressBars: listEmployees.isFetching,
    },

    // infinite scroll
    enablePagination: false,
    mantinePaperProps: {
      h: "100%",
      radius: 0,
    },
    mantineTableContainerProps: {
      ref: tableRef,
      mah: "100%",
      h: "100%",
      onScroll: onBottomReached,
    },

    // Virtualization
    rowVirtualizerInstanceRef,
    rowVirtualizerOptions: { overscan: 10 },
  });

  return (
    <>
      <MantineReactTable table={table} />

      <Drawer
        position="right"
        opened={createDrawerOpen}
        onClose={createDrawer.close}
        title="Create Employee"
      >
        <CreateEmployeeForm
          onSubmit={(data) =>
            createEmployee.mutate(data, {
              onSuccess: () => createDrawer.close(),
            })
          }
          loading={createEmployee.isLoading}
        />
      </Drawer>
    </>
  );
};
