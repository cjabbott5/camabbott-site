// src/components/survey/FieldRenderer.jsx
import React from 'react';
import InputComponent from './InputComponent';
import { shouldDisplayField } from './fieldVisibility';

export default function FieldRenderer({ field, value, onChange, formValues }) {
  if (!shouldDisplayField(field, formValues)) return null;

  return (
    <div className="mb-8">
      <InputComponent
        type={field.type}
        label={field.label}
        options={field.options}
        value={value}
        onChange={onChange}
        name={field.name}
      />
    </div>
  );
}