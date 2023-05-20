import {} from "@/types/people";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";

const useGetPopularPeopleList = () => {
  const {
    isLoading,
    data,
    hasNextPage,
    isSuccess,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["popularPeople"],
    async ({ pageParam = 1 }) => {
      const res = await fetch(`/api/people/people-list?page=${pageParam}`);
      return res.json();
    },
    {
      getNextPageParam: (_lastPage, pages) => {
        const totalPages = pages[0]?.total_pages;
        if (pages?.length < totalPages) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    }
  );

  return {
    isLoading,
    data,
    hasNextPage,
    isSuccess,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useGetPopularPeopleList;
