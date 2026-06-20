import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function HarmChart({ data, activeSetting, onClear }) {
  return (
    <div className="rounded-xl border border-hairline bg-surface p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-ink">Types of Harm Experienced</h3>
        {activeSetting && (
          <button onClick={onClear} className="text-accent underline text-sm hover:text-accent-soft transition">
            Clear Filter
          </button>
        )}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <XAxis type="number" stroke="#C3B4AA" tick={{ fill: "#C3B4AA" }} />
          <YAxis type="category" dataKey="type" stroke="#C3B4AA" tick={{ fill: "#C3B4AA", fontSize: 12 }} width={160} />
          <Tooltip
            contentStyle={{ backgroundColor: "#1F1815", borderColor: "#3A2E29", color: "#F4EAE2" }}
            labelStyle={{ color: "#F4EAE2" }}
          />
          <Bar dataKey="count" fill="#C75B4E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
