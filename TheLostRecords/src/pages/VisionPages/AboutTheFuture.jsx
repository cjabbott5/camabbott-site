import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

export default function AboutTheFuture() {
  return (
    <Layout title="About the Future" subtitle="A patient-led blueprint for rebuilding mental healthcare.">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">

        {/* HERO / TIMELINE PANEL */}
        <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black">
          {/* grid background (keep your existing if you already have it) */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(125,211,252,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.18) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70 pointer-events-none" />
          <div className="absolute -top-28 -left-28 w-80 h-80 bg-sky-300/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-sky-300/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 px-8 py-16">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold text-white">
                Rebuilding Mental Healthcare
              </h1>
              <p className="text-zinc-300 text-lg">
                Patient voices → Evidence → Policy change
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 relative">
              {/* connector line */}
              <div className="absolute left-0 right-0 top-6 h-px bg-zinc-700/80" />

              {/* sweeping highlight */}
              <div className="absolute left-0 right-0 top-6 h-px overflow-hidden">
                <div
                  className="h-px w-1/3 bg-sky-300/60"
                  style={{ animation: "lr-sweep 3.2s ease-in-out infinite" }}
                />
              </div>

              {/* nodes + cards */}
              <div className="grid md:grid-cols-2 gap-8 relative">
                {/* NOW */}
                <div className="relative pt-10">
                  {/* node */}
                  <div className="absolute top-4 left-6 flex items-center gap-3">
                    <div className="relative">
                      <div
                        className="w-3 h-3 rounded-full bg-sky-300"
                        style={{ animation: "lr-pulse 2.2s ease-in-out infinite" }}
                      />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-sky-300/30 blur-md" />
                    </div>
                    <span className="text-sky-300 font-semibold">Now</span>
                  </div>

                  <div className="bg-black/60 backdrop-blur border border-zinc-700 rounded-xl p-6 space-y-3">
                    <p className="text-zinc-200">
                      Build the public record: stories + stats that make patterns visible.
                    </p>
                    <ul className="text-zinc-400 text-sm list-disc pl-5 space-y-1">
                      <li>Anonymous submissions</li>
                      <li>Public archive with selective publishing controls</li>
                      <li>Dashboard showing harm, trust, and recovery trends</li>
                    </ul>
                  </div>
                </div>

                {/* NEXT */}
                <div className="relative pt-10">
                  {/* node */}
                  <div className="absolute top-4 left-6 flex items-center gap-3">
                    <div className="relative">
                      <div
                        className="w-3 h-3 rounded-full bg-sky-300"
                        style={{ animation: "lr-pulse 2.2s ease-in-out infinite", animationDelay: "0.4s" }}
                      />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-sky-300/30 blur-md" />
                    </div>
                    <span className="text-sky-300 font-semibold">Next</span>
                  </div>

                  <div className="bg-black/60 backdrop-blur border border-zinc-700 rounded-xl p-6 space-y-3">
                    <p className="text-zinc-200">
                      Turn the record into action: publishable research + a reform blueprint built from evidence.
                    </p>
                    <ul className="text-zinc-400 text-sm list-disc pl-5 space-y-1">
                      <li>Trauma-informed methodology aligned to public health standards</li>
                      <li>Public reports and policy briefs</li>
                      <li>Partnerships with advocates, researchers, and care teams</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/collection"
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded text-center w-full sm:w-auto"
              >
                Share Your Experience
              </Link>

              <Link
                to="/responses"
                className="border border-zinc-500 px-6 py-3 rounded text-center w-full sm:w-auto text-sky-300 hover:text-white"
              >
                Explore the Records
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT WE BELIEVE — 4 BOXES */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-sky-300">What We Believe</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-2">
              <h3 className="text-sky-300 font-semibold">Patient experience is clinical data.</h3>
              <p className="text-zinc-300 leading-relaxed">
                If someone leaves care traumatized, harmed, or afraid to seek help again, that outcome
                matters as much as a symptom score.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-2">
              <h3 className="text-sky-300 font-semibold">Transparency is safety.</h3>
              <p className="text-zinc-300 leading-relaxed">
                Patients deserve clear explanations, accessible rights information, and visibility into
                what is happening to them.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-2">
              <h3 className="text-sky-300 font-semibold">Coercion is not a treatment plan.</h3>
              <p className="text-zinc-300 leading-relaxed">
                The system must reduce the use of force and build alternatives that protect dignity.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-2">
              <h3 className="text-sky-300 font-semibold">Reform requires evidence.</h3>
              <p className="text-zinc-300 leading-relaxed">
                Stories move people. Data moves policy. We need both—together.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}