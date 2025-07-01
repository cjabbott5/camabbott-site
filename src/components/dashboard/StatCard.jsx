// components/dashboard/StatCard.jsx
export default function StatCard({ title, value }) {
    return (
      <div className="bg-white shadow rounded p-4 border">
        <h3 className="text-sm text-gray-600">{title}</h3>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    );
  }
  