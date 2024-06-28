import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useDateStatistics } from "../api/queries/useDateStatistics";

const LineChart = () => {
  const { data } = useDateStatistics();

  const formatDate = (data) => {
    const [year, month, day] = data.split("-");
    return `${day}.${month}.${year}`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data?.data}
        margin={{
          top: 40,
          right: 20,
          left: -20,
          // bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="period"
          angle={-13}
          textAnchor="end"
          tick={{ fontSize: "9.5px" }}
          tickFormatter={formatDate}
        />
        <YAxis dataKey="count" />
        <Tooltip labelFormatter={(label) => formatDate(label)} />
        <Legend />
        <Line
          name="Кол-во"
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          activeDot={{ r: 4 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
