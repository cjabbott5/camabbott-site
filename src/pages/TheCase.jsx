import React from "react";
import Layout from "@/components/layout/Layout";

export default function TheCase() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12 text-sky-300">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-4">The Case</h1>
        <p className="text-md mb-8">
         Together we are building the case for systemic reform.
        </p>

        {/* What to Expect */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">What to Expect</h2>
          <p className="text-base text-gray-300 mb-4">
            This page will evolve to house our data-driven insights, trend analyses, and
            policy recommendations—all built from the stories you’ve shared.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Quantitative + qualitative analysis of patient records</li>
            <li>Systemic patterns (restraint, ER boarding, neglect, etc.)</li>
            <li>Downloadable briefs and reform proposals</li>
            <li>Infographics and advocacy tools</li>
          </ul>
        </section>

        {/* Why There’s a Wait */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Why There’s a Wait</h2>
          <p className="text-base text-gray-300">
            We are actively collecting records, organizing patterns, and analyzing stories.
            To protect the integrity of the data and ensure no voices are flattened or misrepresented,
            we’re taking our time—about 3 to 6 months, depending on volume and capacity.
          </p>
        </section>

        {/* What You Can Do in the Meantime */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">What You Can Do in the Meantime</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <a href="/contribute" className="underline hover:text-blue-400">
                Share your story or stats
              </a>
            </li>
            <li>
              <a href="/therecords" className="underline hover:text-blue-400">
                Browse existing narratives
              </a>
            </li>
            <li>Send this project to someone who needs it</li>
            <li>Suggest what you want to see on this page</li>
          </ul>
        </section>

        {/* Optional Email Signup */}
        <section className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Get Notified When the Case Is Live</h3>
          <p className="text-sm text-gray-400 mb-4">
            Leave your email and we’ll let you know as soon as the analysis is released.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium"
            >
              Notify Me
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}