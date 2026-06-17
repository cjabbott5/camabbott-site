import React from "react";
import { FaLightbulb, FaChalkboardTeacher, FaClipboardList } from "react-icons/fa";

export default function Organizations() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section with Animated Gradient */}
      <section className="relative mt-4 mb-4 py-12 px-6">
        <div className="absolute inset-0 animate-slowPulse bg-gradient-to-r from-pink-500 to-pink-200 opacity-30 rounded-xl blur-md" />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold leading-tight text-black">
              Redesigning Care Models <br /> for Impact & Accessibility
            </h1>
          </div>
          <div className="hidden md:block border-l border-black h-24 self-center -ml-56" />
          <div className="md:w-1/2 pl-6">
            <p className="text-lg text-black leading-relaxed">
              Hospitals, clinics, and mental health organizations struggle with patient trust,
              engagement, and retention. I help organizations design patient-centered, research-backed
              solutions that enhance outcomes, reduce staff burden, and build sustainable change.
            </p>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-16 px-6 bg-sky-100">
        <div className="max-w-6xl mx-auto">
          {/* Header + Buttons Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
            <h2 className="text-3xl text-cherry-400 font-bold">What I Am Building - </h2>
            <div className="flex gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-pink-400 transition"
              >
                Let’s build together
              </a>
            </div>
          </div>

          {/* Offerings as Horizontal Cards */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-start bg-zinc-50 p-6 rounded-xl shadow-md gap-6 transition-transform hover:scale-[1.01] hover:shadow-lg">
              <FaLightbulb className="text-3xl text-cherry-400 shrink-0 mt-4" />
              <div>
                <h3 className="text-lg font-bold text-zinc-800">Consulting & Strategy</h3>
                <p className="text-zinc-700">
                  Expert guidance on patient experience, accessibility, and process redesign to create
                  more effective, inclusive systems.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-start bg-zinc-50 p-6 rounded-xl shadow-md gap-6 transition-transform hover:scale-[1.01] hover:shadow-lg">
              <FaChalkboardTeacher className="text-3xl text-cherry-400 shrink-0 mt-4" />
              <div>
                <h3 className="text-lg font-bold text-zinc-800">Training & Education</h3>
                <p className="text-zinc-700">
                  Trauma-informed care workshops, staff well-being initiatives, and retention strategies
                  to support healthcare professionals and improve care delivery.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-start bg-zinc-50 p-6 rounded-xl shadow-md gap-6 transition-transform hover:scale-[1.01] hover:shadow-lg">
              <FaClipboardList className="text-3xl text-cherry-400 shrink-0 mt-4" />
              <div>
                <h3 className="text-lg font-bold text-zinc-800">Resources & Materials for Patient Education</h3>
                <p className="text-zinc-700">
                  Custom guides, interactive materials, and patient-friendly frameworks designed to
                  enhance understanding and engagement in care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
