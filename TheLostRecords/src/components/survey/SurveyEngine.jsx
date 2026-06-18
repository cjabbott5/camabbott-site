// src/components/survey/SurveyEngine.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useSurveyStore } from './useSurveyStore';
import SurveyStep from './SurveyStep';
import ProgressTracker from './ProgressTracker';
import { patientSurveySchema } from '@/components/schemas/patientSurveySchema';
import {
  getVisibleSteps,
  getVisibleFields,
  buildLabelIndex,
  formatAnswer,
} from './surveyUtils';

export default function SurveyEngine() {
  // phase: 'survey' (answering steps) -> 'review' -> submit -> 'done'
  const [phase, setPhase] = useState('survey');
  const [index, setIndex] = useState(0);

  const {
    formData,
    resetSurvey,
    submitSurvey,
    status,
    result,
  } = useSurveyStore();

  // Recompute which steps are visible every render — this auto-skips steps whose
  // fields are all conditionally hidden, and adds branch steps as answers change.
  const visibleSteps = useMemo(
    () => getVisibleSteps(patientSurveySchema, formData),
    [formData]
  );
  const total = visibleSteps.length;

  // Keep the index in range if visibility shrank beneath us.
  const safeIndex = Math.min(index, Math.max(total - 1, 0));
  const currentStep = visibleSteps[safeIndex];
  const isLastStep = safeIndex >= total - 1;

  // Scroll to top whenever the visible step or phase changes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [safeIndex, phase]);

  // Consent gate: must affirmatively say yes to continue past the consent step.
  const consentBlocked =
    currentStep?.id === 'consent' && formData.consent !== 'yes';

  const goNext = () => {
    if (consentBlocked) return;
    if (isLastStep) setPhase('review');
    else setIndex(safeIndex + 1);
  };

  const goBack = () => {
    if (phase === 'review') {
      setPhase('survey');
      setIndex(total - 1);
    } else if (safeIndex > 0) {
      setIndex(safeIndex - 1);
    }
  };

  const handleExit = () => {
    const ok = window.confirm(
      'Exit the survey? Your answers on this device will be cleared.'
    );
    if (ok) {
      resetSurvey();
      window.location.href = '/';
    }
  };

  // ---- Success screen -------------------------------------------------------
  if (status === 'success' && result) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-ink mb-4">
          Your record has been added.
        </h2>
        <p className="text-muted leading-relaxed mb-8">
          Thank you for trusting us with your experience. It joins a growing body
          of evidence built by people the system overlooked — and it will be used
          only in aggregate, for research and advocacy.
        </p>

        {result.mode === 'local' && (
          <p className="text-xs text-faint mb-8">
            Preview mode: saved on this device. Connect a backend to collect
            responses centrally.
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/responses/numbers"
            className="bg-accent text-accent-ink font-semibold px-6 py-3 rounded-lg hover:bg-accent-soft transition"
          >
            See the data
          </a>
          <a
            href="/collection"
            className="border border-hairline text-ink px-6 py-3 rounded-lg hover:border-accent transition"
          >
            Back to Contribute
          </a>
        </div>
      </div>
    );
  }

  // ---- Review screen --------------------------------------------------------
  if (phase === 'review') {
    const labelIndex = buildLabelIndex(patientSurveySchema);

    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-ink mb-2">Review your responses</h2>
        <p className="text-muted mb-8">
          Take a look before you submit. Everything here is anonymous unless you
          chose to share contact details.
        </p>

        <div className="space-y-6">
          {visibleSteps.map((step) => {
            const fields = getVisibleFields(step, formData).filter((f) => {
              const v = formData[f.name];
              return formatAnswer(labelIndex[f.name], v) !== null;
            });
            if (fields.length === 0) return null;

            return (
              <div
                key={step.id}
                className="bg-surface border border-hairline rounded-xl p-5"
              >
                <h3 className="text-accent font-semibold mb-3">{step.title}</h3>
                <dl className="space-y-2">
                  {fields.map((f) => (
                    <div key={f.name}>
                      <dt className="text-sm text-faint">{f.label}</dt>
                      <dd className="text-ink">
                        {formatAnswer(labelIndex[f.name], formData[f.name])}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between">
          <button
            onClick={goBack}
            className="border border-hairline text-ink px-6 py-3 rounded-lg hover:border-accent transition"
          >
            Back to edit
          </button>
          <button
            onClick={submitSurvey}
            disabled={status === 'submitting'}
            className="bg-accent text-accent-ink font-semibold px-8 py-3 rounded-lg hover:bg-accent-soft disabled:opacity-60 transition"
          >
            {status === 'submitting' ? 'Submitting…' : 'Submit my record'}
          </button>
        </div>
      </div>
    );
  }

  // ---- Survey steps ---------------------------------------------------------
  if (!currentStep) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-muted">
        No questions to show.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <ProgressTracker current={safeIndex} total={total} />

      <SurveyStep step={currentStep} />

      {currentStep.id !== 'consent' && (
        <p className="mt-6 text-xs text-faint">
          Every question is optional — skip anything you'd rather not answer.
        </p>
      )}

      {consentBlocked && (
        <p className="mt-4 text-sm text-warn">
          Please select “Yes” to continue, or exit below.
        </p>
      )}

      <div className="mt-8 flex justify-between">
        {safeIndex > 0 ? (
          <button
            onClick={goBack}
            className="border border-hairline text-ink px-6 py-2 rounded-lg hover:border-accent transition"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        <button
          onClick={goNext}
          disabled={consentBlocked}
          className="bg-accent text-accent-ink font-semibold px-6 py-2 rounded-lg hover:bg-accent-soft disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          {isLastStep ? 'Review answers' : 'Next'}
        </button>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={handleExit}
          className="text-sm text-danger underline hover:opacity-80 transition"
        >
          Exit survey
        </button>
      </div>
    </div>
  );
}