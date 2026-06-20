import React from "react";

export default function ProgressTracker({
  sectionIndex,
  sectionCount,
  sectionTrail = [],
}) {
  const total = Math.max(sectionCount, 1);
  const current = Math.min(sectionIndex + 1, total);
  const percent = Math.round((current / total) * 100);

  const currentSection = sectionTrail[sectionIndex]?.title || `Section ${current}`;
  const nextSection = sectionTrail[sectionIndex + 1]?.title || null;

  return (
    <div className="mb-8">
      <div className="flex items-end justify-between gap-4 mb-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-faint mb-1">
            Section {current} of {total}
          </p>
          <p className="text-sm font-semibold text-ink leading-tight">
            {currentSection}
          </p>
        </div>

        <p className="text-sm text-muted shrink-0">{percent}%</p>
      </div>

      <div
        className="h-2 w-full rounded-full bg-hairline overflow-hidden"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Survey progress: ${currentSection}`}
      >
        <div
          className="h-full rounded-full bg-accent transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="flex gap-1.5 mt-3">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={[
              "h-1 flex-1 rounded-full transition-colors duration-300",
              i <= sectionIndex ? "bg-accent" : "bg-hairline",
            ].join(" ")}
          />
        ))}
      </div>

      {nextSection && (
        <p className="mt-3 text-xs text-faint">
          Next: <span className="text-muted">{nextSection}</span>
        </p>
      )}
    </div>
  );
}