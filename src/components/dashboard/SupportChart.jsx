// components/dashboard/SupportChart.jsx
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#10B981", "#3B82F6", "#8B5CF6", "#F43F5E"];

export default function SupportChart({ data }) {
  return (
    <div className="bg-white shadow rounded p-4 border">
      <h3 className="text-lg font-semibold mb-2">Recovery Supports</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="type"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
