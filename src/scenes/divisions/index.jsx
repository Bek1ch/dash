import { useEffect } from "react";
import DivisionsTable from "../../components/DivisionsTable";
import { divisionsTableColumns } from "./table-config";
import { Box, Typography } from "@mui/material";
import { setDepartaments, useDepartaments } from "../../store/depsStore";
import { setDepMetaData, useApplications } from "../../store/applicationsStore";
import Statistics from "../statistics";
import { useExpertStatistics } from "../../api/queries/useExpertStatistics";
import { useExpertStatusStatistics } from "../../api/queries/useExpertsByStatusStatistic";
import { Navigate } from "react-router-dom";

const DivisionsPage = () => {
  const { departaments } = useDepartaments();
  const { depData } = useApplications();
  const { data: tableData, isLoading: isTableDataLoading } =
    useExpertStatistics();

  // Queries
  const {
    data: expertStatusData,
    isPending: isExpertStatusLoading,
    mutateAsync,
  } = useExpertStatusStatistics();

  const handleUpdate = async (params) => {
    const { fromDate, toDate } = params;
    if (!fromDate || !toDate) return;
    await mutateAsync({
      startDate: fromDate,
      endDate: toDate,
    });
    console.log(fromDate.toISOString(), toDate.toISOString());
  };

  const handleResetTable = () => {
    setDepartaments(null);
    setDepMetaData(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      await mutateAsync();
    };

    fetchData();

    return () => {
      handleResetTable();
    };
  }, [mutateAsync]);

  if (isTableDataLoading) return "page loading...";

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Statistics
          data={expertStatusData?.data}
          isLoading={isExpertStatusLoading}
          onUpdate={handleUpdate}
        />
      </Box>
      {depData && departaments && (
        <Typography
          onClick={handleResetTable}
          sx={{
            cursor: "pointer",
            marginBottom: "4px",
            marginLeft: "4px",
            border: "1px solid black",
            padding: "4px 16px",
            borderRadius: "3px",
            display: "inline-block",
            color: "black",
            backgroundColor: "transparent",
            transition: "background-color 0.3s, color 0.3s",
            "&:hover": {
              backgroundColor: "#cccccc",
              color: "black",
            },
          }}
        >
          Назад
        </Typography>
      )}
      <DivisionsTable
        columns={divisionsTableColumns}
        data={departaments ? departaments : tableData.data ?? []}
      />
    </Box>
  );
};

export default DivisionsPage;
