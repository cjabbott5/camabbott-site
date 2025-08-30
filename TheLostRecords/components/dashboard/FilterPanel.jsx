import React, { useState } from "react";
import Select from "react-select";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import dummyData from "@/data/dummyData";

const filterKeyMap = {
  genderIdentities: "gender",
  sexualOrientations: "sexualOrientation",
  races: "race",
  disabilities: "disability",
  neurodivergence: "neurodivergence",
  diagnoses: "diagnosis",
  regions: "region",
  urbanRural: "urbanRural",
  ageGroups: "ageGroup",
  timeOfExperience: "timeOfExperience",
  settings: "setting",
  exposureContext: "exposureContext",
  recoveryStatus: "recoveryStatus",
  trustInSystem: "trustInSystem",
};

const groupedFilters = {
  Demographics: [
    "genderIdentities",
    "sexualOrientations",
    "races",
    "disabilities",
    "neurodivergence",
    "ageGroups",
  ],
  Experience: [
    "regions",
    "urbanRural",
    "settings",
    "timeOfExperience",
    "exposureContext",
  ],
  Outcomes: ["diagnoses", "recoveryStatus", "trustInSystem"],
};

const customSelectStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#111827",
    borderColor: "#374151",
    color: "#ffffff",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#1f2937",
    color: "#ffffff",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#374151" : "#1f2937",
    color: "#f9fafb",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#2563eb",
    color: "#fff",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#fff",
  }),
  input: (base) => ({
    ...base,
    color: "#fff",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),
};

export default function FilterPanel({ filters, setFilters }) {
  const [expandedGroups, setExpandedGroups] = useState({
    Demographics: false,
    Experience: false,
    Outcomes: false,
  });

  const handleMultiChange = (key, selectedOptions) => {
    const values = selectedOptions ? selectedOptions.map((o) => o.value) : [];
    setFilters((prev) => ({ ...prev, [key]: values }));
  };

  const toggleGroup = (groupLabel) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupLabel]: !prev[groupLabel],
    }));
  };

  return (
    <div className="w-full overflow-x-auto">
      <h2 className="text-sky-300 text-sm font-semibold uppercase tracking-wider mb-2">
        Filter by
      </h2>

      <div className="flex flex-row gap-6">
        {Object.entries(groupedFilters).map(([groupLabel, keys]) => (
          <div key={groupLabel} className="min-w-[220px] space-y-2">
            <button
              onClick={() => toggleGroup(groupLabel)}
              className="flex items-center gap-1 text-sky-300 text-xs font-bold uppercase tracking-wide"
            >
              {groupLabel}
              {expandedGroups[groupLabel] ? (
                <FaChevronUp size={10} />
              ) : (
                <FaChevronDown size={10} />
              )}
            </button>

            {expandedGroups[groupLabel] &&
              keys.map((key) => {
                const label = filterKeyMap[key] || key;
                const options = dummyData.filters[key].map((val) => ({
                  label: val,
                  value: val,
                }));

                return (
                  <div key={label} className="text-sm">
                    <label className="text-sky-300 text-xs mb-1 block capitalize">
                      {label.replace(/([A-Z])/g, " $1")}
                    </label>
                    <Select
                      options={options}
                      isMulti
                      styles={customSelectStyles}
                      className="text-sm"
                      classNamePrefix="react-select"
                      value={(filters[label] || []).map((val) => ({
                        label: val,
                        value: val,
                      }))}
                      onChange={(selected) => handleMultiChange(label, selected)}
                      placeholder="All"
                    />
                  </div>
                );
              })}
          </div>
        ))}
      </div>

      {Object.entries(filters).some(([_, val]) => val.length > 0) && (
        <div className="mt-6 mb-4 flex flex-wrap gap-2">
          {Object.entries(filters).map(([key, values]) =>
            values.map((val) => (
              <div
                key={`${key}-${val}`}
                className="flex items-center bg-sky-950 text-sky-300 text-sm px-4 py-2 rounded-full shadow-sm"
              >
                <span className="capitalize mr-2">
                  {key.replace(/([A-Z])/g, " $1")}: {val}
                </span>
                <button
                  onClick={() => {
                    const updated = (filters[key] || []).filter((v) => v !== val);
                    if (updated.length === 0) {
                      const { [key]: _, ...rest } = filters;
                      setFilters(rest);
                    } else {
                      setFilters({ ...filters, [key]: updated });
                    }
                  }}
                  className="text-red-400 hover:text-red-500"
                  aria-label="Remove filter"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
      )}

      <div className="text-right mt-2">
        <button
          onClick={() => setFilters({})}
          className="text-xs text-red-400 underline hover:text-red-500 transition"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
