import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function HarmChart({ data, activeSetting, onClear }) {
  return (
    <div className="bg-zinc-900 text-white shadow rounded-xl p-4 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">Types of Harm Experienced</h3>
        {activeSetting && (
          <button onClick={onClear} className="text-red-400 underline text-sm">
            Clear Filter
          </button>
        )}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <XAxis type="number" stroke="#ffffff" />
          <YAxis type="category" dataKey="type" stroke="#ffffff" />
          <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#6b7280" }} labelStyle={{ color: "#f9fafb" }} />
          <Bar dataKey="count" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}