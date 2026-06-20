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
    backgroundColor: "#1F1815",
    borderColor: "#3A2E29",
    color: "#F4EAE2",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#2A211C",
    color: "#F4EAE2",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#3A2E29" : "#2A211C",
    color: "#F4EAE2",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#9D342E",
    color: "#FBF2EC",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "#FBF2EC",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#FBF2EC",
    ":hover": { backgroundColor: "#C75B4E", color: "#FBF2EC" },
  }),
  input: (base) => ({
    ...base,
    color: "#F4EAE2",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#F4EAE2",
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
      <h2 className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
        Filter by
      </h2>

      <div className="flex flex-row gap-6">
        {Object.entries(groupedFilters).map(([groupLabel, keys]) => (
          <div key={groupLabel} className="min-w-[220px] space-y-2">
            <button
              onClick={() => toggleGroup(groupLabel)}
              className="flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-wide"
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
                    <label className="text-muted text-xs mb-1 block capitalize">
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

      {Object.entries(filters).some(([, val]) => val.length > 0) && (
        <div className="mt-6 mb-4 flex flex-wrap gap-2">
          {Object.entries(filters).map(([key, values]) =>
            values.map((val) => (
              <div
                key={`${key}-${val}`}
                className="flex items-center bg-raised text-ink text-sm px-4 py-2 rounded-full border border-hairline"
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
                  className="text-danger hover:text-danger/80"
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
          className="text-xs text-accent underline hover:text-accent-soft transition"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
