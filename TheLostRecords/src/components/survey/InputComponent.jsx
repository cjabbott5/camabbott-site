// src/components/survey/InputComponent.jsx
import React from "react";

const labelClass = "block text-ink font-semibold mb-3 text-xl leading-snug";
const helpClass = "text-sm text-muted leading-relaxed mb-5";

export default function InputComponent({
  type,
  label,
  helpText,
  options,
  value,
  onChange,
  name,
  leftLabel,
  rightLabel,
  placeholder,
  multiline,
  autoFocus,
  noneExclusive,
}) {
  switch (type) {
    case "radio":
      return (
        <fieldset>
          <legend className={labelClass}>{label}</legend>
          {helpText && <p className={helpClass}>{helpText}</p>}

          <div className="space-y-3">
            {(options || []).map((opt) => {
              const selected = value === opt.value;

              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onChange(opt.value)}
                  aria-pressed={selected}
                  className={[
                    "w-full text-left px-5 py-4 rounded-xl border text-base transition",
                    "min-h-[56px] flex items-center",
                    selected
                      ? "border-accent bg-accent-soft text-ink"
                      : "border-hairline bg-surface text-ink hover:border-accent",
                  ].join(" ")}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </fieldset>
      );

    case "multiselect": {
      const arr = Array.isArray(value) ? value : [];

      const exclusiveValues = ["none", "unsure", "prefer-not"];
      const isExclusive = (v) =>
        noneExclusive && exclusiveValues.includes(v);

      const toggle = (v) => {
        if (isExclusive(v)) {
          onChange(arr.includes(v) ? [] : [v]);
          return;
        }

        const cleared = noneExclusive
          ? arr.filter((x) => !exclusiveValues.includes(x))
          : arr;

        onChange(
          cleared.includes(v)
            ? cleared.filter((x) => x !== v)
            : [...cleared, v]
        );
      };

      return (
        <div>
          <span className={labelClass}>{label}</span>
          {helpText && <p className={helpClass}>{helpText}</p>}

          <div className="flex flex-wrap gap-2.5">
            {(options || []).map((opt) => {
              const selected = arr.includes(opt.value);

              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => toggle(opt.value)}
                  aria-pressed={selected}
                  className={[
                    "px-4 py-3 rounded-full border text-base transition min-h-[48px]",
                    "max-w-full text-left leading-snug",
                    selected
                      ? "border-accent bg-accent text-accent-ink"
                      : "border-hairline bg-surface text-ink hover:border-accent",
                  ].join(" ")}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    case "scale5": {
      const points = [1, 2, 3, 4, 5];

      return (
        <div>
          <span className={labelClass}>{label}</span>
          {helpText && <p className={helpClass}>{helpText}</p>}

          <div
            className="grid grid-cols-5 gap-2"
            role="radiogroup"
            aria-label={label}
          >
            {points.map((n) => {
              const selected = value === n;

              return (
                <button
                  key={n}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  aria-label={`${n}${
                    n === 1
                      ? ` — ${leftLabel}`
                      : n === 5
                        ? ` — ${rightLabel}`
                        : ""
                  }`}
                  onClick={() => onChange(n)}
                  className={[
                    "h-16 rounded-xl border text-lg font-semibold transition",
                    selected
                      ? "border-accent bg-accent text-accent-ink"
                      : "border-hairline bg-surface text-ink hover:border-accent",
                  ].join(" ")}
                >
                  {n}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between gap-4 text-sm text-muted mt-3 leading-snug">
            <span>{leftLabel}</span>
            <span className="text-right">{rightLabel}</span>
          </div>
        </div>
      );
    }

    case "dropdown":
      return (
        <div>
          <label className={labelClass} htmlFor={name}>
            {label}
          </label>
          {helpText && <p className={helpClass}>{helpText}</p>}

          <select
            id={name}
            autoFocus={autoFocus}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-4 bg-surface text-ink rounded-xl border border-hairline focus:outline-none focus:border-accent text-base min-h-[56px]"
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

    case "email":
      return (
        <div>
          <label className={labelClass} htmlFor={name}>
            {label}
          </label>
          {helpText && <p className={helpClass}>{helpText}</p>}

          <input
            id={name}
            type="email"
            autoFocus={autoFocus}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-4 bg-surface text-ink rounded-xl border border-hairline focus:outline-none focus:border-accent placeholder-faint text-base"
            placeholder={placeholder || "you@example.com"}
          />
        </div>
      );

    case "text":
      return (
        <div>
          <label className={labelClass} htmlFor={name}>
            {label}
          </label>
          {helpText && <p className={helpClass}>{helpText}</p>}

          {multiline ? (
            <textarea
              id={name}
              autoFocus={autoFocus}
              rows={5}
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
              className="w-full p-4 bg-surface text-ink rounded-xl border border-hairline focus:outline-none focus:border-accent placeholder-faint text-base resize-none"
              placeholder={placeholder || ""}
            />
          ) : (
            <input
              id={name}
              type="text"
              autoFocus={autoFocus}
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
              className="w-full p-4 bg-surface text-ink rounded-xl border border-hairline focus:outline-none focus:border-accent placeholder-faint text-base"
              placeholder={placeholder || ""}
            />
          )}
        </div>
      );

    case "info":
      return (
        <div className="bg-surface border border-hairline rounded-xl p-5">
          <p className="text-muted text-base leading-relaxed">{label}</p>
        </div>
      );

    default:
      return null;
  }
}