import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const principles = [
  {
    title: "Stories can change systems",
    text: "Patient experience isn't just personal — it's structural. Listen closely and the patterns that drive real change come into view.",
  },
  {
    title: "Data should be shared back",
    text: "When our experiences become data, we deserve clear, accessible ways to see it, question it, and act on it.",
  },
  {
    title: "There's no time to wait",
    text: "We can't wait for institutions to catch up. The work begins now — by and with the people who've lived it.",
  },
];

export default function AboutTheFounder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-5 py-12 text-ink">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-accent">
          About the Founder
        </h1>
        <p className="text-lg text-muted mt-2 mb-8">
          Lived experience meets systems strategy.
        </p>

        {/* Founder card */}
        <div className="bg-surface border border-hairline rounded-xl p-6 flex flex-col sm:flex-row gap-5 sm:items-center mb-10">
          {/*
            To use a photo: move your image into the /public folder (e.g.
            public/cam-profile.jpg) and replace this circle with:
            <img src="/cam-profile.jpg" alt="Cam Abbott" className="w-20 h-20 rounded-full object-cover ring-2 ring-accent shrink-0" />
          */}
          <div className="w-20 h-20 rounded-full bg-raised ring-2 ring-accent flex items-center justify-center text-2xl font-bold text-accent shrink-0">
            CA
          </div>
          <div>
            <p className="text-xl font-semibold text-ink">Cam Abbott</p>
            <p className="text-muted">
              Systems thinker, mental health advocate, and consultant.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-muted">
          <p>
            Cam brings both lived experience and strategic insight to some of the
            most urgent gaps in behavioral healthcare — having seen the system from
            the inside as a patient navigating psychiatric hospitalization, and as a
            professional trained to solve complex systems problems.
          </p>
          <p>
            After a deeply disorienting hospitalization, Cam began documenting what
            was happening — not just to themselves, but to others around them. A
            friend challenged Cam to treat the experience like a consulting project.
            That reframe became the turning point: survival turned into analysis,
            and analysis into vision.
          </p>
          <p>
            In that work, a striking pattern emerged. Some hospitals and mental
            health organizations were collecting patient-experience data — but never
            sharing it back with the people whose stories built it. The Lost Records
            exists to close that loop: when our experiences{" "}
            <em className="text-ink not-italic font-medium">are</em> the data, we
            deserve full transparency, and a say in what it's used for.
          </p>
        </div>

        {/* Principles as boxes */}
        <h2 className="text-xl font-semibold text-ink mt-12 mb-4">
          The principles behind the work
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {principles.map((p) => (
            <div
              key={p.title}
              className="bg-surface border border-hairline rounded-xl p-5"
            >
              <h3 className="text-accent font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <p className="mt-10 pt-6 border-t border-hairline text-muted">
          To learn more about Cam's background or connect directly, visit{" "}
          <a
            href="https://www.linkedin.com/in/camabbott"
            className="text-accent underline hover:text-accent-soft"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cam's LinkedIn
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}