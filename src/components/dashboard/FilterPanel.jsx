// components/dashboard/FilterPanel.jsx
import React from "react";

export default function FilterPanel({ filters, setFilters }) {
  const handleChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  return (
    <div className="bg-gray-50 p-4 rounded shadow w-full lg:w-64 space-y-4">
      <h2 className="text-lg font-semibold">Filters</h2>
      {/* Example filter for Region */}
      <div>
        <label className="block text-sm font-medium">Region</label>
        <select
          className="mt-1 block w-full border border-gray-300 rounded"
          onChange={(e) => handleChange("region", e.target.value)}
        >
          <option value="">All</option>
          <option value="Northeast">Northeast</option>
          <option value="Midwest">Midwest</option>
          <option value="South">South</option>
          <option value="West">West</option>
        </select>
      </div>
      {/* Add more dropdowns/checkboxes for other filters here */}
    </div>
  );
}