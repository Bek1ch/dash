import { useQuery } from "@tanstack/react-query";
import { dateStatisticsFetcher } from "../api";

const queryKey = ["date-statistics"];

const useDateStatistics = () => {
  return useQuery({
    queryKey: queryKey,
    queryFn: dateStatisticsFetcher,
  });
};

export { useDateStatistics };
