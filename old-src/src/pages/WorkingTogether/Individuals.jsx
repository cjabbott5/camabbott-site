import React from "react";
import { FaBookOpen, FaHandsHelping, FaTools } from "react-icons/fa";

export default function Individuals() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section with Animated Gradient */}
      <section className="relative mt-4 mb-4 py-12 px-6">
        <div className="absolute inset-0 animate-slowPulse bg-gradient-to-r from-pink-500 to-pink-200 opacity-30 rounded-xl blur-md" />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold leading-tight text-black">
              Empowering You with <br /> Knowledge & Tools
            </h1>
          </div>
          <div className="hidden md:block border-l border-black h-24 self-center -ml-56" />
          <div className="md:w-1/2 pl-6">
            <p className="text-lg text-black leading-relaxed">
              Mental healthcare can feel disempowering, confusing, and even harmful. Whether you're
              navigating care for yourself or a loved one, I provide resources, guides, and advocacy
              tools to help you take control of your journey.
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
                href="/resources"
                className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-pink-400 transition"
              >
                Discover Resources
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-black text-black rounded-full font-semibold hover:bg-pink-100 transition"
              >
                Reach Out to Me
              </a>
            </div>
          </div>

          {/* Offerings as Horizontal Cards */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-start bg-zinc-50 p-6 rounded-xl shadow-md gap-6 transition-transform hover:scale-[1.01] hover:shadow-lg">
              <FaBookOpen className="text-3xl text-cherry-400 shrink-0 mt-4" />
              <div>
                <h3 className="text-lg font-bold text-zinc-800">Self-Advocacy Guides</h3>
                <p className="text-zinc-700">
                  Understanding your rights, navigating hospitalization, and crisis planning.
                  These guides equip you with the knowledge you need to advocate for yourself
                  in the mental healthcare system.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-start bg-zinc-50 p-6 rounded-xl shadow-md gap-6 transition-transform hover:scale-[1.01] hover:shadow-lg">
              <FaHandsHelping className="text-3xl text-cherry-400 shrink-0 mt-4" />
              <div>
                <h3 className="text-lg font-bold text-zinc-800">Support for Loved Ones</h3>
                <p className="text-zinc-700">
                  How to be there for someone with bipolar disorder, trauma, or complex mental
                  health needs. Learn practical ways to provide meaningful support and foster
                  understanding.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-start bg-zinc-50 p-6 rounded-xl shadow-md gap-6 transition-transform hover:scale-[1.01] hover:shadow-lg">
              <FaTools className="text-3xl text-cherry-400 shrink-0 mt-4" />
              <div>
                <h3 className="text-lg font-bold text-zinc-800">Practical Tools</h3>
                <p className="text-zinc-700">
                  Downloadable worksheets & frameworks for navigating the system. These
                  resources help simplify complex processes and give you actionable steps
                  to move forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
