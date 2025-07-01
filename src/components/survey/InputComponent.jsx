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

    case "checkbox-group":
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
                  type="checkbox"
                  value={opt.value}
                  checked={value?.includes(opt.value)}
                  onChange={() =>
                    onChange(
                      value.includes(opt.value)
                        ? value.filter((v) => v !== opt.value)
                        : [...value, opt.value]
                    )
                  }
                  className="w-5 h-5 mr-3 accent-pink-500"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </>
      );

    case "rating":
      return (
        <>
          <label className="block text-whiteflex items-center justify-center font-semibold mb-3 text-base">{label}</label>
          <div className="flex flex items-center justify-center space-x-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => onChange(num)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold border transition 
                  ${value === num ? "bg-white text-black border-white" : "bg-neutral-800 text-white border-neutral-600"}`}
              >
                {num}
              </button>
            ))}
          </div>
        </>
      );

    case "text":
      return (
        <>
          <label className="block text-white font-semibold mb-3 text-base">{label}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-3 bg-neutral-800 text-white rounded border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </>
      );

    case "textarea":
      return (
        <>
          <label className="block text-white font-semibold mb-3 text-base">{label}</label>
          <textarea
            value={value}
            rows={4}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-3 bg-neutral-800 text-white rounded border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </>
      );

    default:
      return null;
  }
}
