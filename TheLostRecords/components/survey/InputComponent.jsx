import React from "react";
import Select from "react-select";

export default function InputComponent({ type, label, options, value, onChange, name }) {
  switch (type) {
    case "radio":
      return (
        <>
          <label className="block text-white font-semibold mb-3 text-base">{label}</label>
          <div className="space-y-3">
            {options.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center text-white text-base cursor-pointer"
              >
                <input
                  type="radio"
                  name={name}
                  value={opt.value}
                  checked={value === opt.value}
                  onChange={() => onChange(opt.value)}
                  className="w-5 h-5 mr-3 accent-pink-500"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </>
      );

    case "multi-select":
      return (
        <>
          <label className="block text-white font-semibold mb-3 text-base">{label}</label>
          <Select
            isMulti
            options={options}
            value={value}
            onChange={onChange}
            className="text-black"
          />
        </>
      );

    case "dropdown":
      return (
        <>
          <label className="block text-white font-semibold mb-3 text-base">{label}</label>
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-3 bg-neutral-800 text-white rounded border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select an option</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </>
      );

    case "email":
      return (
        <>
          <label className="block text-white font-semibold mb-3 text-base">{label}</label>
          <input
            type="email"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-3 bg-neutral-800 text-white rounded border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="your@email.com"
          />
        </>
      );

    case "slider":
      return (
        <>
          <label className="block text-white font-semibold mb-3 text-base">{label}</label>
          <input
            type="range"
            min={options?.min || 1}
            max={options?.max || 5}
            step={1}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full accent-pink-500"
          />
          <div className="flex justify-between text-sm text-neutral-400 mt-2">
            <span>{options?.minLabel || "Worse"}</span>
            <span>{options?.maxLabel || "Better"}</span>
          </div>
        </>
      );

    case "grid":
      return (
        <>
          <label className="block text-white font-semibold mb-3 text-base">{label}</label>
          <table className="w-full text-white mb-4 border-collapse">
            <thead>
              <tr>
                <th className="text-left p-2">Item</th>
                {options.columns.map((col) => (
                  <th key={col.value} className="text-center p-2">{col.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {options.rows.map((row) => (
                <tr key={row.value}>
                  <td className="p-2">{row.label}</td>
                  {options.columns.map((col) => (
                    <td key={col.value} className="text-center">
                      <input
                        type="radio"
                        name={`${name}-${row.value}`}
                        value={col.value}
                        checked={value?.[row.value] === col.value}
                        onChange={() => onChange({ ...value, [row.value]: col.value })}
                        className="accent-pink-500"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );

    default:
      return null;
  }
}
