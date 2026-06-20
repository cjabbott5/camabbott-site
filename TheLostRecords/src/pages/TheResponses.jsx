import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function TheResponses() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-5 py-12 text-ink">
        <div className="mb-8 rounded-xl border border-warn/40 bg-surface px-4 py-3">
          <p className="text-warn text-sm">
            This section is currently in progress. We're analyzing the first
            wave of responses, and updates will continue as more stories and
            data come in.
          </p>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-4">
          The Records
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-4">
          Where our stories become the data we need to demand change.
        </p>

        <p className="text-muted leading-relaxed mb-4">
          This is where we connect the dots — and where your attention matters
          most.{" "}
          <span className="font-semibold text-ink">The Records</span> is an
          open invitation: to explore, analyze, and understand what's been
          shared. Here, we examine the patterns behind individual experiences —
          turning collective pain into usable evidence for change.
        </p>
        <p className="text-muted leading-relaxed mb-10">
          What you'll find in this section is grounded in your contributions.
          Every quote, every chart, every theme comes directly from the voices
          of those who've lived it.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-accent mb-4">
            Explore the Records
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/responses/narratives"
              className="block bg-surface border border-hairline rounded-xl p-6 hover:border-accent transition hover:no-underline"
            >
              <h3 className="text-lg font-semibold text-ink mb-2">
                Narratives
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Thematic synthesis of lived experience. Quotes, stories, and
                reflections grouped by recurring themes — like loss of autonomy,
                harm in care, or pathways to healing.
              </p>
              <span className="inline-block mt-3 text-accent text-sm font-medium">
                Read stories →
              </span>
            </Link>
            <Link
              to="/responses/numbers"
              className="block bg-surface border border-hairline rounded-xl p-6 hover:border-accent transition hover:no-underline"
            >
              <h3 className="text-lg font-semibold text-ink mb-2">
                By the Numbers
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Survey results, visualized. Charts and summary metrics highlight
                patterns across settings, treatments, and outcomes.
              </p>
              <span className="inline-block mt-3 text-accent text-sm font-medium">
                See the data →
              </span>
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-accent mb-3">
            Why it matters
          </h2>
          <p className="text-muted leading-relaxed">
            This section gives weight to what's been shared. These aren't just
            stories or stats — they're signals.{" "}
            <span className="font-semibold text-ink">The Records</span> offers
            both analysis and accountability, helping decision-makers see what
            patients already know.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-accent mb-3">
            How it connects
          </h2>
          <p className="text-muted leading-relaxed">
            <Link to="/collection" className="text-accent hover:text-accent-soft">
              The Collection
            </Link>{" "}
            fuels this section.{" "}
            <Link to="/case" className="text-accent hover:text-accent-soft">
              The Case
            </Link>{" "}
            depends on what's uncovered here. And{" "}
            <Link to="/vision" className="text-accent hover:text-accent-soft">
              The Vision
            </Link>{" "}
            draws its legitimacy from the clarity this section provides. This is
            the feedback loop that grounds the entire project in truth.
          </p>
        </section>
      </div>
    </Layout>
  );
}
