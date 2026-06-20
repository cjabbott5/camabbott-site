export default function StatCard({ title, value }) {
  return (
    <div className="rounded-xl border border-hairline bg-surface p-5">
      <h3 className="text-sm text-muted">{title}</h3>
      <p className="text-2xl font-semibold text-accent">{value}</p>
    </div>
  );
}
