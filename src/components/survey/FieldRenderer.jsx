import React from "react";
import InputComponent from "./InputComponent";

export default function FieldRenderer({ field, value, onChange }) {
  return (
    <div className="mb-6">
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
