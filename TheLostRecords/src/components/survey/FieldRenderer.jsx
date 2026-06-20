// src/components/survey/FieldRenderer.jsx
import React from "react";
import InputComponent from "./InputComponent";
import { shouldDisplayField, getSettingCategory } from "./fieldVisibility";

export default function FieldRenderer({ field, value, onChange, formValues, autoFocus }) {
  if (!shouldDisplayField(field, formValues)) return null;

  const options = resolveOptions(field, formValues);

  // A dynamic/category field that resolved to nothing should not render.
  if (
    (field.dynamicOptionsFrom || field.optionsByCategory) &&
    Array.isArray(options) &&
    options.length === 0
  ) {
    return null;
  }

  return (
    <InputComponent
      type={field.type}
      label={field.label}
      options={options}
      value={value}
      onChange={onChange}
      name={field.name}
      leftLabel={field.leftLabel}
      rightLabel={field.rightLabel}
      placeholder={field.placeholder}
      multiline={field.multiline}
      autoFocus={autoFocus}
    />
  );
}

function resolveOptions(field, formValues) {
  // dynamic options from another answer (e.g. focusType from careSettings)
  if (field.dynamicOptionsFrom && field.optionsMap) {
    const source = formValues?.[field.dynamicOptionsFrom];
    if (!Array.isArray(source)) return [];
    return source
      .filter((v) => field.optionsMap[v])
      .map((v) => ({ label: field.optionsMap[v], value: v }));
  }

  // options that depend on the person's care-setting category
  if (field.optionsByCategory) {
    const cat = getSettingCategory(formValues);
    const list = (cat && field.optionsByCategory[cat]) || [];
    return field.allowOther
      ? [...list, { label: "Something else / hard to name", value: "other" }]
      : list;
  }

  if (field.allowOther && Array.isArray(field.options)) {
    return [...field.options, { label: "Something else", value: "other" }];
  }

  return field.options;
}