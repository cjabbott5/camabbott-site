// src/pages/Tools.jsx
import React from "react";
import ResourceIndexCards from "../../components/Resources/ResourceIndexCards";
import SectionQueer from "../../components/Resources/SectionQueer";
import SectionMeds from "../../components/Resources/SectionMeds";
import SectionGuides from "../../components/Resources/SectionGuides";
import SectionNavigation from "../../components/Resources/SectionNavigation";
import SectionPeer from "../../components/Resources/SectionPeer";
import SectionCrisis from "../../components/Resources/SectionCrisis";

export default function Tools() {
  return (
    <main className="bg-white text-black scroll-smooth">
      {/* Intro Section */}
      <section className="bg-pink-500 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold">Resources:</h1>
            <p className="italic text-xl mt-2">Navigating Mental Healthcare Together</p>
          </div>
          <div className="md:w-1/2 h-48 md:h-64 bg-zinc-700 rounded-xl flex items-center justify-center text-sm text-zinc-300">
            [ Image Placeholder ]
          </div>
        </div>
      </section>

      {/* Body Text */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-zinc-700">
            Finding the right mental health resources can feel overwhelming, especially when the system itself is broken.
          </p>
          <p className="text-lg text-zinc-700">
            I’ve been there—I know what it’s like to search for help and come up short, to feel lost in medical jargon, or to struggle with accessing care that actually meets your needs. That’s why I put together this collection of resources.
          </p>
          <p className="text-lg text-zinc-700">
            I’ve done my best to make everything here accessible, practical, and relevant—whether you're looking for crisis support, tools to manage your mental health, or ways to advocate for yourself in psychiatric settings. Some sections are still evolving, and I’ll continue to add more as I find them. If there’s a resource you think should be here, feel free to <a href="/contact" className="text-pink-500 underline font-medium">reach out</a>.
          </p>
        </div>
      </section>

    {/* Anchor Navigation Cards */}
<ResourceIndexCards />

      {/* Resource Sections */}
      <SectionQueer />
      <SectionMeds />
      <SectionGuides />
      <SectionNavigation />
      <SectionPeer />
      <SectionCrisis />
    </main>
  );
}
