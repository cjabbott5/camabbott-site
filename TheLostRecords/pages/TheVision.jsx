import React from "react";
import Layout from "@/components/layout/Layout";

export default function TheVision() {
  return (
    <Layout title="The Vision" subtitle="Where this began—and where we’re going.">
      <div className="max-w-5xl mx-auto p-6 text-white">

        <section className="mb-6">
          <p className="text-lg mb-4">
            This is the soul of the project. It’s where personal narrative and systemic ambition meet. “The Vision” introduces the founder, frames the mission, and lays out the long-term goal: a mental healthcare system built around dignity, agency, and truth.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Subpages:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>About the Founder</strong>: Cam’s story—how lived experience with trauma, bipolar disorder, consulting, and queerness shaped this project. A personal but authoritative origin story.
            </li>
            <li>
              <strong>About the Future</strong>: Visionary direction. The dream of a restructured system, an empowered generation, and a collaborative rebuild. This is the policy pitch, the public health dream, and the long game.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Purpose:</h2>
          <p>
            To anchor the work in lived truth and strategic foresight. This section is about credibility and imagination—meant to inspire trust, collaboration, and investment. It invites readers to understand not just what we’re doing, but why we must.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">How it connects:</h2>
          <p>
            “The Vision” stands on the foundation built by “The Collection,” is made actionable by “The Build,” and is validated by “The Responses.” It is both invitation and blueprint—pointing forward with clarity and conviction.
          </p>
        </section>

      </div>
    </Layout>
  );
}
