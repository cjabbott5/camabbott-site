import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

export default function TheCollection() {
  const whyItMattersCards = [
    {
      title: "Records aren’t written for patients",
      text: "They’re often designed for billing, compliance, and liability—not healing or accountability.",
    },
    {
      title: "Real experiences get erased",
      text: "Harm is buried in jargon, stripped of nuance, and rewritten to protect institutions.",
    },
    {
      title: "Change needs proof",
      text: "We’re building evidence that can’t be ignored—stories and data that point to patterns.",
    },
  ];

  const shareTiles = [
    {
      title: "A Story",
      subtitle: "Under 500 words",
      text: "A personal experience that shows what went wrong—and why it matters.",
      link: "/collection/story",
      cta: "Share Your Story",
    },
    {
      title: "Your Stats",
      subtitle: "Quick anonymous survey",
      text: "Short responses to help quantify harm, gaps, and unmet needs.",
      link: "/collection/stats",
      cta: "Share Your Stats",
    },
    {
      title: "Shared Insight",
      subtitle: "A reflection or pattern",
      text: "A realization, observation, or idea about what needs to change.",
      // If you don’t have this route yet, keep it null and it will render as a non-clickable tile.
      link: null,
      cta: "Coming Soon",
    },
  ];

  const buildingSteps = [
    "Analyze patterns",
    "Expose failures",
    "Design better systems",
    "Drive real policy change",
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 text-sky-300">Contribute</h1>
          <p className="text-lg text-zinc-200 mb-2">
            This is where the record begins—with you.
          </p>
          <p className="text-lg text-zinc-200 mb-8">
            You’re helping build the proof we need to demand change, and finally be taken seriously.
          </p>

          <div className="border-l-2 border-sky-300 pl-4 py-2 mb-10">
            <p className="text-lg font-semibold text-zinc-100">
              The healthcare system controls the narrative.
            </p>
            <p className="text-lg italic text-zinc-300">We’re here to take it back.</p>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              to="/collection/story"
              className="bg-black text-white px-6 py-3 rounded-md text-center border border-zinc-800 hover:border-zinc-600 transition"
            >
              Share Your Story
            </Link>
            <Link
              to="/collection/stats"
              className="border border-black bg-sky-300 text-black px-6 py-3 rounded-md text-center hover:opacity-90 transition"
            >
              Share Your Stats
            </Link>
          </div>
        </div>

        {/* Why It Matters */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-sky-300">Why It Matters</h2>

          <div className="grid sm:grid-cols-3 gap-6 mt-6">
            {whyItMattersCards.map((card) => (
              <div
                key={card.title}
                className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm"
              >
                <h3 className="text-sky-300 font-semibold mb-2">{card.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mt-10 bg-zinc-900 rounded-xl border border-zinc-800 p-6">
            <p className="text-zinc-200 leading-relaxed">
              <span className="font-semibold text-white">Here, we do things differently.</span> We document for each other.
              We write what actually happened—clearly, honestly, and on our own terms.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-3">
              This is how we reclaim the record and build something the system can’t ignore.
            </p>
          </div>
        </section>

        {/* What You Can Share */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-3 text-sky-300">What You Can Share</h2>
          <p className="text-zinc-300 max-w-3xl leading-relaxed">
            We’re gathering stories, statistics, and insights—anything that helps map what’s really happening inside the system.
            You can contribute as often as you’d like.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {shareTiles.map((tile) => {
              const content = (
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-zinc-600 transition">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{tile.title}</h3>
                      <p className="text-sm text-sky-300 italic">{tile.subtitle}</p>
                    </div>
                    <div className="text-xs text-zinc-400 border border-zinc-800 rounded-full px-3 py-1">
                      {tile.cta}
                    </div>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{tile.text}</p>
                </div>
              );

              if (!tile.link) return <div key={tile.title}>{content}</div>;

              return (
                <Link key={tile.title} to={tile.link} className="block">
                  {content}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 max-w-5xl bg-black/40 border border-zinc-800 rounded-xl p-6">
            <p className="text-zinc-300 leading-relaxed">
              If you share a story, keep it <span className="text-white font-semibold">under 500 words</span> and include{" "}
              <span className="text-white font-semibold">at least one relevant tag</span>{" "}
              (e.g., “inpatient psych,” “insurance denial,” “racial bias”).
            </p>
          </div>
        </section>

        {/* What We’re Building */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-sky-300">What We’re Building</h2>

          <div className="max-w-3xl">
            <p className="text-zinc-200 leading-relaxed mb-6">
              This isn’t about venting. It’s about <span className="text-white font-semibold">recordkeeping as resistance.</span>
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <p className="text-zinc-300 mb-6">Every contribution becomes part of a living archive—one we’ll use to:</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {buildingSteps.map((step, idx) => (
                <div
                  key={step}
                  className="bg-black/40 border border-zinc-800 rounded-lg p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-sky-300 text-black flex items-center justify-center font-bold mb-3">
                    {idx + 1}
                  </div>
                  <p className="text-zinc-200">{step}</p>
                </div>
              ))}
            </div>

            <p className="text-zinc-300 mt-8 max-w-3xl">
              This is how we build power: not just through stories, but through evidence that demands a response.
            </p>
          </div>
        </section>

        {/* Data Use Notice */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-sky-300">Data Use Notice</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 max-w-3xl">
            <ul className="space-y-3 text-zinc-300">
              <li>All submissions are anonymous unless you choose to identify yourself.</li>
              <li>
                We do <span className="text-white font-semibold">not</span> sell your data.
              </li>
              <li>
                We do <span className="text-white font-semibold">not</span> profit from your pain.
              </li>
              <li>Everything you share will be used for public education, systems analysis, and advocacy.</li>
              <li>You are always in control of what—and how much—you share.</li>
            </ul>
          </div>

          {/* Bottom CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/collection/story"
              className="bg-black text-white px-6 py-3 rounded-md text-center border border-zinc-800 hover:border-zinc-600 transition"
            >
              Share Your Story
            </Link>
            <Link
              to="/collection/stats"
              className="border border-black bg-sky-300 text-black px-6 py-3 rounded-md text-center hover:opacity-90 transition"
            >
              Share Your Stats
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}