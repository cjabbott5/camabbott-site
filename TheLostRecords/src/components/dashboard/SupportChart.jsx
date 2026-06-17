import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Define custom colors
const COLORS = ["#10B981", "#3B82F6", "#8B5CF6", "#F43F5E"];

// Custom label renderer
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#ffffff"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-xs"
    >
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function SupportChart({ data }) {
  return (
    <div className="shadow rounded p-4 border border-zinc-700 bg-zinc-900">
      <h3 className="text-lg font-semibold text-white mb-2">Recovery Supports</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="type"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#f9fafb" }}
            labelStyle={{ color: "#f9fafb" }}
            formatter={(value, name) => [`${value}`, `${name}`]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
