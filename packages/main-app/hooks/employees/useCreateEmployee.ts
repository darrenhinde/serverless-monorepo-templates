import { trpc } from "@/trpc/client";

export const useCreateEmployee = () => {
  const utils = trpc.useUtils();

  const mutation = trpc.employees.create.useMutation({
    onSuccess: () => {
      utils.employees.list.invalidate();
    },
  });

  return mutation;
};
