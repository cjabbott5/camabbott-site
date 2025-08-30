import React from "react";
import Layout from "@/components/layout/Layout";

export default function TheResponses() {
  return (
    <Layout title="The Records" subtitle="Where our stories become the data we need to demand change.">
      <div className="max-w-5xl mx-auto p-6 text-white">

        {/* Disclaimer */}
        <section className="mb-6 border-l-4 border-yellow-400 pl-4">
          <p className="text-yellow-300 italic">
            ⚠️ This section is currently in progress. We’re analyzing the first wave of responses, and updates will continue as more stories and data come in.
          </p>
        </section>

        {/* Intro */}
        <section className="mb-6">
          <p className="text-lg mb-4">
            In the meantime: This is where we connect the dots—and where your attention matters most.{" "}
            <strong>The Records</strong> is an open invitation: to explore, analyze, and understand what’s been shared.
            Here, we examine the patterns behind individual experiences—turning collective pain into usable evidence for change.
          </p>
          <p className="text-lg">
            What you’ll find in this section is grounded in your contributions. Every quote, every chart, every theme comes directly from the voices of those who’ve lived it.
          </p>
        </section>

        {/* Subpages */}
        <section className="mb-6">
          <h2 className="text-2xl text-sky-300 font-semibold mb-2">Explore the Records:</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Narratives</strong>: Thematic synthesis of lived experience. Quotes, stories, and reflections from{" "}
              <em>The Collection</em> are grouped by recurring themes—like loss of autonomy, harm in care, or pathways to healing.{" "}
              <span className="italic">This is where personal stories become collective insight.</span>
            </li>
            <li>
              <strong>By the Numbers</strong>: Survey results, visualized. Charts and summary metrics highlight patterns across settings, treatments, and outcomes.{" "}
              <span className="italic">This is where data helps us see the scale—and the stakes.</span>
            </li>
          </ul>
        </section>

        {/* Purpose */}
        <section className="mb-6">
          <h2 className="text-2xl text-sky-300 font-semibold mb-2">Why it matters:</h2>
          <p>
            This section gives weight to what’s been shared. These aren’t just stories or stats—they’re signals.
            <strong> The Records</strong> offers both analysis and accountability, helping decision-makers see what patients already know.
          </p>
        </section>

        {/* System Connections */}
        <section className="mb-6">
          <h2 className="text-2xl text-sky-300 font-semibold mb-2">How it connects:</h2>
          <p>
            <em>The Collection</em> fuels this section. <em>The Build</em> depends on what’s uncovered here.
            And <em>The Vision</em> draws its legitimacy from the clarity this section provides.{" "}
            This is the feedback loop that grounds the entire project in truth.
          </p>
        </section>

      </div>
    </Layout>
  );
}
