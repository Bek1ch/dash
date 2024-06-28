import { useMutation } from "@tanstack/react-query";
import { requestStatisticsFetcher } from "../api";

const queryKey = ["request-statistics"];

const useRequestStatistics = () => {
  return useMutation({
    mutationKey: queryKey,
    mutationFn: (params) => requestStatisticsFetcher(params),
  });
};

export { useRequestStatistics };
