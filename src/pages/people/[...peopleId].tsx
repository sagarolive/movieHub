import { DetailPageSkeleton, PeopleDetail } from "@/components";
import { useGetPeople } from "@/hooks";
import { Layout } from "@/layouts";
import React from "react";

const PeopleDetailPage = () => {
  const { data, isLoading } = useGetPeople();

  if (isLoading) {
    return (
      <Layout>
        <DetailPageSkeleton />
      </Layout>
    );
  }
  return <Layout>{data ? <PeopleDetail {...data} /> : null}</Layout>;
};

export default PeopleDetailPage;
