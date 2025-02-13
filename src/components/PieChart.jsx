import {
  PieChart as RechartsPieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChart = ({ data }) => {
  const callCenterStatus = {
    id: "Колл-центр",
    name: "Колл-центр",
    value: data,
    color: "#4551b5",
  };

  const chartData = [callCenterStatus];

  return (
    <ResponsiveContainer className="piechart-test" width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          // fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell
              name={callCenterStatus.name}
              tabIndex="-1"
              key={`cell-${index}`}
              fill="hsl(215, 100%, 38%)"
            />
          ))}
        </Pie>
        <Legend />
        <Tooltip formatter={(value) => data.toLocaleString()} />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
