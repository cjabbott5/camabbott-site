// src/components/Resources/SectionPeer.jsx
import React from "react";

export default function SectionPeer() {
  return (
    <section id="peer" className="py-20 px-6 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Peer Support & Community Spaces</h2>
            <p className="text-zinc-300 mt-2">
              Connect with others who’ve been there. These spaces offer peer-led support, community validation, and lived
              experience resources.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold">7 Cups</p>
              <p className="text-sm text-zinc-400">
                Free, anonymous chat with trained listeners and online community forums focused on mental health support.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition">
                Website
              </button>
            </div>

            <div>
              <p className="font-semibold">Reddit – r/mentalhealth</p>
              <p className="text-sm text-zinc-400">
                A moderated, peer-led forum for sharing experiences, asking questions, and offering support around all
                aspects of mental health.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition">
                Visit Subreddit
              </button>
            </div>

            <div>
              <p className="font-semibold">The Mighty</p>
              <p className="text-sm text-zinc-400">
                A community platform where people with mental illness and chronic conditions share personal stories,
                practical tips, and support one another.
              </p>
              <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded-md cursor-not-allowed text-sm">
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-96 bg-zinc-700 rounded-xl flex items-center justify-center text-zinc-300">
          [ Peer Support Image Placeholder ]
        </div>
      </div>
    </section>
  );
}
