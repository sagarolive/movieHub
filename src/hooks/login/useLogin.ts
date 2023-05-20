import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/router";

const useLogin = () => {
  const login = (data: any) => {
    return fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  const { mutateAsync, isLoading, mutate } = useMutation(login);

  return {
    isLoading,
    mutateAsync,
    mutate,
  };
};

export default useLogin;
