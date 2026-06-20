// src/components/survey/FieldRenderer.jsx
import React from "react";
import InputComponent from "./InputComponent";
import { shouldDisplayField, getSettingCategory } from "./fieldVisibility";

export default function FieldRenderer({
  field,
  value,
  onChange,
  formValues,
  autoFocus,
}) {
  if (!shouldDisplayField(field, formValues)) return null;

  const options = resolveOptions(field, formValues);

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
      helpText={field.helpText}
      options={options}
      value={value}
      onChange={onChange}
      name={field.name}
      leftLabel={field.leftLabel}
      rightLabel={field.rightLabel}
      placeholder={field.placeholder}
      multiline={field.multiline}
      autoFocus={autoFocus}
      noneExclusive={field.noneExclusive}
    />
  );
}

function resolveOptions(field, formValues) {
  if (field.dynamicOptionsFrom && field.optionsMap) {
    const source = formValues?.[field.dynamicOptionsFrom];

    if (!Array.isArray(source)) return [];

    return source
      .filter((v) => field.optionsMap[v])
      .map((v) => ({ label: field.optionsMap[v], value: v }));
  }

  if (field.optionsByCategory) {
    const cat = getSettingCategory(formValues);
    const list = (cat && field.optionsByCategory[cat]) || [];

    if (!field.allowOther) return list;

    const hasOther = list.some((opt) => opt.value === "other");
    return hasOther
      ? list
      : [...list, { label: "Something else / hard to name", value: "other" }];
  }

  if (field.allowOther && Array.isArray(field.options)) {
    const hasOther = field.options.some((opt) => opt.value === "other");
    return hasOther
      ? field.options
      : [...field.options, { label: "Something else", value: "other" }];
  }

  return field.options;
}