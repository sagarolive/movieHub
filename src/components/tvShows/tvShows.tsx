import { Filter, LoadMoreButton, MovieCard, Skeleton } from "@/components";
import { useGetMovieList, useGetTvShowsList } from "@/hooks";
import { Layout } from "@/layouts";
import { Movie } from "@/types";

import { Fragment } from "react";

const TvShows = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetTvShowsList();

  let content;

  if (isLoading) {
    content = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ].map((item) => <Skeleton key={item} />);
  } else {
    content = data?.pages.map((page, index) => {
      return (
        <Fragment key={index}>
          {page.results.length > 0 ? (
            page.results.map(
              (movie: Movie & { name: string; first_air_date: string }) => (
                <MovieCard {...movie} />
              )
            )
          ) : (
            <div className="h-screen text-gray-400 flex items-center justify-center">
              No movie found
            </div>
          )}
        </Fragment>
      );
    });
  }

  return (
    <Layout>
      <div className="bg-gray-900 flex flex-col  w-full min-h-screen overflow-hidden">
        <Filter />
        <div
          className={
            data?.pages[0]?.results?.length === 0
              ? "h-full"
              : "grid h-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
          }
        >
          {content}
        </div>
        <div className="flex justify-center">
          <LoadMoreButton
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </div>
      </div>
    </Layout>
  );
};

export default TvShows;
