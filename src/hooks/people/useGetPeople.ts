import { useQuery } from "react-query";
import { useRouter } from "next/router";

const useGetPeople = () => {
  const router = useRouter();
  const { peopleId } = router.query;

  const fetchMovie = () => {
    return fetch(`/api/people/${peopleId}`).then((res) => res.json());
  };
  const { data, isLoading, isError, error } = useQuery<any>(
    ["peopleDetail", peopleId],
    fetchMovie,
    {
      enabled: !!peopleId,
    }
  );

  return {
    data,
    isLoading,
  };
};

export default useGetPeople;
