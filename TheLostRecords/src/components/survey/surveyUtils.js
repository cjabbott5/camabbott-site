// src/components/survey/surveyUtils.js
import { shouldDisplayField, getSettingCategory } from "./fieldVisibility";

// Visible fields within a step, honoring conditions + dynamic/category options.
export function getVisibleFields(step, formData) {
  if (!step?.fields) return [];
  return step.fields.filter((f) => {
    if (!shouldDisplayField(f, formData)) return false;

    // dynamic options: hide if nothing resolves
    if (f.dynamicOptionsFrom && f.optionsMap) {
      const source = formData?.[f.dynamicOptionsFrom];
      if (!Array.isArray(source)) return false;
      return source.some((v) => f.optionsMap[v]);
    }

    // category options: hide if the person's category has no list
    if (f.optionsByCategory) {
      const cat = getSettingCategory(formData);
      return Boolean(cat && f.optionsByCategory[cat]?.length);
    }

    return true;
  });
}

// Steps that have at least one visible field.
export function getVisibleSteps(schema, formData) {
  return schema.filter((step) => getVisibleFields(step, formData).length > 0);
}

// THE core of the redesign: flatten the schema into an ordered list of
// single-question screens. Each schema step can yield several screens.
// Returns: [{ key, kind, stepId, stepTitle, intro?, field?, copy? }]
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
          // only surface the step intro on its first visible question
          intro: firstInStep ? step.intro : undefined,
          field,
        });
      }
      firstInStep = false;
    });
  });
  return out;
}

// Ordered, de-duplicated list of section ids the visible questions pass through.
// Used for section-based progress (less anxiety-inducing than "Q27 of 43").
export function getSectionTrail(questions) {
  const seen = [];
  questions.forEach((q) => {
    if (q.kind === "breath") return; // breaths aren't a section of their own
    if (!seen.includes(q.stepId)) seen.push(q.stepId);
  });
  return seen;
}

// name -> field, for the review screen.
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
  // search static options, dynamic optionsMap, and category lists
  if (Array.isArray(field?.options)) {
    const m = field.options.find((o) => o.value === value);
    if (m) return m.label;
  }
  if (field?.optionsMap?.[value]) return field.optionsMap[value];
  if (field?.optionsByCategory) {
    for (const list of Object.values(field.optionsByCategory)) {
      const m = list.find((o) => o.value === value);
      if (m) return m.label;
    }
  }
  if (value === "other") return "Something else";
  return value;
}

// Turn a stored answer into human-readable text for the review screen.
export function formatAnswer(field, value) {
  if (value === undefined || value === null || value === "") return null;

  try {
    switch (field?.type) {
      case "radio":
      case "dropdown":
        return optionLabel(field, value);

      case "multiselect": {
        if (!Array.isArray(value) || value.length === 0) return null;
        return value.map((v) => optionLabel(field, v)).join(", ");
      }

      case "scale5":
        // value is 1..5; show the number with its poles for context
        if (field.leftLabel && field.rightLabel) {
          return `${value} of 5  (${field.leftLabel} ↔ ${field.rightLabel})`;
        }
        return `${value} of 5`;

      case "email":
      case "text":
        return String(value);

      default:
        return String(value);
    }
  } catch {
    return String(value);
  }
}