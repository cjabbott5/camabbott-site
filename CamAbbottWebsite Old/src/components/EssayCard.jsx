import React from "react";
import { Link } from "react-router-dom";

export default function EssayCard({ image, title, summary, date, readTime, link }) {
  const content = (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-56 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700 mt-2 text-sm">{summary}</p>
      <p className="text-xs text-zinc-500 mt-4">Cam Abbott · {date} · {readTime} read</p>
    </div>
  );

  return link ? <Link to={link}>{content}</Link> : content;
}
