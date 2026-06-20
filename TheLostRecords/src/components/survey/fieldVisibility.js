// src/components/survey/fieldVisibility.js

// Which care settings count as "institutional" vs "outpatient".
// Drives all setting-based adaptivity: safety lists, component lists, etc.
export const SETTING_CATEGORY = {
  inpatient: "institutional",
  "php-iop": "institutional",
  "er-crisis": "institutional",
  "court-police": "institutional",

  therapy: "outpatient",
  psychiatry: "outpatient",
  "peer-community": "outpatient",
  other: "outpatient",

  // legacy values, safe to keep while testing old localStorage responses
  php: "institutional",
  court: "institutional",
  outpatient: "outpatient",
};

export function getSettingCategory(formValues) {
  const settings = formValues?.careSettings;
  if (!Array.isArray(settings) || settings.length === 0) return null;

  return settings.some((s) => SETTING_CATEGORY[s] === "institutional")
    ? "institutional"
    : "outpatient";
}

export function selectedSettingCount(formValues) {
  const settings = formValues?.careSettings;
  return Array.isArray(settings) ? settings.length : 0;
}

export function shouldDisplayField(field, formValues) {
  const condition = field.condition;
  if (!condition) return true;

  if (condition.anyOf) {
    return condition.anyOf.some((key) => formValues?.[key] === condition.equals);
  }

  if (condition.allOf) {
    return condition.allOf.every((key) => formValues?.[key] === condition.equals);
  }

  if (condition.hasMultipleExposure) {
    const map = {
      inpatient: "inpatientMultiple",
      "php-iop": "phpMultiple",
      "court-police": "courtMultiple",

      // legacy
      php: "phpMultiple",
      court: "courtMultiple",
    };

    const key = map[formValues?.focusType];
    return formValues?.[key] === "yes";
  }

  if (condition.settingCategory) {
    return getSettingCategory(formValues) === condition.settingCategory;
  }

  if (condition.multipleSettings) {
    return selectedSettingCount(formValues) >= 2;
  }

  if (condition.hasAnyExcept) {
    const v = formValues?.[condition.field];
    if (!Array.isArray(v)) return false;
    return v.some((item) => !condition.hasAnyExcept.includes(item));
  }

  if (condition.equals !== undefined) {
    const v = formValues?.[condition.field];
    if (v === undefined || v === null) return false;
    return v === condition.equals;
  }

  if (condition.notEquals !== undefined) {
    const v = formValues?.[condition.field];
    if (v === undefined || v === null) return false;
    return v !== condition.notEquals;
  }

  if (condition.includes !== undefined) {
    const v = formValues?.[condition.field];
    if (!Array.isArray(v)) return false;
    return v.includes(condition.includes);
  }

  return true;
}