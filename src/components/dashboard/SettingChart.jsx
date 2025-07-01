// components/dashboard/SettingChart.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function SettingChart({ data, onSettingClick }) {
  return (
    <div className="bg-zinc-900 text-white shadow rounded-xl p-4 border border-white/10">
      <h3 className="text-lg font-semibold mb-2">Experiences by Setting</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
  data={data}
  margin={{ top: 20, right: 30, left: 0, bottom: 80 }}
  barCategoryGap={20}
>
  <XAxis
    dataKey="name"
    stroke="#ffffff"
    tick={{ fill: "#ffffff", fontSize: 12 }}
    angle={-35}
    textAnchor="end"
    interval={0}
  />
  <YAxis stroke="#ffffff" tick={{ fill: "#ffffff", fontSize: 12 }} />
  <Tooltip
    contentStyle={{ backgroundColor: "#1f2937", borderColor: "#6b7280" }}
    labelStyle={{ color: "#f9fafb" }}
  />
  <Legend wrapperStyle={{ color: "#ffffff" }} />
  <Bar dataKey="safe" name="Felt Safe" fill="#3b82f6" barSize={20} onClick={(data) => onSettingClick(data)} />
  <Bar dataKey="harmful" name="Harmed" fill="#f43f5e" barSize={20} onClick={(data) => onSettingClick(data)} />
</BarChart>

      </ResponsiveContainer>
    </div>
  );
}
