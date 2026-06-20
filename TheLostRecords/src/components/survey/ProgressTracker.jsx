// src/components/survey/ProgressTracker.jsx
import React from "react";

// Section-based progress. Showing "section 4 of 11" is far less anxiety-inducing
// than "question 27 of 43" for a long, sensitive survey.
export default function ProgressTracker({ sectionIndex, sectionCount }) {
  const total = Math.max(sectionCount, 1);
  const current = Math.min(sectionIndex + 1, total);

  return (
    <div className="mb-8">
      <div className="flex gap-1.5" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total} aria-label="Survey progress">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={[
              "h-1.5 flex-1 rounded-full transition-colors duration-300",
              i <= sectionIndex ? "bg-accent" : "bg-hairline",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}