import React from "react";
import { useQuery } from "react-query";

const useGetLatestMovies = () => {
  const { isLoading, data } = useQuery(
    "latestMovies",
    async () => {
      const res = await fetch("/api/getLatestMovies");
      return res.json();
    },
    {
      select(data) {
        return data?.results
          ?.map((result: any) => ({
            id: result.id,
            title: result.title,
            rating: result.vote_average,
            bgImageUrl: result.backdrop_path,
            description: result.overview,
          }))
          .slice(0, 10);
      },
    }
  );
  return { data, isLoading };
};

export default useGetLatestMovies;
