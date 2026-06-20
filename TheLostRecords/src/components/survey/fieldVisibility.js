// src/components/survey/fieldVisibility.js

// Which care settings count as "institutional" vs "outpatient".
// Drives all setting-based adaptivity (harm lists, component lists, etc).
export const SETTING_CATEGORY = {
  inpatient: "institutional",
  php: "institutional",
  court: "institutional",
  outpatient: "outpatient",
  other: "outpatient",
};

// The person's primary category. If ANY selected setting is institutional,
// they get the institutional path (it's the superset of relevant questions).
export function getSettingCategory(formValues) {
  const settings = formValues?.careSettings;
  if (!Array.isArray(settings) || settings.length === 0) return null;
  return settings.some((s) => SETTING_CATEGORY[s] === "institutional")
    ? "institutional"
    : "outpatient";
}

// How many distinct care settings were selected (used for the focus step).
export function selectedSettingCount(formValues) {
  const settings = formValues?.careSettings;
  return Array.isArray(settings) ? settings.length : 0;
}

export function shouldDisplayField(field, formValues) {
  const condition = field.condition;
  if (!condition) return true;

  // any of these keys equals the value
  if (condition.anyOf) {
    return condition.anyOf.some((key) => formValues?.[key] === condition.equals);
  }

  // all of these keys equal the value
  if (condition.allOf) {
    return condition.allOf.every((key) => formValues?.[key] === condition.equals);
  }

  // the *Multiple field matching the chosen focusType is "yes"
  if (condition.hasMultipleExposure) {
    const map = {
      inpatient: "inpatientMultiple",
      php: "phpMultiple",
      court: "courtMultiple",
    };
    const key = map[formValues?.focusType];
    return formValues?.[key] === "yes";
  }

  // any selected careSettings falls in this category
  if (condition.settingCategory) {
    return getSettingCategory(formValues) === condition.settingCategory;
  }

  // 2+ care settings selected (drives the Focus Experience step)
  if (condition.multipleSettings) {
    return selectedSettingCount(formValues) >= 2;
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