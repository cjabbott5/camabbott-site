// src/pages/CollectionPages/ShareYourStats.jsx
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SurveyEngine from '@/components/survey/SurveyEngine';

export default function ShareYourStats() {
  const [hasStarted, setHasStarted] = useState(false);
  const [consented, setConsented] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-base text-ink px-4 py-12">
        {!hasStarted ? (
          <div className="max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl text-accent font-bold mb-6">Share Your Stats</h1>

            <p className="text-ink text-xl mb-4">
              We're building a collective picture of care — grounded in real experience.
            </p>

            <p className="text-muted text-lg mb-3">
              This survey is anonymous. We won't ask for your name, diagnosis, or
              anything sensitive. You can skip any question or stop at any time.
            </p>

            <p className="text-muted text-lg mb-3">
              Your responses will help power public dashboards, inform healthcare
              reform efforts, and push for more just, affirming care.
            </p>

            <p className="text-muted text-lg mb-6">
              You'll be asked about your experience with different types of care
              (like therapy or inpatient), how confident you feel navigating the
              system, and how your needs were or weren't met.
            </p>

            <label className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                checked={consented}
                onChange={(e) => setConsented(e.target.checked)}
                className="mt-1 w-5 h-5 accent-accent"
              />
              <span className="text-sm text-muted">
                I understand and consent to share my anonymous responses for research
                and advocacy purposes.
              </span>
            </label>

            <div className="flex justify-center">
              <button
                onClick={() => setHasStarted(true)}
                disabled={!consented}
                className="bg-accent text-accent-ink px-8 py-3 mt-2 text-lg font-semibold rounded-lg hover:bg-accent-soft disabled:opacity-40 disabled:cursor-not-allowed transition"
              >
                Begin survey
              </button>
            </div>

            <section className="bg-surface border border-hairline rounded-xl text-muted px-6 py-10 mt-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-ink mb-4">
                  Data Use &amp; Ethics
                </h2>
                <p className="text-base leading-relaxed mb-2">
                  We are committed to ethical data collection. All responses are
                  anonymous and will be reported only in aggregate.
                </p>
                <p className="text-base leading-relaxed mb-2">
                  This project exists to amplify real patient experiences and inform
                  public understanding of mental healthcare systems.
                </p>
                <p className="text-base leading-relaxed mb-2">
                  No identifying information is collected, and you may stop at any time.
                </p>
                <p className="text-base leading-relaxed">
                  Questions? Email{' '}
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