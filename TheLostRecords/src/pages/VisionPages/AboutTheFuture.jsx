import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const phases = [
  {
    tag: "Now",
    body: "Build the public record — stories and stats that make patterns visible.",
    points: [
      "Anonymous submissions",
      "A public archive with selective publishing controls",
      "A dashboard showing harm, trust, and recovery trends",
    ],
  },
  {
    tag: "Next",
    body: "Turn the record into action — publishable research and a reform blueprint built from evidence.",
    points: [
      "Trauma-informed methodology aligned to public-health standards",
      "Public reports and policy briefs",
      "Partnerships with advocates, researchers, and care teams",
    ],
  },
];

const beliefs = [
  {
    title: "Patient experience is clinical data.",
    text: "If someone leaves care traumatized, harmed, or afraid to seek help again, that outcome matters as much as a symptom score.",
  },
  {
    title: "Transparency is safety.",
    text: "People deserve clear explanations, accessible rights information, and visibility into what is happening to them.",
  },
  {
    title: "Coercion is not a treatment plan.",
    text: "The system needs to reduce the use of force and build alternatives that protect dignity.",
  },
  {
    title: "Reform requires evidence.",
    text: "Stories move people. Data moves policy. We need both — together.",
  },
];

const primaryBtn =
  "w-full sm:w-auto inline-flex justify-center bg-accent text-accent-ink font-semibold px-6 py-3 rounded-xl hover:bg-accent-soft transition";
const secondaryBtn =
  "w-full sm:w-auto inline-flex justify-center border border-hairline text-ink font-semibold px-6 py-3 rounded-xl hover:border-accent transition";

export default function AboutTheFuture() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-5 py-12 space-y-12 text-ink">
        {/* Header */}
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-accent">
            Rebuilding mental healthcare
          </h1>
          <p className="text-muted mt-2 text-lg">
            Patient voices → evidence → policy change.
          </p>
        </header>

        {/* Now / Next — stacks cleanly on mobile */}
        <section className="grid gap-4 sm:grid-cols-2">
          {phases.map((phase) => (
            <div
              key={phase.tag}
              className="bg-surface border border-hairline rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="text-accent font-semibold">{phase.tag}</span>
              </div>
              <p className="text-ink leading-relaxed mb-4">{phase.body}</p>
              <ul className="space-y-1.5 text-sm text-muted list-disc pl-5">
                {phase.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* What we believe */}
        <section>
          <h2 className="text-2xl font-semibold text-accent mb-5">
            What we believe
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {beliefs.map((b) => (
              <div
                key={b.title}
                className="bg-surface border border-hairline rounded-xl p-6"
              >
                <h3 className="text-ink font-semibold mb-2">{b.title}</h3>
                <p className="text-muted leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col sm:flex-row gap-3">
          <Link to="/collection" className={primaryBtn}>
            Share your experience
          </Link>
          <Link to="/responses" className={secondaryBtn}>
            Explore the records
          </Link>
        </section>
      </div>
    </Layout>
  );
}