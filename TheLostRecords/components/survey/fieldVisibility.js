
export function shouldDisplayField(field, formValues) {
  const condition = field.condition;
  if (!condition) return true;

  if (condition.equals !== undefined) {
  const fieldValue = formValues?.[condition.field];
  if (fieldValue === undefined || fieldValue === null) return false;
  return fieldValue === condition.equals;
}


if (condition.includes !== undefined) {
  const fieldValue = formValues?.[condition.field]; // ✅ safe access
  if (!Array.isArray(fieldValue)) return false;     // ✅ defensive check
  return fieldValue.includes(condition.includes);   // ✅ now it’s safe
}


  if (condition.anyOf) {
    return condition.anyOf.some(
      (key) => formValues[key] === condition.equals
    );
  }

  if (condition.hasMultipleExposure) {
    const map = {
      inpatient: "inpatientMultiple",
      php: "phpMultiple",
      court: "courtMultiple"
    };
    const key = map[formValues["focusType"]];
    return formValues[key] === "yes";
  }

  return true;
}
