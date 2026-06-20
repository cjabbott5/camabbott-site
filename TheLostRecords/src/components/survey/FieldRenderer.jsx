// src/components/survey/FieldRenderer.jsx
import React from 'react';
import InputComponent from './InputComponent';
import { shouldDisplayField } from './fieldVisibility';

export default function FieldRenderer({ field, value, onChange, formValues }) {
  if (!shouldDisplayField(field, formValues)) return null;

  const normalizedOptions = normalizeFieldOptions(field, formValues);

  // If a dynamic-options field resolved to nothing, hide it entirely.
  if (field.dynamicOptionsFrom && Array.isArray(normalizedOptions) && normalizedOptions.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <InputComponent
        type={field.type}
        label={field.label}
        options={normalizedOptions}
        value={value}
        onChange={onChange}
        name={field.name}
      />
    </div>
  );
}

function normalizeFieldOptions(field, formValues) {
  if (field.type === 'grid') {
    const rows = (field.gridOptions || []).map((item) =>
      typeof item === 'string' ? { label: item, value: item } : item
    );
    const columns = (field.columns || []).map((item) =>
      typeof item === 'string' ? { label: item, value: item } : item
    );
    return { rows, columns };
  }

  if (field.type === 'slider') {
    return {
      min: field.min ?? field.options?.min ?? 0,
      max: field.max ?? field.options?.max ?? 10,
      minLabel: field.scaleLabels?.[0] ?? field.options?.minLabel,
      maxLabel: field.scaleLabels?.[1] ?? field.options?.maxLabel,
    };
  }

  if (field.dynamicOptionsFrom && field.optionsMap) {
    const sourceValues = formValues?.[field.dynamicOptionsFrom];
    if (!Array.isArray(sourceValues)) return [];
    return sourceValues
      .filter((v) => field.optionsMap[v])
      .map((v) => ({ label: field.optionsMap[v], value: v }));
  }

  return field.options;
}
