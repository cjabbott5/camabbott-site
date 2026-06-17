// components/dashboard/StatCard.jsx
export default function StatCard({ title, value }) {
    return (
      <div className="shadow rounded p-4 border">
        <h3 className="text-sm text-gray-300">{title}</h3>
        <p className="text-2xl font-semibold text-sky-300">{value}</p>
      </div>
    );
  }
  