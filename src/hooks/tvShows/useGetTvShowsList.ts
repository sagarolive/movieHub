import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useFilterStore } from "../movie";

const useGetTvShowsList = () => {
  const { filters } = useFilterStore();

  const router = useRouter();

  const type =
    router.pathname === "/tv-shows"
      ? "list"
      : router.pathname === "/tv-shows/airingToday"
      ? "airing-today"
      : router.pathname === "/tv-shows/onTv"
      ? "on-tv"
      : "top-rated";

  const {
    isLoading,
    data,
    hasNextPage,
    isSuccess,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["popularTvSeries", filters],
    async ({ pageParam = 1 }) => {
      const {
        sortBy,
        genre,
        keyword,
        startDate,
        endDate,
        voteAverageGte,
        voteAverageLte,
      } = filters;

      const res = await fetch(
        `/api/tv-shows/${type}?page=${pageParam}&sort_by=${sortBy}&genre=${genre}&keyword=${keyword}&release_date_gte=${startDate}&release_date_lte=${endDate}&vote_average_lte=${voteAverageLte}&vote_average_gte=${voteAverageGte}`
      );
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

export default useGetTvShowsList;
