// src/components/survey/surveyUtils.js
import { shouldDisplayField } from './fieldVisibility';

// Fields in a step that are currently visible given the user's answers.
export function getVisibleFields(step, formData) {
  if (!step?.fields) return [];
  return step.fields.filter((f) => shouldDisplayField(f, formData));
}

// Steps the user should actually see: any step with at least one visible field.
// This is what fixes the "empty step" problem (e.g. an outpatient-only user no
// longer lands on a blank "Repeat Experiences" page).
export function getVisibleSteps(schema, formData) {
  return schema.filter((step) => getVisibleFields(step, formData).length > 0);
}

// name -> field, for looking labels up on the review screen.
export function buildLabelIndex(schema) {
  const index = {};
  schema.forEach((step) => {
    (step.fields || []).forEach((field) => {
      index[field.name] = field;
    });
  });
  return index;
}

function optionLabel(field, value) {
  const opts = Array.isArray(field?.options) ? field.options : [];
  const match = opts.find((o) => o.value === value);
  return match ? match.label : value;
}

// Turn a stored answer into something a human can read on the review screen.
export function formatAnswer(field, value) {
  if (value === undefined || value === null || value === '') return null;

  try {
    switch (field?.type) {
      case 'radio':
      case 'dropdown':
        return optionLabel(field, value);

      case 'multi-select':
        if (!Array.isArray(value) || value.length === 0) return null;
        return value.map((v) => optionLabel(field, v)).join(', ');

      case 'email':
        return String(value);

      case 'slider': {
        const min = field?.options?.minLabel;
        const max = field?.options?.maxLabel;
        if (min && max) return `${value}  (${min} ↔ ${max})`;
        return String(value);
      }

      case 'grid': {
        // value is { rowValue: colValue }
        const rows = field?.options?.rows || [];
        const cols = field?.options?.columns || [];
        const entries = Object.entries(value || {});
        if (entries.length === 0) return null;
        return entries
          .map(([rowVal, colVal]) => {
            const rowLabel = rows.find((r) => r.value === rowVal)?.label || rowVal;
            const colLabel = cols.find((c) => c.value === colVal)?.label || colVal;
            return `${rowLabel}: ${colLabel}`;
          })
          .join(' · ');
      }

      default:
        return String(value);
    }
  } catch {
    return String(value);
  }
}