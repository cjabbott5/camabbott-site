import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

export default function TheCollection() {
   return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4 text-sky-300">Contribute</h1>
        <p className="text-lg mb-2">
          This is where the record begins—with you.
        </p>
        <p className="text-lg mb-6">
          You’re helping build the proof we need to demand change, and finally be taken seriously.
        </p>

        <p className="text-lg font-semibold mb-2">
          The healthcare system controls the narrative.
        </p>
        <p className="text-lg mb-12 italic">
          We’re here to take it back.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-sky-300">Why It Matters</h2>
        <p className="mb-4">
          <strong>Patient records are not written with the patient in mind.</strong><br />
          They exist primarily to serve compliance, billing, and liability—not healing or accountability. Even when patients formally request their records, they’re often denied, delayed, or delivered in unusable formats. The result? Real experiences get buried in jargon, stripped of nuance, and rewritten to protect institutions.
        </p>
        <p className="mb-8">
          Here, we do things differently.<br />
          We document for each other.<br />
          We write what actually happened—clearly, honestly, and on our own terms.<br />
          This is how we reclaim the record and build something the system can’t ignore.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-sky-300">What You Can Share</h2>
        <p className="mb-4">
          We’re gathering stories, statistics, and insights—anything that helps map what’s really happening inside the system.
          You can contribute as often as you'd like to'.
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>A Story</strong> – A personal experience that shows what went wrong—and why it matters.</li>
          <li><strong>Your Stats</strong> – Short survey responses to help us quantify harm, gaps, and unmet needs.</li>
          <li><strong>Shared Insight</strong> – A reflection, realization, or idea about what needs to change.</li>
        </ul>
        <p className="mb-8">
          Each story should be <strong>under 500 words</strong> and include <strong>at least one relevant tag</strong> (e.g., "inpatient psych," "insurance denial," "racial bias").
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-sky-300">What We’re Building</h2>
        <p className="mb-4">
          This isn’t about venting. It’s about <strong>recordkeeping as resistance.</strong>
        </p>
        <p className="mb-4">
          Every contribution becomes part of a living archive—one we’ll use to:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>Analyze patterns</li>
          <li>Expose failures</li>
          <li>Design better systems</li>
          <li>Drive real policy change</li>
        </ul>
        <p className="mb-8">
          This is how we build power: not just through stories, but through evidence that demands a response.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-sky-300">Data Use Notice</h2>
        <p className="mb-8">
          All submissions are anonymous unless you choose to identify yourself.<br />
          We do <strong>not</strong> sell your data.<br />
          We do <strong>not</strong> profit from your pain.<br />
          Everything you share will be used for public education, systems analysis, and advocacy.<br />
          You are always in control of what and how much you share.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link to="/share-story" className="bg-black text-white px-6 py-3 rounded-md text-center">
            Share Your Story
          </Link>
          <Link to="/share-stats" className="border border-black bg-sky-300 text-black px-6 py-3 rounded-md text-center">
            Share Your Stats
          </Link>
        </div>
      </div>
    </Layout>
  );
}