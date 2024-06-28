import { useMutation, } from "@tanstack/react-query";
import { statusStatisticsFetcher } from "../api";

const queryKey = ["status-statistics"];

const useStatusStatistics = () => {
  return useMutation({
    mutationKey: queryKey,
    mutationFn: (params) => statusStatisticsFetcher(params),
  });
};

export { useStatusStatistics };
