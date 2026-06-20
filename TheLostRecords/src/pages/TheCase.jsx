import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const expectations = [
  "Quantitative + qualitative analysis of patient records",
  "Systemic patterns (restraint, ER boarding, neglect, etc.)",
  "Downloadable briefs and reform proposals",
  "Infographics and advocacy tools",
];

const actions = [
  { text: "Share your story or stats", link: "/collection" },
  { text: "Browse existing narratives", link: "/responses/narratives" },
];

export default function TheCase() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-5 py-12 text-ink">
        <h1 className="text-3xl sm:text-4xl font-bold text-accent mb-4">
          The Case
        </h1>
        <p className="text-lg text-muted mb-10">
          Together we are building the case for systemic reform.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-3">
            What to Expect
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            This page will evolve to house our data-driven insights, trend
            analyses, and policy recommendations — all built from the stories
            you've shared.
          </p>
          <ul className="space-y-2 text-muted list-disc pl-5">
            {expectations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-3">
            Why There's a Wait
          </h2>
          <p className="text-muted leading-relaxed">
            We are actively collecting records, organizing patterns, and
            analyzing stories. To protect the integrity of the data and ensure
            no voices are flattened or misrepresented, we're taking our time —
            about 3 to 6 months, depending on volume and capacity.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-3">
            What You Can Do in the Meantime
          </h2>
          <ul className="space-y-2 text-muted list-disc pl-5">
            {actions.map((item) => (
              <li key={item.link}>
                <Link
                  to={item.link}
                  className="text-accent hover:text-accent-soft"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>Send this project to someone who needs it</li>
            <li>Suggest what you want to see on this page</li>
          </ul>
        </section>

        <section className="rounded-xl border border-hairline bg-surface p-6">
          <h3 className="text-xl font-semibold text-ink mb-2">
            Get Notified When the Case Is Live
          </h3>
          <p className="text-sm text-muted mb-4">
            Leave your email and we'll let you know as soon as the analysis is
            released.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-4 py-2 rounded-lg bg-raised border border-hairline text-ink placeholder-faint focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-accent hover:bg-accent-soft text-accent-ink rounded-lg font-medium transition"
            >
              Notify Me
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}
