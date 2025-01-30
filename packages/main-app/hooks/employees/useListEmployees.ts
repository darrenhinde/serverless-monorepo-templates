import { trpc } from "@/trpc/client";

export const useListEmployees = () => {
  const query = trpc.employees.list.useInfiniteQuery(
    {},
    {
      getNextPageParam: (lastPage) => lastPage.cursor,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return query;
};
