import { useState } from "react";
import { useApplications } from "../../store/applicationsStore";
import { Box, Button, Typography, colors } from "@mui/material";
import { DateTimePicker } from "react-widgets";
import StatBox from "../../components/StatBox";
import dayjs from "dayjs";
import "../../index.css";

const Statistics = (
  { data = {}, isLoading = false, onUpdate } = { onUpdate: () => {} }
) => {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const { depData } = useApplications();

  const currentDate = dayjs().format("DD.MM.YYYY");

  const conditionalData = depData ?? data;


  return (
    <Box px={2}>
      {/* HEADER */}

      <Box mt={2} display="flex" alignItems="center" columnGap={4}>
        <Box display="flex" columnGap={2}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography sx={{ marginLeft: 0.4, marginBottom: 0.4 }}>
              С
            </Typography>
            <DateTimePicker
              placeholder="01.01.2024"
              value={fromDate}
              onChange={setFromDate}
            />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography sx={{ marginLeft: 0.4, marginBottom: 0.4 }}>
              По
            </Typography>
            <DateTimePicker
              placeholder={currentDate}
              value={toDate}
              onChange={setToDate}
            />
          </Box>
        </Box>
        <Button
          sx={{
            backgroundColor: colors.grey[200],
            color: "black",
            paddingInline: 8,
            // marginTop: 1,
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: 14,
            marginTop: "21px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          disabled={isLoading}
          variant="contained"
          onClick={() => onUpdate({ fromDate, toDate })}
        >


        </Button>
      </Box>
      {/* GRID & CHARTS */}
      {isLoading ? (
        "loading ... "
      ) : (
        <Box marginTop={3} display="flex" columnGap={8}>
          <Box>
            <Typography
              color="black"
              fontWeight={700}
              fontSize={72}
              variant="h1"
            >
              {conditionalData?.ALL?.toLocaleString()}
            </Typography>
            <Typography
              color="black"
              whiteSpace="nowrap"
              fontWeight="600"
              variant="body1"
              sx={{ mt: 3, ml: 1 }}
            >
              Всего обращений
            </Typography>
          </Box>
          <Box flex="1" alignSelf="end">
            <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap="20px">

              {/* Start cards */}
              <Box>
                <StatBox
                  bgColor="#f43434"
                  title={conditionalData?.EXPIRED?.toLocaleString() ?? 0}
                />
                <Typography
                  variant="body2"
                  color="#ff0000"
                  mt={1}
                  textAlign="left"
                  fontWeight="600"
                  whiteSpace="nowrap"
                  ml={2}
                >
                  Просроченные
                </Typography>
              </Box>

              <Box>
                <StatBox
                  bgColor="#f67d0c"
                  title={conditionalData?.WAITING?.toLocaleString() ?? 0}
                />
                <Typography
                  variant="body2"
                  color="#ffa500"
                  mt={1}
                  textAlign="left"
                  fontWeight="600"
                  whiteSpace="nowrap"
                  ml={2}
                >
                  В ожидании
                </Typography>
              </Box>

              <Box>
                <StatBox
                  bgColor="#3748ed"
                  title={conditionalData?.ASSIGNED?.toLocaleString() ?? 0}
                />
                <Typography
                  variant="body2"
                  color="#0000ff"
                  mt={1}
                  textAlign="left"
                  fontWeight="600"
                  whiteSpace="nowrap"
                  ml={2}
                >
                  В работе
                </Typography>
              </Box>

              <Box>
                <StatBox
                  bgColor="#505156"
                  title={conditionalData?.CLOSED_EXPIRED?.toLocaleString() ?? 0}
                />
                <Typography
                  variant="body2"
                  color="#808080"
                  mt={1}
                  textAlign="left"
                  fontWeight="600"
                  whiteSpace="nowrap"
                  ml={2}
                >
                  Закр. с просрочкой
                </Typography>
              </Box>

              <Box>
                <StatBox

                  bgColor="#f78e82"
                  title={conditionalData?.SOLVED?.toLocaleString() ?? 0}
                />
                <Typography
                  variant="body2"
                  color="#f78e82"
                  mt={1}
                  textAlign="left"
                  fontWeight="600"
                  whiteSpace="nowrap"
                  ml={2}
                >
                  Решенные
                </Typography>
              </Box>

              <Box>
                <StatBox

                  bgColor="#1b9c38"
                  title={conditionalData?.CLOSED?.toLocaleString() ?? 0}
                />
                <Typography
                  variant="body2"
                  color="#008000"
                  mt={1}
                  textAlign="left"
                  fontWeight="600"
                  whiteSpace="nowrap"
                  ml={2}
                >
                  Закрытые
                </Typography>
              </Box>
              {/* End cards */}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Statistics;
