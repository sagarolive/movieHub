import { useQuery } from "react-query";

import { useRouter } from "next/router";

const useGetTvShow = () => {
  const router = useRouter();
  const { tvShowId } = router.query;

  const fetchMovie = () => {
    return fetch(`/api/tv-shows/${tvShowId}`).then((res) => res.json());
  };
  const { data, isLoading, isError, error } = useQuery(
    ["tvShowDetail", tvShowId],
    fetchMovie,
    {
      enabled: !!tvShowId,
    }
  );

  return {
    movie: data,
    isLoading,
  };
};

export default useGetTvShow;
