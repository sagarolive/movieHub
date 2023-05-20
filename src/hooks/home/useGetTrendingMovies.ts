import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useGetTrendingMovies = ({ type, query }: any) => {
  const { isLoading, data } = useQuery(query, async () => {
    const res = await fetch(`/api/movie/trending?type=${type}`);
    return res.json();
  });

  return {
    isLoading,
    data,
  };
};

export default useGetTrendingMovies;
