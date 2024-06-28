import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import PieChartWithCustomizedLabel from "../../components/Label";
import React, { Fragment, useEffect } from "react";
import Statistics from "../statistics";
import { useRequestStatistics } from "../../api/queries/useRequestStatistics";
import { useStatusStatistics } from "../../api/queries/useStatusStatistics";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Queries
  const {
    data: statusStatisticsData,
    isPending: isStatusStatsLoading,
    mutateAsync: fetchStatusStats,
  } = useStatusStatistics();
  const {
    data: requestStatisticsData,
    isPending: isRequestStatsLoading,
    mutateAsync: fetchRequestStats,
  } = useRequestStatistics();

  const handleUpdate = async (params) => {
    const { fromDate, toDate } = params;
    if (!fromDate || !toDate) return;
    Promise.allSettled([
      fetchStatusStats({
        startDate: fromDate,
        endDate: toDate,
      }),
      fetchRequestStats({
        startDate: fromDate,
        endDate: toDate,
      }),
    ]);
    console.log(fromDate.toISOString(), toDate.toISOString());
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchStatusStats();
      await fetchRequestStats();
    };

    fetchData();
  }, [fetchRequestStats, fetchStatusStats]);

  return (
    <Fragment>
      <Statistics
        data={statusStatisticsData?.data}
        isLoading={isStatusStatsLoading || isRequestStatsLoading}
        onUpdate={handleUpdate}
      />
      <Box
        mt={4}
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gap="20px"
      >
        <Box backgroundColor={colors.primary[400]}>
          <Box
            mt="20px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Typography
                variant="h6"
                fontWeight="700"
                color={colors.grey[100]}
                fontSize={17}
              >
                Динамика за год
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              ></Typography>
            </Box>
            <Box>
              <IconButton>
                {/* <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              /> */}
              </IconButton>
            </Box>
          </Box>
          <Box maxHeight={380} height="100%">
            <LineChart />
          </Box>
        </Box>
        <Box backgroundColor={colors.primary[400]}>
          <Box
            mt="20px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Typography
                variant="h6"
                fontWeight="700"
                color={colors.grey[100]}
                fontSize={17}
              >
                Источники обращений
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              ></Typography>
            </Box>
            <Box>
              <IconButton></IconButton>
            </Box>
          </Box>
          <Box maxHeight={380} height="100%">
            <PieChart data={statusStatisticsData?.data.ALL} />
          </Box>
        </Box>
        <Box backgroundColor={colors.primary[400]}>
          <Box
            mt="20px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Typography
                variant="h6"
                fontWeight="700"
                color={colors.grey[100]}
                fontSize={17}
              >
                Типы запросов
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              ></Typography>
            </Box>
            <Box>
              <IconButton></IconButton>
            </Box>
          </Box>
          <Box maxHeight={380} height="100%">
            <PieChartWithCustomizedLabel data={requestStatisticsData?.data} />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Dashboard;
