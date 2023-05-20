import { DetailPage, DetailPageSkeleton } from "@/components";
import { useGetMovie } from "@/hooks";
import { Layout } from "@/layouts";

import React from "react";

const MovieDetailPage = () => {
  const { isLoading, movie } = useGetMovie();

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
