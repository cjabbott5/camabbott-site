import React, { useState } from "react";
import { useSurveyStore } from "./useSurveyStore";
import SurveyStep from "./SurveyStep";
import {
  patientSurveySchema,
  generateSettingFollowUps
} from "@/components/schemas/patientSurveySchema";

const FINAL_STEP_ID = "confirm-submit";


export default function SurveyEngine() {
  const [currentStep, setCurrentStep] = useState(0);
  const [dynamicSteps, setDynamicSteps] = useState([]);
  const [injected, setInjected] = useState(false);

 const { submitSurvey, formData: answers, resetSurvey } = useSurveyStore();


  const demographicsStep = patientSurveySchema.find(s => s.id === "demographics");
  const mainSteps = patientSurveySchema.filter(s => s.id !== "demographics");

  const allSteps = [...mainSteps, ...dynamicSteps];

  const currentIsLast = currentStep === allSteps.length;
  const isConfirmationStep = currentStep === allSteps.length;

  const handleNext = () => {
    const currentId = allSteps[currentStep]?.id;

  if (currentId === "settings-used" && !injected) {
 const selectedSettings = (answers?.careSettings || []).map(setting =>
  typeof setting === "string" ? setting : setting.value
);
  const followUps = generateSettingFollowUps(selectedSettings);
  setDynamicSteps([...followUps, demographicsStep]);
  setInjected(true);
  return; // ⛔ don't advance immediately
}

    if (!currentIsLast) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Here is where Firebase would go
      alert("Submission confirmed! (Pretend we saved it.)");
      console.log("Final answers:", answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {isConfirmationStep ? (
        <ConfirmSubmission answers={answers} />
      ) : (
        <SurveyStep step={allSteps[currentStep]} />
      )}

      <div className="mt-10 flex justify-between">
        {currentStep > 0 ? (
          <button
            onClick={handleBack}
            className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Back
          </button>
        ) : <div />}

        <button
          onClick={handleNext}
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
        >
          {isConfirmationStep ? "Confirm & Submit" : currentIsLast ? "Review Answers" : "Next"}
        </button>
      </div>

      <div className="mt-8 text-center">
       <button
  onClick={() => {
    const confirmExit = window.confirm("Are you sure you want to exit?");
    if (confirmExit) {
      resetSurvey(); // 🧹 clear answers
      window.location.href = "/";
    }
  }}
  className="text-sm text-red-400 underline hover:text-red-300 transition"
>
  Exit Survey
</button>
      </div>
    </div>
  );
}

function ConfirmSubmission({ answers }) {
  if (!answers || typeof answers !== "object") {
    return <p className="text-white">No answers available to review.</p>;
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-6">Confirm Your Responses</h2>
      <div className="space-y-4">
        {Object.entries(answers).map(([key, val]) => (
          <div key={key}>
            <p className="font-semibold">{key}</p>
            <p className="text-neutral-300">
              {Array.isArray(val) ? val.join(", ") : val?.toString() || "N/A"}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-neutral-400">
        Please review your responses before submitting. This data is anonymous and final.
      </p>
    </div>
  );
}
