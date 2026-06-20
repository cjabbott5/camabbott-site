export function shouldDisplayField(field, formValues) {
  const condition = field.condition;
  if (!condition) return true;

  if (condition.anyOf) {
    return condition.anyOf.some(
      (key) => formValues?.[key] === condition.equals
    );
  }

  if (condition.allOf) {
    return condition.allOf.every(
      (key) => formValues?.[key] === condition.equals
    );
  }

  if (condition.hasMultipleExposure) {
    const map = {
      inpatient: "inpatientMultiple",
      php: "phpMultiple",
      court: "courtMultiple",
    };
    const key = map[formValues?.["focusType"]];
    return formValues?.[key] === "yes";
  }

  if (condition.equals !== undefined) {
    const fieldValue = formValues?.[condition.field];
    if (fieldValue === undefined || fieldValue === null) return false;
    return fieldValue === condition.equals;
  }

  if (condition.notEquals !== undefined) {
    const fieldValue = formValues?.[condition.field];
    if (fieldValue === undefined || fieldValue === null) return false;
    return fieldValue !== condition.notEquals;
  }

  if (condition.includes !== undefined) {
    const fieldValue = formValues?.[condition.field];
    if (!Array.isArray(fieldValue)) return false;
    return fieldValue.includes(condition.includes);
  }

  return true;
}
