import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const pathways = [
  {
    title: "About the Founder",
    blurb: "Why this exists, and who's behind it.",
    link: "/vision/founder",
  },
  {
    title: "About the Future",
    blurb: "Where this is going — from a public record to real reform.",
    link: "/vision/future",
  },
];

const principles = ["Dignity", "Agency", "Truth"];

export default function TheVision() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-5 py-12 text-ink">
        <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-4">
          The Vision
        </h1>

        <p className="text-base sm:text-lg text-muted leading-relaxed">
          We're working toward a mental health system built around dignity,
          agency, and truth — one where what happens to people in care is
          visible, and where lived experience counts as evidence.
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {principles.map((p) => (
            <span
              key={p}
              className="bg-raised border border-hairline text-muted rounded-full px-4 py-1.5 text-sm"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {pathways.map((p) => (
            <Link
              key={p.link}
              to={p.link}
              className="block bg-surface border border-hairline rounded-xl p-6 hover:border-accent transition"
            >
              <h2 className="text-lg font-semibold text-ink mb-1">{p.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{p.blurb}</p>
              <span className="inline-block mt-4 text-accent text-sm font-medium">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-ember pl-4 py-1">
          <p className="text-ink text-lg leading-relaxed">
            This isn't only a critique of what's broken. It's an invitation to
            build the alternative — together.
          </p>
        </div>
      </div>
    </Layout>
  );
}