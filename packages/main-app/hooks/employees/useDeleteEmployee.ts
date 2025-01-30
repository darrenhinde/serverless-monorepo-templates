import { trpc } from "@/trpc/client";

export const useDeleteEmployee = () => {
  const utils = trpc.useUtils();

  const mutation = trpc.employees.delete.useMutation({
    onSuccess: () => {
      utils.employees.list.invalidate();
    },
  });

  return mutation;
};
