// src/components/survey/ProgressTracker.jsx
import React from 'react';

export default function ProgressTracker({ current, total, phaseLabel }) {
  // `current` is 0-based; show 1-based to people.
  const step = Math.min(current + 1, total);
  const pct = total > 0 ? Math.round((step / total) * 100) : 0;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted">
          {phaseLabel || `Step ${step} of ${total}`}
        </span>
        <span className="text-sm text-faint">{pct}%</span>
      </div>

      <div
        className="h-1.5 w-full rounded-full bg-hairline overflow-hidden"
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label="Survey progress"
      >
        <div
          className="h-full rounded-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}