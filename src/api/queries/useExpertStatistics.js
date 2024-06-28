import { useQuery } from "@tanstack/react-query";
import { divisionsTableDataFetcher } from "../api";

const queryKey = ["experts-tree-by-status-statistic"];

const useExpertStatistics = () => {
  return useQuery({
    queryKey: queryKey,
    queryFn: divisionsTableDataFetcher,
  });
};

export { useExpertStatistics };
