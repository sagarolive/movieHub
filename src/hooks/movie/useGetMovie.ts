import { useQuery } from "react-query";
import { useRouter } from "next/router";

const useGetMovie = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const fetchMovie = () => {
    return fetch(`/api/movie/${movieId}`).then((res) => res.json());
  };
  const { data, isLoading, isError, error } = useQuery(
    ["movieDetail", movieId],
    fetchMovie,
    {
      enabled: !!movieId,
    }
  );

  return {
    movie: data,
    isLoading,
  };
};

export default useGetMovie;
