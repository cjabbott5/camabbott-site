// src/components/survey/surveyUtils.js
import { shouldDisplayField } from './fieldVisibility';

// Fields in a step that are currently visible given the user's answers.
export function getVisibleFields(step, formData) {
  if (!step?.fields) return [];
  return step.fields.filter((f) => {
    if (!shouldDisplayField(f, formData)) return false;
    if (f.dynamicOptionsFrom && f.optionsMap) {
      const source = formData?.[f.dynamicOptionsFrom];
      if (!Array.isArray(source)) return false;
      return source.some((v) => f.optionsMap[v]);
    }
    return true;
  });
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
        const minLabel = field?.scaleLabels?.[0] ?? field?.options?.minLabel;
        const maxLabel = field?.scaleLabels?.[1] ?? field?.options?.maxLabel;
        if (minLabel && maxLabel) return `${value}  (${minLabel} ↔ ${maxLabel})`;
        return String(value);
      }

      case 'grid': {
        const rows = (field?.gridOptions || field?.options?.rows || []).map(
          (item) => (typeof item === 'string' ? { label: item, value: item } : item)
        );
        const cols = (field?.columns || field?.options?.columns || []).map(
          (item) => (typeof item === 'string' ? { label: item, value: item } : item)
        );
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