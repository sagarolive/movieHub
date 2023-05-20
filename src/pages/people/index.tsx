import { LoadMoreButton, PeopleCard, Skeleton } from "@/components";
import { useGetPopularPeopleList } from "@/hooks";
import { Layout } from "@/layouts";
import React, { Fragment } from "react";

const People = () => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
    data,
  } = useGetPopularPeopleList();
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
            page.results.map((people: any) => <PeopleCard {...people} />)
          ) : (
            <div>No people found</div>
          )}
        </Fragment>
      );
    });
  }

  return (
    <Layout>
      <ul className="grid h-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {content}
      </ul>
      <div className="flex justify-center">
        <LoadMoreButton
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
    </Layout>
  );
};

export default People;
