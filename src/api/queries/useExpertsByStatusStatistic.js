// experts-by-status-statistic
import { useMutation } from "@tanstack/react-query";
import { expertsByStatusStatisticFetcher } from "../api";

const queryKey = ["experts-by-status-statistic"];

const useExpertStatusStatistics = () => {
  return useMutation({
    mutationKey: queryKey,
    mutationFn: (params) => expertsByStatusStatisticFetcher(params),
  });
};

export { useExpertStatusStatistics };
