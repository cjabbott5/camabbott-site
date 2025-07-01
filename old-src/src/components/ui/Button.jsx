import React from "react";
import clsx from "clsx";

export default function Button({ children, variant = "default", size = "md", className, ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-black text-white hover:bg-zinc-800",
    outline: "border border-gray-300 text-black hover:bg-gray-100",
    ghost: "text-black hover:bg-gray-100",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
