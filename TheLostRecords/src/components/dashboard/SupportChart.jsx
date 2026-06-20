import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#6FCF97", "#C75B4E", "#E6A95C", "#9D342E", "#C9863A", "#8A7A70"];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#F4EAE2"
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
    <div className="rounded-xl border border-hairline bg-surface p-5">
      <h3 className="text-lg font-semibold text-ink mb-2">Recovery Supports</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
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
            contentStyle={{ backgroundColor: "#1F1815", borderColor: "#3A2E29", color: "#F4EAE2" }}
            labelStyle={{ color: "#F4EAE2" }}
            formatter={(value, name) => [`${value}`, `${name}`]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
