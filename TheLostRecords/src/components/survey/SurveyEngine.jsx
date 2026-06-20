// src/components/survey/SurveyEngine.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useSurveyStore } from "./useSurveyStore";
import FieldRenderer from "./FieldRenderer";
import ProgressTracker from "./ProgressTracker";
import {
  patientSurveySchema,
  SURVEY_SCHEMA_VERSION,
} from "@/components/schemas/patientSurveySchema";
import {
  buildVisibleQuestions,
  getSectionTrail,
  getVisibleSteps,
  getVisibleFields,
  buildLabelIndex,
  formatAnswer,
} from "./surveyUtils";

const CONTACT_EMAIL = "hello@thelostrecords.org";
const AUTO_ADVANCE_MS = 260;
const SKIPPED_VALUE = "__skipped__";

export default function SurveyEngine() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState("survey");
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const { formData, setField, resetSurvey, submitSurvey, status, result } =
    useSurveyStore();

  useEffect(() => {
    if (!formData?._schemaVersion) {
      setField("_schemaVersion", SURVEY_SCHEMA_VERSION);
    }
  }, [formData?._schemaVersion, setField]);

  const questions = useMemo(
    () => buildVisibleQuestions(patientSurveySchema, formData),
    [formData]
  );

  const total = questions.length;
  const safeIndex = Math.min(index, Math.max(total - 1, 0));
  const current = questions[safeIndex];
  const isLast = safeIndex >= total - 1;

  const sectionTrail = getSectionTrail(questions);
const sectionCount = sectionTrail.length;
  const sectionIndex = useMemo(() => {
    const seen = new Set();
    for (let i = 0; i <= safeIndex; i++) {
      const q = questions[i];
      if (q && q.kind !== "breath") seen.add(q.stepId);
    }
    return Math.max(seen.size - 1, 0);
  }, [questions, safeIndex]);

  const goNextRef = useRef(() => {});
  const advanceTimer = useRef(null);

  const clearAdvance = () => {
    if (advanceTimer.current) {
      clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  };

  useEffect(() => () => clearAdvance(), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [safeIndex, phase, reduce]);

  const goNext = () => {
    clearAdvance();
    setDir(1);
    if (isLast) setPhase("review");
    else setIndex(safeIndex + 1);
  };

  goNextRef.current = goNext;

  const goBack = () => {
    clearAdvance();
    setDir(-1);

    if (phase === "review") {
      setPhase("survey");
      setIndex(total - 1);
    } else if (safeIndex > 0) {
      setIndex(safeIndex - 1);
    }
  };

  const handleExit = () => {
    const ok = window.confirm(
      "Leave the survey? Your answers on this device will be cleared."
    );

    if (ok) {
      resetSurvey();
      window.location.href = "/";
    }
  };

  const handleAnswer = (field, value) => {
    setField(field.name, value);

    if (field.type === "radio") {
      clearAdvance();
      advanceTimer.current = setTimeout(
        () => goNextRef.current(),
        reduce ? 0 : AUTO_ADVANCE_MS
      );
    }
  };

  const handleSkip = () => {
    if (current?.kind === "question" && current.field?.name) {
      setField(current.field.name, SKIPPED_VALUE);
    }
    goNext();
  };

  // ── Success ────────────────────────────────────────────────────────────────
  if (status === "success" && result) {
    return (
      <Screen>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-4">
            Your record has been added.
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Thank you for trusting us with your experience. It joins a growing
            body of evidence built by people the system overlooked — and it will
            be used only in aggregate, for research and advocacy.
          </p>

          {result.mode === "local" && (
            <p className="text-xs text-faint mb-8">
              Preview mode: saved on this device only.
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/responses/numbers"
              className="bg-accent text-accent-ink font-semibold px-6 py-3 rounded-xl hover:bg-accent-soft transition"
            >
              See the data
            </a>
            <a
              href="/collection"
              className="border border-hairline text-ink px-6 py-3 rounded-xl hover:border-accent transition"
            >
              Back to Contribute
            </a>
          </div>
        </div>
      </Screen>
    );
  }

  // ── Review ────────────────────────────────────────────────────────────────
  if (phase === "review") {
    const labelIndex = buildLabelIndex(patientSurveySchema);
    const steps = getVisibleSteps(patientSurveySchema, formData);

    return (
      <div className="max-w-xl mx-auto px-5 py-10">
        <h2 className="text-2xl font-bold text-ink mb-2">
          Review your responses
        </h2>
        <p className="text-muted mb-8 leading-relaxed">
          Take a look before you submit. Everything here is anonymous unless you
          chose to share contact details.
        </p>

        <div className="space-y-6">
          {steps.map((step) => {
            const fields = getVisibleFields(step, formData).filter((f) => {
              if (f.type === "breath" || f.type === "info") return false;
              return formatAnswer(labelIndex[f.name], formData[f.name]) !== null;
            });

            if (fields.length === 0) return null;

            return (
              <div
                key={step.id}
                className="bg-surface border border-hairline rounded-xl p-5"
              >
                {step.title && (
                  <h3 className="text-accent font-semibold mb-3">
                    {step.title}
                  </h3>
                )}

                <dl className="space-y-3">
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
            className="border border-hairline text-ink px-6 py-3 rounded-xl hover:border-accent transition"
          >
            Back to edit
          </button>

          <button
            onClick={submitSurvey}
            disabled={status === "submitting"}
            className="bg-accent text-accent-ink font-semibold px-8 py-3 rounded-xl hover:bg-accent-soft disabled:opacity-60 transition"
          >
            {status === "submitting" ? "Submitting…" : "Submit my record"}
          </button>
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <Screen>
        <p className="text-muted">No questions to show.</p>
      </Screen>
    );
  }

  const variants = reduce
    ? { enter: { opacity: 1 }, center: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        enter: (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
        center: { opacity: 1, x: 0 },
        exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
      };

  const isConsent = current.stepId === "consent";
  const isQuestion = current.kind === "question";
  const field = current.field;
  const showContinue =
    !isConsent && isQuestion && field?.type !== "radio";
  const showSkip =
    !isConsent && isQuestion && field?.optional === true;

  return (
    <Screen>
      <ProgressTracker
  sectionIndex={sectionIndex}
  sectionCount={sectionCount}
  sectionTrail={sectionTrail}
/>

      <div className="flex-1 flex items-center">
        <div className="w-full">
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.div
              key={current.key}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: reduce ? 0 : 0.22, ease: "easeOut" }}
            >
              {current.kind === "breath" ? (
                <BreathScreen copy={current.copy} />
              ) : isConsent ? (
                <ConsentScreen
                  field={field}
                  value={formData.consent}
                  onChoose={(v) => {
                    setField("consent", v);
                    if (v === "yes") goNext();
                  }}
                  onContinueAnyway={goNext}
                  onLeave={handleExit}
                  contactEmail={CONTACT_EMAIL}
                />
              ) : (
                <>
                  {current.intro && (
                    <p className="text-muted leading-relaxed mb-6">
                      {current.intro}
                    </p>
                  )}

                  <FieldRenderer
                    field={field}
                    value={formData[field.name]}
                    onChange={(val) => handleAnswer(field, val)}
                    formValues={formData}
                    autoFocus={false}
                  />

                  {showSkip && (
                    <p className="mt-6 text-xs text-faint">
                      Optional — you can answer, skip, or stop at any time.
                    </p>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="pt-6 flex items-center justify-between gap-4">
        {safeIndex > 0 ? (
          <button
            onClick={goBack}
            className="text-ink/80 px-2 py-2 hover:text-ink transition min-h-[44px]"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        {!isConsent && (
          <div className="flex items-center gap-3">
            {showSkip && (
              <button
                onClick={handleSkip}
                className="text-muted px-3 py-3 rounded-xl hover:text-ink transition min-h-[44px]"
              >
                Skip
              </button>
            )}

            {(showContinue || current.kind === "breath") && (
              <button
                onClick={goNext}
                className="bg-accent text-accent-ink font-semibold px-7 py-3 rounded-xl hover:bg-accent-soft transition min-h-[52px]"
              >
                {isLast ? "Review answers" : "Continue"}
              </button>
            )}
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleExit}
          className="text-sm text-faint underline hover:text-muted transition"
        >
          Exit survey
        </button>
      </div>
    </Screen>
  );
}

function Screen({ children }) {
  return (
    <div className="min-h-[100dvh] max-w-xl mx-auto px-5 py-8 flex flex-col">
      {children}
    </div>
  );
}

function BreathScreen({ copy }) {
  return (
    <div className="text-center py-10">
      <p className="text-xl text-ink leading-relaxed max-w-md mx-auto">{copy}</p>
    </div>
  );
}

function ConsentScreen({
  field,
  value,
  onChoose,
  onContinueAnyway,
  onLeave,
  contactEmail,
}) {
  return (
    <div>
      <fieldset>
        <legend className="block text-ink font-semibold mb-5 text-xl leading-snug">
          {field.label}
        </legend>

        <div className="space-y-3">
          {field.options.map((opt) => {
            const selected = value === opt.value;

            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChoose(opt.value)}
                aria-pressed={selected}
                className={[
                  "w-full text-left px-5 py-4 rounded-xl border text-base transition min-h-[56px] flex items-center",
                  selected
                    ? "border-accent bg-accent-soft text-ink"
                    : "border-hairline bg-surface text-ink hover:border-accent",
                ].join(" ")}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {value === "no" && (
        <Panel>
          <p className="text-muted leading-relaxed mb-4">
            That's alright — this isn't for everyone, and there's no pressure.
            You can reach out anytime at{" "}
            <a href={`mailto:${contactEmail}`} className="text-accent underline">
              {contactEmail}
            </a>
            .
          </p>

          <button
            onClick={onLeave}
            className="border border-hairline text-ink px-5 py-2.5 rounded-xl hover:border-accent transition"
          >
            Leave for now
          </button>
        </Panel>
      )}

      {value === "unsure" && (
        <Panel>
          <ul className="text-muted leading-relaxed space-y-2 mb-5 list-disc pl-5">
            <li>Anonymous — we never ask your name.</li>
            <li>Most questions are optional and can be skipped.</li>
            <li>Results are reported only in aggregate.</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onContinueAnyway}
              className="bg-accent text-accent-ink font-semibold px-6 py-3 rounded-xl hover:bg-accent-soft transition"
            >
              I feel okay to continue
            </button>

            <button
              onClick={onLeave}
              className="border border-hairline text-ink px-6 py-3 rounded-xl hover:border-accent transition"
            >
              Not right now
            </button>
          </div>
        </Panel>
      )}
    </div>
  );
}

function Panel({ children }) {
  return (
    <div className="mt-6 bg-surface border border-hairline rounded-xl p-5">
      {children}
    </div>
  );
}