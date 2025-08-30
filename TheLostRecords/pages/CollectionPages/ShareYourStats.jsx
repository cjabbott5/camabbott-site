import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SurveyEngine from "@/components/survey/SurveyEngine";
import { patientSurveySchema } from "@/components/schemas/patientSurveySchema";

export default function ShareYourStats() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-neutral-900 text-white px-4 py-12">
        {!hasStarted ? (
          <div className="max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl text-sky-300 font-bold mb-6">Share Your Stats</h1>

            <p className="text-neutral-300 text-xl mb-4">
              We're building a collective picture of care — grounded in real experience.
            </p>

            <p className="text-neutral-400 text-lg text-base mb-3">
              This survey is anonymous. We won't ask for your name, diagnosis, or anything sensitive.
              You can skip any question or stop at any time.
            </p>

            <p className="text-neutral-400 text-lg text-base mb-3">
              Your voice matters. Your responses will help power public dashboards,
              inform healthcare reform efforts, and push for more just, affirming care.
            </p>

            <p className="text-neutral-400 text-lg text-base mb-6">
              You’ll be asked about your experience with different types of care
              (like therapy or inpatient), how confident you feel navigating the system,
              and how your needs were or weren’t met.
            </p>

            <label className="flex items-center space-x-2 mb-6">
  <input type="checkbox" required className="form-checkbox text-green-500" />
  <span className="text-sm text-neutral-300">
    I understand and consent to share my anonymous responses for research and advocacy purposes.*
  </span>
</label>


           <div className="flex justify-center">
          <button
          onClick={() => setHasStarted(true)}
         className="bg-white text-neutral-900 px-8 py-3 mt-4 text-lg font-semibold rounded-md hover:bg-sky-200 transition"
         >
        Begin Survey
           </button>
            </div>

            <section className="bg-neutral-800 text-neutral-200 px-6 py-12 mt-16">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-2xl font-semibold text-white mb-4">Data Use & Ethics</h2>
    <p className="text-base leading-relaxed text-neutral-300 mb-2">
      We are committed to ethical data collection. All responses are anonymous and will be reported only in aggregate.
    </p>
    <p className="text-base leading-relaxed text-neutral-300 mb-2">
      This project was created to amplify real patient experiences and inform public understanding of mental healthcare systems.
    </p>
    <p className="text-base leading-relaxed text-neutral-300 mb-2">
      No identifying information is collected, and you may stop at any time.
    </p>
    <p className="text-base leading-relaxed text-neutral-300">
      If you have questions, email <a href="mailto:camabbott5@gmail.com" className="text-sky-400 underline hover:text-sky-300">camabbott5@gmail.com</a>.
    </p>
  </div>
</section>

          </div>
        ) : (
          <SurveyEngine steps={patientSurveySchema} />
        )}
      </div>
    </Layout>
  );
}
