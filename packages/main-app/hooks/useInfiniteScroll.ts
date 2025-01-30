import { useCallback, useRef } from "react";

interface UseInfiniteScrollOptions {
  onLoadMore: () => void;
  isLoading: boolean;
  hasNextPage: boolean;
  threshold?: number;
}

export function useInfiniteScroll({
  onLoadMore,
  isLoading,
  hasNextPage,
  threshold = 400,
}: UseInfiniteScrollOptions) {
  const tableRef = useRef<HTMLDivElement | null>(null);

  const onBottomReached = useCallback(() => {
    const container = tableRef.current;
    if (container && !isLoading && hasNextPage) {
      const { scrollHeight, scrollTop, clientHeight } = container;

      if (scrollHeight - scrollTop - clientHeight < threshold) {
        onLoadMore();
      }
    }
  }, [onLoadMore, isLoading, hasNextPage, threshold]);

  return { tableRef, onBottomReached };
}
