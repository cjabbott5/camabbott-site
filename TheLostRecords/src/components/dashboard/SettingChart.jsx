import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function SettingChart({ data, onSettingClick }) {
  return (
    <div className="rounded-xl border border-hairline bg-surface p-5">
      <h3 className="text-lg font-semibold text-ink mb-2">Experiences by Setting</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 80 }}
          barCategoryGap={20}
        >
          <XAxis
            dataKey="name"
            stroke="#C3B4AA"
            tick={{ fill: "#C3B4AA", fontSize: 12 }}
            angle={-35}
            textAnchor="end"
            interval={0}
          />
          <YAxis stroke="#C3B4AA" tick={{ fill: "#C3B4AA", fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#1F1815", borderColor: "#3A2E29", color: "#F4EAE2" }}
            labelStyle={{ color: "#F4EAE2" }}
          />
          <Legend wrapperStyle={{ color: "#F4EAE2" }} />
          <Bar dataKey="safe" name="Felt Safe" fill="#6FCF97" barSize={20} onClick={(data) => onSettingClick(data.name)} />
          <Bar dataKey="harmful" name="Harmed" fill="#E5736B" barSize={20} onClick={(data) => onSettingClick(data.name)} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
