import { trpc } from "@/trpc/client";

export const useCreateMockEmployees = () => {
  const utils = trpc.useUtils();

  const mutation = trpc.employees.createMocks.useMutation({
    onSuccess: () => {
      utils.employees.list.invalidate();
    },
  });

  return mutation;
};
