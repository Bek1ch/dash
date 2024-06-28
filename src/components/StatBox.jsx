import { Box, Typography } from "@mui/material";

const StatBox = ({ title, subtitle, bgColor, subtitleColor }) => {
  return (
    <Box
      padding={2}
      bgcolor={bgColor}
      borderRadius={2}
      sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="90px"
    >
      <Typography variant="h4" fontWeight="500" fontSize={32} color="white">
        {title}
      </Typography>
    </Box>
  );
};

export default StatBox;
