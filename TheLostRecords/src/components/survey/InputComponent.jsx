// src/components/survey/InputComponent.jsx
import React from 'react';
import Select from 'react-select';

// Dark theme for react-select that matches the token palette.
const selectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: '#1F1815',
    borderColor: state.isFocused ? '#C75B4E' : '#3A2E29',
    boxShadow: 'none',
    minHeight: '48px',
    ':hover': { borderColor: '#C75B4E' },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#2A211C',
    border: '1px solid #3A2E29',
    zIndex: 60,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#3A2E29' : 'transparent',
    color: '#F4EAE2',
    cursor: 'pointer',
  }),
  multiValue: (base) => ({ ...base, backgroundColor: '#9D342E' }),
  multiValueLabel: (base) => ({ ...base, color: '#FBF2EC' }),
  multiValueRemove: (base) => ({
    ...base,
    color: '#FBF2EC',
    ':hover': { backgroundColor: '#C75B4E', color: '#FBF2EC' },
  }),
  placeholder: (base) => ({ ...base, color: '#8A7A70' }),
  input: (base) => ({ ...base, color: '#F4EAE2' }),
  singleValue: (base) => ({ ...base, color: '#F4EAE2' }),
};

const labelClass = 'block text-ink font-semibold mb-3 text-base';

export default function InputComponent({ type, label, options, value, onChange, name }) {
  switch (type) {
    case 'radio':
      return (
        <fieldset>
          <legend className={labelClass}>{label}</legend>
          <div className="space-y-3">
            {(options || []).map((opt) => (
              <label
                key={opt.value}
                className="flex items-center text-ink text-base cursor-pointer"
              >
                <input
                  type="radio"
                  name={name}
                  value={opt.value}
                  checked={value === opt.value}
                  onChange={() => onChange(opt.value)}
                  className="w-5 h-5 mr-3 accent-accent"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>
      );

    case 'multi-select': {
      // Stored value is a plain array of string values (NOT react-select objects),
      // so conditional logic that does array.includes("inpatient") works correctly.
      const selected = (options || []).filter((o) =>
        Array.isArray(value) ? value.includes(o.value) : false
      );
      return (
        <div>
          <label className={labelClass} htmlFor={name}>
            {label}
          </label>
          <Select
            inputId={name}
            isMulti
            options={options}
            value={selected}
            onChange={(opts) => onChange((opts || []).map((o) => o.value))}
            styles={selectStyles}
            placeholder="Select all that apply…"
          />
        </div>
      );
    }

    case 'dropdown':
      return (
        <div>
          <label className={labelClass} htmlFor={name}>
            {label}
          </label>
          <select
            id={name}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-3 bg-surface text-ink rounded-lg border border-hairline focus:outline-none focus:border-accent"
          >
            <option value="">Select an option</option>
            {(options || []).map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      );

    case 'email':
      return (
        <div>
          <label className={labelClass} htmlFor={name}>
            {label}
          </label>
          <input
            id={name}
            type="email"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-3 bg-surface text-ink rounded-lg border border-hairline focus:outline-none focus:border-accent placeholder-faint"
            placeholder="you@example.com"
          />
        </div>
      );

    case 'slider': {
      const min = options?.min ?? 1;
      const max = options?.max ?? 5;
      const current = value ?? Math.round((min + max) / 2);
      return (
        <div>
          <label className={labelClass} htmlFor={name}>
            {label}
          </label>
          <input
            id={name}
            type="range"
            min={min}
            max={max}
            step={1}
            value={current}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full accent-accent"
            aria-valuetext={String(current)}
          />
          <div className="flex justify-between text-sm text-muted mt-2">
            <span>{options?.minLabel || 'Worse'}</span>
            <span className="text-ink font-medium">{current}</span>
            <span>{options?.maxLabel || 'Better'}</span>
          </div>
        </div>
      );
    }

    case 'grid': {
      const cols = options?.columns || [];
      const rows = options?.rows || [];
      if (cols.length === 0 || rows.length === 0) return null;
      return (
        <div>
          <span className={labelClass}>{label}</span>
          <div className="overflow-x-auto">
            <table className="w-full text-ink mb-4 border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-2 text-sm text-muted font-medium">Item</th>
                  {cols.map((col) => (
                    <th key={col.value} className="text-center p-2 text-sm text-muted font-medium">
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.value} className="border-t border-hairline">
                    <td className="p-2">{row.label}</td>
                    {cols.map((col) => (
                      <td key={col.value} className="text-center">
                        <input
                          type="radio"
                          name={`${name}-${row.value}`}
                          value={col.value}
                          checked={value?.[row.value] === col.value}
                          onChange={() =>
                            onChange({ ...(value || {}), [row.value]: col.value })
                          }
                          className="accent-accent w-4 h-4"
                          aria-label={`${row.label}: ${col.label}`}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    case 'info':
      return (
        <div className="bg-surface border border-hairline rounded-lg p-4">
          <p className="text-muted text-sm leading-relaxed">{label}</p>
        </div>
      );

    default:
      return null;
  }
}