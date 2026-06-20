import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SurveyEngine from "@/components/survey/SurveyEngine";

export default function ShareYourStats() {
  const [hasStarted, setHasStarted] = useState(false);
  const [consented, setConsented] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-base text-ink px-4 py-6 sm:py-10">
        {!hasStarted ? (
          <div className="max-w-xl mx-auto">
            <div className="pt-6 pb-8">
              <p className="text-xs uppercase tracking-[0.28em] text-muted mb-4">
                Anonymous care survey
              </p>

              <h1 className="text-4xl sm:text-4xl text-accent font-bold leading-[0.95] mb-5">
                Share Your Stats
              </h1>

              <p className="text-ink text-xl leading-snug mb-5">
                Help build a clearer picture of mental health care — what helped,
                what harmed, and what systems fail to measure.
              </p>

              <div className="space-y-3 text-muted text-base leading-relaxed">
                <p>
                  This survey is anonymous. We will not ask for your name. Most
                  questions are optional, and you can skip anything or stop at any
                  time.
                </p>

                <p>
                  Your responses may be used in aggregate for public dashboards,
                  research-informed advocacy, and policy reform.
                </p>
              </div>
            </div>

            <div className="bg-surface/70 border border-hairline rounded-2xl p-5 mb-5">
              <h2 className="text-ink font-semibold text-lg mb-3">
                What to expect
              </h2>

              <div className="grid grid-cols-1 gap-3 text-sm text-muted leading-relaxed">
                <div className="flex gap-3">
                  <span className="text-accent">01</span>
                  <p>Choose one care experience to focus on.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent">02</span>
                  <p>Answer neutral care-quality and safety questions.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent">03</span>
                  <p>Review your answers before submitting your record.</p>
                </div>
              </div>
            </div>

            <label className="flex items-start gap-3 bg-base border border-hairline rounded-2xl p-4 mb-5">
              <input
                type="checkbox"
                checked={consented}
                onChange={(e) => setConsented(e.target.checked)}
                className="mt-1 w-5 h-5 accent-accent shrink-0"
              />
              <span className="text-sm text-muted leading-relaxed">
                I understand and consent to share my anonymous responses for
                research, public education, and advocacy purposes.
              </span>
            </label>

            <button
              onClick={() => setHasStarted(true)}
              disabled={!consented}
              className="w-full bg-accent text-accent-ink px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-accent-soft disabled:opacity-40 disabled:cursor-not-allowed transition min-h-[56px]"
            >
              Begin survey
            </button>

            <section className="border-t border-hairline mt-10 pt-6 pb-10">
              <h2 className="text-lg font-semibold text-ink mb-3">
                Data Use &amp; Ethics
              </h2>

              <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>
                  Responses are reported only in aggregate. Contact information,
                  if shared, is used only for the updates or follow-up you choose.
                </p>

                <p>
                  This project exists to document patient-reported experiences
                  that mental healthcare systems often fail to collect or report.
                </p>

                <p>
                  Questions? Email{" "}
                  <a
                    href="mailto:camabbott5@gmail.com"
                    className="text-accent underline hover:text-accent-soft"
                  >
                    camabbott5@gmail.com
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        ) : (
          <SurveyEngine />
        )}
      </div>
    </Layout>
  );
}