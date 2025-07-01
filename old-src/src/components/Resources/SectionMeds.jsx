// src/components/Resources/SectionMeds.jsx
import React from "react";
import MedsImage from "../../assets/Resources/resources-meds.jpg";

export default function SectionMeds() {
  return (
    <section id="meds" className="py-20 px-6 bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 h-96 bg-zinc-300 rounded-xl flex items-center justify-center text-zinc-600">
        <img src={MedsImage} alt="Medication Support Resources" className="w-full h-full object-cover rounded-xl" />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Medication & Treatment Guides</h2>
            <p className="text-zinc-700 mt-2">
              Understand your treatment options, track medication effects, and learn about different therapy approaches to
              make informed choices about your care.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold">Medication Tracking Template</p>
              <p className="text-sm text-zinc-600">
                A customizable tool to help track medication schedules, dosage changes, side effects, and how medications
                impact mood and daily functioning.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md border border-pink-400 text-pink-600 hover:bg-pink-100 transition text-sm">
                Link to Template
              </button>
            </div>

            <div>
              <p className="font-semibold">Psych Meds 101</p>
              <p className="text-sm text-zinc-600">
                A straightforward guide explaining common psychiatric medications, their uses, potential side effects, and
                tips for self-advocacy when discussing medication with providers.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md border border-pink-400 text-pink-600 hover:bg-pink-100 transition text-sm">
                Download PDF
              </button>
            </div>

            <div>
              <p className="font-semibold">Therapy Approaches Guide</p>
              <p className="text-sm text-zinc-600">
                An overview of different types of therapy (e.g., CBT, DBT, psychodynamic, EMDR) with explanations of how they
                work, who they’re best suited for, and what to expect in sessions.
              </p>
              <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded-md cursor-not-allowed text-sm">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-right">
  <a href="#top" className="text-sm text-pink-400 hover:underline">
    ↑ Back to top
  </a>
</div>

    </section>
  );
}
