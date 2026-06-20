// src/components/survey/surveyUtils.js
import { shouldDisplayField, getSettingCategory } from "./fieldVisibility";

const SKIPPED_VALUE = "__skipped__";

export function getVisibleFields(step, formData) {
  if (!step?.fields) return [];

  return step.fields.filter((f) => {
    if (!shouldDisplayField(f, formData)) return false;

    if (f.dynamicOptionsFrom && f.optionsMap) {
      const source = formData?.[f.dynamicOptionsFrom];
      if (!Array.isArray(source)) return false;
      return source.some((v) => f.optionsMap[v]);
    }

    if (f.optionsByCategory) {
      const cat = getSettingCategory(formData);
      return Boolean(cat && f.optionsByCategory[cat]?.length);
    }

    return true;
  });
}

export function getVisibleSteps(schema, formData) {
  return schema.filter((step) => getVisibleFields(step, formData).length > 0);
}

export function buildVisibleQuestions(schema, formData) {
  const out = [];

  getVisibleSteps(schema, formData).forEach((step) => {
    let firstInStep = true;

    getVisibleFields(step, formData).forEach((field) => {
      if (field.type === "breath") {
        out.push({
          key: field.name,
          kind: "breath",
          stepId: step.id,
          stepTitle: step.title,
          copy: field.copy,
        });
      } else {
        out.push({
          key: field.name,
          kind: "question",
          stepId: step.id,
          stepTitle: step.title,
          intro: firstInStep ? step.intro : undefined,
          field,
        });
      }

      firstInStep = false;
    });
  });

  return out;
}

export function getSectionTrail(questions) {
  const seen = [];

  questions.forEach((q) => {
    if (q.kind === "breath") return;
    if (!seen.includes(q.stepId)) seen.push(q.stepId);
  });

  return seen;
}

export function buildLabelIndex(schema) {
  const index = {};

  schema.forEach((step) =>
    (step.fields || []).forEach((field) => {
      index[field.name] = field;
    })
  );

  return index;
}

function optionLabel(field, value) {
  if (value === SKIPPED_VALUE) return "Skipped";

  if (Array.isArray(field?.options)) {
    const match = field.options.find((o) => o.value === value);
    if (match) return match.label;
  }

  if (field?.optionsMap?.[value]) return field.optionsMap[value];

  if (field?.optionsByCategory) {
    for (const list of Object.values(field.optionsByCategory)) {
      const match = list.find((o) => o.value === value);
      if (match) return match.label;
    }
  }

  if (value === "other") return "Something else";
  if (value === "none") return "None of these";
  if (value === "unsure") return "Not sure";
  if (value === "prefer-not") return "Prefer not to say";

  return value;
}

export function formatAnswer(field, value) {
  if (value === undefined || value === null || value === "") return null;

  try {
    switch (field?.type) {
      case "radio":
      case "dropdown":
        return optionLabel(field, value);

      case "multiselect": {
        if (value === SKIPPED_VALUE) return "Skipped";
        if (!Array.isArray(value) || value.length === 0) return null;
        return value.map((v) => optionLabel(field, v)).join(", ");
      }

      case "scale5":
        if (value === SKIPPED_VALUE) return "Skipped";
        if (field.leftLabel && field.rightLabel) {
          return `${value} of 5 (${field.leftLabel} ↔ ${field.rightLabel})`;
        }
        return `${value} of 5`;

      case "email":
      case "text":
        if (value === SKIPPED_VALUE) return "Skipped";
        return String(value);

      default:
        if (value === SKIPPED_VALUE) return "Skipped";
        return String(value);
    }
  } catch {
    return String(value);
  }
}