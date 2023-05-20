import React, { FC } from "react";
import { FetchNextPageOptions, InfiniteQueryObserverResult } from "react-query";

interface LoadMoreButtonProps {
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<any, unknown>>;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) => {
  return (
    <button
      onClick={() => fetchNextPage()}
      className={`mt-2 w-40 bg-teal-400 rounded-md py-2 px-1 ${
        hasNextPage ? "flex items-center justify-center" : "hidden"
      }`}
      disabled={!hasNextPage || isFetchingNextPage}
    >
      {isFetchingNextPage
        ? "Loading more..."
        : hasNextPage
        ? "Load More"
        : "Nothing more to load"}
    </button>
  );
};

export default LoadMoreButton;
