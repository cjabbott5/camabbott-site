import React from "react";

export default function DataGridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* base dark wash */}
      <div className="absolute inset-0 bg-black" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,211,252,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          backgroundPosition: "center",
        }}
      />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* optional glow blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-sky-300/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-sky-300/10 blur-3xl rounded-full" />
    </div>
  );
}