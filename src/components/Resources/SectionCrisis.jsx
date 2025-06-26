// src/components/Resources/SectionCrisis.jsx
import React from "react";

export default function SectionCrisis() {
  return (
    <section id="crisis" className="py-20 px-6 bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 h-96 bg-zinc-300 rounded-xl flex items-center justify-center text-zinc-600">
          [ Crisis Image Placeholder ]
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Crisis Support</h2>
            <p className="text-zinc-700 mt-2">
              If you're in crisis, you're not alone. These resources are designed to help you stay safe and get immediate
              support.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold">988 Suicide & Crisis Lifeline</p>
              <p className="text-sm text-zinc-600">
                Free, 24/7, confidential support for people in distress. Call or text 988 to connect with trained crisis
                counselors.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md bg-pink-500 text-white text-sm hover:bg-pink-600 transition">
                Call or Text 988
              </button>
            </div>

            <div>
              <p className="font-semibold">Crisis Text Line</p>
              <p className="text-sm text-zinc-600">
                Text HOME to 741741 to connect with a crisis counselor anytime, anywhere.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md bg-pink-500 text-white text-sm hover:bg-pink-600 transition">
                Text HOME
              </button>
            </div>

            <div>
              <p className="font-semibold">Create Your Crisis Plan</p>
              <p className="text-sm text-zinc-600">
                A fillable document for outlining emergency contacts, safe spaces, grounding tools, and steps to take when
                things feel overwhelming.
              </p>
              <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded-md cursor-not-allowed text-sm">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
