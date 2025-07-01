import React from "react";
import Layout from "@/components/layout/Layout";

export default function TheResponses() {
  return (
    <Layout title="The Responses" subtitle="What the stories and stats reveal.">
      <div className="max-w-5xl mx-auto p-6 text-white">

        <section className="mb-6">
          <p className="text-lg mb-4">
            This is where insight begins. It’s not enough to collect data—we must make meaning from it. This section analyzes the stories and statistics we’ve gathered to identify recurring themes, patterns, and opportunities for systemic change.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Subpages:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Narratives</strong>: Thematic synthesis of lived experience. Includes quote clusters, short essays, and collective observations drawn from submissions in “The Collection.”
            </li>
            <li>
              <strong>Numbers</strong>: Data visualizations and summary reports. Charts, graphs, and metrics based on survey submissions and patient/provider contributions.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Purpose:</h2>
          <p>
            To give weight to what’s been shared. “The Responses” translates pain into patterns—something tangible enough for public health leaders, providers, and policymakers to act on. It is both analysis and accountability.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">How it connects:</h2>
          <p>
            “The Collection” fuels this section. “The Build” depends on what’s discovered here. And “The Vision” draws its legitimacy from the clarity this section provides. This is the feedback loop that grounds the entire project in truth.
          </p>
        </section>

      </div>
    </Layout>
  );
}
