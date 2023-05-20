import { DetailPage, DetailPageSkeleton } from "@/components";
import { useGetTvShow } from "@/hooks";
import { Layout } from "@/layouts";

import React from "react";

const MovieDetailPage = () => {
  const { isLoading, movie } = useGetTvShow();
  console.log("movie", movie);

  if (isLoading) {
    return (
      <Layout>
        <DetailPageSkeleton />
      </Layout>
    );
  }

  return <Layout>{movie ? <DetailPage {...movie} /> : null}</Layout>;
};

export default MovieDetailPage;
