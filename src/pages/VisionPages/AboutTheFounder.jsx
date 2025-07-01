import React from "react";
import Layout from "@/components/layout/Layout";

export default function AboutTheFounder() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 space-y-6 text-lg text-zinc-100">

        {/* Title and subtitle directly rendered here */}
        <div className="text-left mb-8">
          <h1 className="text-4xl text-sky-300 font-bold">About the Founder</h1>
          <p className="text-xl text-zinc-400 mt-2">
            Lived experience meets systems strategy.
          </p>
        </div>

        <p>
          <strong className="text-sky-300">Cam Abbott</strong> is a systems thinker, mental health advocate, and consultant who brings lived experience and strategic insight to some of the most urgent gaps in behavioral healthcare.
        </p>

        <p>
          Cam has experienced the mental health system from the inside—as a patient navigating psychiatric hospitalization and as a professional trained to solve complex systems problems. After a deeply disorienting hospitalization, they began documenting what was happening—not just to themselves, but to others around them. A friend challenged Cam to treat the experience like a consulting project. That moment sparked a shift: survival turned into analysis, and analysis into vision.
        </p>

        <p>
          In their research, Cam uncovered a striking pattern: some hospitals and mental health organizations were collecting patient experience data—but not sharing it back with the very people whose stories built that data in the first place. They saw an opportunity to close that loop. Cam believes patients deserve full transparency when their experiences <em>are</em> the data. This work is about restoring power to the people most impacted: the patients and providers who know we deserve better.
        </p>

        <div>
          <h2 className="text-xl font-semibold mt-8 mb-4">Cam’s work is grounded in a few simple principles:</h2>
          <ul className="list-disc list-inside space-y-2 marker:text-sky-300">
            <li>
              <strong className="text-sky-300">Stories Can Change Systems:</strong> Patient experience isn’t just personal—it’s structural. When we listen closely, we uncover the patterns that drive real change.
            </li>
            <li>
              <strong className="text-sky-300">Data Should Be Transparent and Shared:</strong> When our experiences become data, we deserve clear, accessible pathways to see it, question it, and act on it.
            </li>
            <li>
              <strong className="text-sky-300">There’s No Time to Wait:</strong> We can’t afford to wait for institutions to catch up. The work begins now—by and with the people who’ve lived it.
            </li>
          </ul>
        </div>

        <p className="pt-6 border-t border-zinc-700">
          <em>To learn more about Cam’s background or connect directly, visit </em>
          <a
            href="https://www.linkedin.com/in/cam-abbott"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cam’s LinkedIn.
          </a>
        </p>
      </div>
    </Layout>
  );
}
