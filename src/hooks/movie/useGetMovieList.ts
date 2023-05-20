import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import useFilterStore from "./useFilterStore";

const useGetMovieList = () => {
  const { filters } = useFilterStore();

  const router = useRouter();

  const movieType =
    router.pathname === "/movies"
      ? "list"
      : router.pathname === "/movies/nowPlaying"
      ? "now-playing"
      : router.pathname === "/movies/upcoming"
      ? "upcoming"
      : "top-rated";

  const {
    isLoading,
    data,
    hasNextPage,
    isSuccess,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["popularMovies", filters],
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
        `/api/movie/${movieType}?page=${pageParam}&sort_by=${sortBy}&genre=${genre}&keyword=${keyword}&release_date_gte=${startDate}&release_date_lte=${endDate}&vote_average_lte=${voteAverageLte}&vote_average_gte=${voteAverageGte}`
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

  //  useEffect(() => {
  //    if (isSuccess) {
  //      let allPopularMovies: any = [];

  //      data?.pages?.map((page: any) => {
  //        return page?.results?.map((result: any) => {
  //          return allPopularMovies.push({
  //            imageUrl: result.poster_path
  //              ? `https://image.tmdb.org/t/p/original${result?.poster_path}`
  //              : "https://joadre.com/wp-content/uploads/2019/02/no-image.jpg",
  //            description: result?.overview,
  //            genre: ["comedy", "war"],
  //            rating: result?.vote_average,
  //            runTime: "120",
  //            title: result?.original_title,
  //            movieId: result.id,
  //            type: "movie",
  //            yearOfRelease: new Date(result?.release_date).toLocaleDateString(
  //              "en-US",
  //              {
  //                month: "short",
  //                day: "numeric",
  //                year: "numeric",
  //              }
  //            ),
  //          });
  //        });
  //      });
  //      setPopularMovies(allPopularMovies);
  //    }
  //  }, [data, isSuccess]);
  return {
    isLoading,
    data,
    hasNextPage,
    isSuccess,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useGetMovieList;
