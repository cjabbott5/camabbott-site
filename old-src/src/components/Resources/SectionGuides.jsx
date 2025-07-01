// src/components/Resources/SectionGuides.jsx
import React from "react";
import GuidesImage from "../../assets/Resources/resources-books.jpg";


export default function SectionGuides() {
  return (
    <section id="guides" className="py-20 px-6 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Mental Health Guides & Toolkits</h2>
            <p className="text-zinc-700 mt-2">
              Find practical, experience-based guides for navigating mental health challenges, including tools for managing
              symptoms, building resilience, and accessing support.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold">Symptom Management Toolkit</p>
              <p className="text-sm text-zinc-600">
                Printable worksheets and planning tools to help you prepare for hard days, communicate with providers, and
                stay grounded during emotional spirals.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md border border-pink-400 text-pink-600 hover:bg-pink-100 transition text-sm">
                View Toolkit
              </button>
            </div>

            <div>
              <p className="font-semibold">Safety Plan Template</p>
              <p className="text-sm text-zinc-600">
                A fillable document to help you identify your warning signs, coping strategies, emergency contacts, and
                safe environments when you’re in crisis.
              </p>
              <button className="mt-2 px-4 py-2 rounded-md border border-pink-400 text-pink-600 hover:bg-pink-100 transition text-sm">
                Download Plan
              </button>
            </div>

            <div>
              <p className="font-semibold">Mental Health Binder</p>
              <p className="text-sm text-zinc-600">
                A step-by-step guide to building your own mental health binder for appointments, records, medication logs,
                and self-reflection—all in one place.
              </p>
              <button className="mt-2 px-4 py-2 bg-pink-300 text-white rounded-md cursor-not-allowed text-sm">
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-96 bg-zinc-300 rounded-xl flex items-center justify-center text-zinc-600">
        <img src={GuidesImage} alt="Mental Health Guides" className="w-full h-full object-cover rounded-xl" />
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
