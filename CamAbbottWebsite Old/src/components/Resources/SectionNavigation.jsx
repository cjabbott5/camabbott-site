// src/components/Resources/SectionNavigation.jsx
import React from "react";
import AutonomyImage from "../../assets/Resources/resources-autonomy.jpg";


export default function SectionNavigation() {
  return (
    <section id="navigation" className="py-20 px-6 bg-white border-t border-zinc-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 h-96 bg-zinc-300 rounded-xl flex items-center justify-center text-zinc-600">
        <img src={AutonomyImage} alt="Healthcare Navigation & Autonomy" className="w-full h-full object-cover rounded-xl" />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Self-Advocacy & System Navigation</h2>
            <p className="text-zinc-700 mt-2">
              Learn how to navigate the mental health system, understand your rights, and advocate for yourself in
              psychiatric and medical settings.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold">Patient Rights Overview</p>
              <p className="text-sm text-zinc-600">
                A plain-language guide to your rights as a mental health patient, including consent, discharge planning,
                and refusing treatment.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md border border-pink-400 text-pink-600 hover:bg-pink-100 transition text-sm">
                Download PDF
              </button>
            </div>

            <div>
              <p className="font-semibold">Hospital Discharge Checklist</p>
              <p className="text-sm text-zinc-600">
                A checklist and reflection guide for leaving inpatient or PHP care—know what to ask for and how to advocate
                for your next steps.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md border border-pink-400 text-pink-600 hover:bg-pink-100 transition text-sm">
                View Checklist
              </button>
            </div>

            <div>
              <p className="font-semibold">Advocacy Scripts</p>
              <p className="text-sm text-zinc-600">
                Pre-written phrases and scripts you can adapt when talking with doctors, case managers, or insurance—so you
                can focus on what matters, not finding the right words in a crisis.
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
