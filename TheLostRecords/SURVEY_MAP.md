# Patient Survey — Flow Map

This is the canonical reference for the "Share Your Stats" survey
(`patientSurveySchema.js`). Steps are listed top-to-bottom in order.
A step is **skipped entirely** if none of its fields are visible.

---

## Condition Grammar

| Pattern | Meaning |
|---|---|
| `{ field, equals }` | `formValues[field] === equals` |
| `{ field, notEquals }` | `formValues[field] !== notEquals` |
| `{ field, includes }` | `formValues[field]` (array) contains `includes` |
| `{ anyOf: [keys], equals }` | **any** of those field keys equals the value |
| `{ allOf: [keys], equals }` | **all** of those field keys equal the value |
| `{ hasMultipleExposure: true }` | the `*Multiple` field matching `focusType` is `"yes"` |
| `dynamicOptionsFrom` (on field) | options built from another answer's array + `optionsMap`; field hidden if 0 options resolve |

---

## Step 1: Welcome to Lost Records (`consent`)

| Field | Type | Condition |
|---|---|---|
| `consent` | radio (Yes / No / I'm not sure) | — |

**Gate:** user must select "Yes" to proceed. All other answers block navigation.

---

## Step 2: Your Care Settings (`care-overview`)

| Field | Type | Condition |
|---|---|---|
| `careSettings` | multi-select (inpatient, php, court, outpatient, other) | — |

---

## Step 3: Repeat Experiences (`care-frequency`)

*Skipped if no inpatient/php/court selected.*

| Field | Type | Condition |
|---|---|---|
| `inpatientMultiple` | radio (Yes / No / I'm not sure) | `careSettings` includes `"inpatient"` |
| `inpatientTotal` | dropdown (2 … 10+) | `inpatientMultiple` equals `"yes"` |
| `phpMultiple` | radio (Yes / No / I'm not sure) | `careSettings` includes `"php"` |
| `phpTotal` | dropdown (2 … 10+) | `phpMultiple` equals `"yes"` |
| `courtMultiple` | radio (Yes / No / I'm not sure) | `careSettings` includes `"court"` |
| `courtTotal` | dropdown (2 … 10+) | `courtMultiple` equals `"yes"` |

---

## Step 4: Focus Experience (`focus-experience`)

*Skipped if `careSettings` contains none of inpatient/php/court (outpatient-only users).*

| Field | Type | Condition |
|---|---|---|
| `focusType` | radio | Dynamic options from `careSettings` via `optionsMap` (inpatient → "Inpatient hospitalization", php → "PHP/IOP", court → "Court-ordered or police-involved care"). Hidden if 0 options resolve. |
| `focusDetail` | radio (first / recent / significant / unsure) | `hasMultipleExposure: true` — the `*Multiple` field matching the chosen `focusType` is `"yes"` |

---

## Step 5: What Happened (`what-happened`)

| Field | Type | Condition |
|---|---|---|
| `harmExperiences` | grid (9 rows × 3 columns: Yes / No / Not sure) | — |
| `wasTraumatic` | radio (Yes / No / Not sure) | — |
| `emotionalSafety` | slider 0–10 ("Not at all" ↔ "Completely") | — |

---

## Step 6: What Helped or Didn't (`care-quality`)

| Field | Type | Condition |
|---|---|---|
| `careComponentsImpact` | grid (7 rows × 4 columns: Helped / Hurt / Neutral / N/A) | — |
| `feltListenedTo` | slider 0–10 ("Not at all" ↔ "Completely") | — |
| `treatmentUnderstanding` | radio (Yes / Somewhat / No) | — |

---

## Step 7: How It Affected You (`outcomes`)

| Field | Type | Condition |
|---|---|---|
| `mentalHealthChange` | slider -5–+5 ("Much worse" ↔ "Much better") | — |
| `trustChange` | slider 0–10 ("Much less trust" ↔ "Much more trust") | — |
| `avoidance` | radio (Yes / No / Not sure) | — |
| `loopBack` | radio (Yes / No) | — |
| `loopBackNote` | info (deferred message) | `loopBack` equals `"yes"` |

> **Note:** Loop-back is captured for sentiment only. Full multi-experience
> support (namespaced answers) is deferred to a future version.

---

## Step 8: Access + Barriers (`barriers`)

| Field | Type | Condition |
|---|---|---|
| `barriers` | multi-select (cost, waitlists, location, discrimination, transport, trauma, legal, none) | — |
| `deniedCare` | radio (Yes / No) | — |
| `identityImpact` | radio (Yes / No / Not sure) | — |

---

## Step 9: Time + Place (`time-place`)

| Field | Type | Condition |
|---|---|---|
| `stateLocation` | dropdown (50 states + DC + "Outside the U.S.") | — |
| `whenOccurred` | radio (within last year / 1–3 / 4–6 / 7+) | — |
| `multiState` | radio (Yes / No) | — |

---

## Step 10: Optional Reflection (`reflection`)

| Field | Type | Condition |
|---|---|---|
| `reflectionType` | radio (voice note / visual card / skip) | — |

> Voice-note and visual-card capture are not yet implemented.

---

## Step 11: About You (`demographics`)

| Field | Type | Condition |
|---|---|---|
| `age` | radio (under 18 … 65+) | — |
| `gender` | multi-select (7 options) | — |
| `raceEthnicity` | multi-select (8 options) | — |
| `disability` | radio (Yes / No / Unsure) | — |
| `insurance` | radio (private / medicaid / medicare / none / other) | — |

---

## Step 12: Stay Involved (`follow-up`)

| Field | Type | Condition |
|---|---|---|
| `summaryOptIn` | radio (Yes / No) | — |
| `advocacyOptIn` | radio (Yes / No) | — |
| `interviewOptIn` | radio (Yes / No) | — |
| `email` | email | **any of** `summaryOptIn`, `advocacyOptIn`, `interviewOptIn` equals `"yes"` |

---

## After Step 12 → Review Screen → Submit
