import { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = [
  "#53af5c",
  "#33A5FF",
  "#F75252",
  "#e69b58",
  "#3D3434",
  "#c66c89",
];

const formatNumberWithSpaces = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const PieChartWithCustomizedLabel = ({ data }) => {
  const dataArr = useMemo(() => {
    if (!data) return [];
    const nData = Object.keys(data).map((key) => {
      const chartObj = { name: key, value: data[key] };
      return chartObj;
    });

    if (nData.name === "Консультация") {
      return { ...nData, value: formatNumberWithSpaces(nData.value) };
    }

    const sortedData = nData.sort((a, b) => b.value - a.value);

    return nData;
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={dataArr}
          cx="50%"
          cy="50%"
          innerRadius={90}
          paddingAngle={8}
          dataKey="value"
        >
          {dataArr.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              stroke={COLORS[index]}
              fill={COLORS[index]}
            />
          ))}
        </Pie>
        <Tooltip formatter={(value) => formatNumberWithSpaces(value)} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
export default PieChartWithCustomizedLabel;
