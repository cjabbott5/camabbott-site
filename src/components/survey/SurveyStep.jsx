import React from "react";
import FieldRenderer from "./FieldRenderer";
import { useSurveyStore } from "./useSurveyStore";

export default function SurveyStep({ step }) {
  const { formData, setField } = useSurveyStore();

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">{step.title}</h2>
      {step.fields.map((field) => (
        <FieldRenderer
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={(val) => setField(field.name, val)}
        />
      ))}
    </div>
  );
}
