# Patient Survey — Flow Map  ·  *Redesign revision (v2)*

Canonical reference for the "Share Your Stats" survey (`patientSurveySchema.js`).
This revision folds in the locked UX redesign decisions. Real field keys are
preserved so this doubles as the migration guide. Changes from the current build
are marked **⟶ CHANGED** / **⟶ NEW**.

**Locked decisions baked into this revision**
1. **One decision per *screen*; the screen never scrolls.** A schema "step" is a
   logical grouping — but each *question* renders as its own full-height,
   non-scrolling screen. A step now spans multiple screens.
2. **One scale type only:** `scale5` (1–5 tap, labeled ends, 5 = positive pole).
   All sliders retired.
3. **Auto-advance on single-select** (~280ms; immediate under reduced-motion).
   Multi-select and scales require explicit Continue.
4. **Adaptive by care setting** — the harm/impact content a person sees is
   filtered by their setting category. Nobody is asked about what can't apply.
5. **Grids retired.** Both grid fields become chips / split single-decision
   screens.
6. **Trauma-informed pacing** — short "breath" transition screens before heavy
   sections.
7. A step is **skipped entirely** if none of its fields are visible (forward
   *and* back).

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
| `{ settingCategory: "institutional" \| "outpatient" }` | **⟶ NEW** true if any selected `careSettings` is in that category (see map below) |
| `dynamicOptionsFrom` (on field) | options built from another answer's array + `optionsMap`; field hidden if 0 options resolve |

### Field-type conventions  **⟶ NEW**

| Type | Render | Auto-advance |
|---|---|---|
| `radio` (single-select) | option rows | **Yes** |
| `multiselect` | tap chips | No |
| `scale5` | 5 equal tap segments + labeled ends; `leftLabel`/`rightLabel` **required** | No |
| `dropdown` | native picker (states, counts) | No |
| `email` / `text` | field | No |
| ~~`grid`~~ | **retired — do not render** | — |
| ~~`slider`~~ | **retired → convert to `scale5`** | — |

### Setting → category map  **⟶ NEW** (drives all adaptivity)

| `careSettings` value | Category |
|---|---|
| `inpatient` | institutional |
| `php` | institutional |
| `court` | institutional |
| `outpatient` | outpatient |
| `other` | outpatient *(general list + free text)* |

---

## Step 1: Welcome / Consent (`consent`)

| Field | Type | Condition |
|---|---|---|
| `consent` | radio (Yes / No / I'm not sure) | — |

**Gate:** must select "Yes" to proceed.
**⟶ CHANGED — branch behavior** (replaces the cold "please select Yes"):
- **Yes** → auto-advance into the survey.
- **No** → reveal an open-door panel inline: *"That's alright — this isn't for
  everyone, and there's no pressure. If something's holding you back and you'd
  like to talk it through, you can reach out anytime."* + contact email. No
  forced exit.
- **I'm not sure** → reveal a supportive panel: anonymous (we never ask your
  name) · stop anytime, nothing saved unless you finish · nothing published
  without you choosing — then two paths: **"I feel okay to continue"** /
  **"Not right now — that's alright."**

---

## Step 2: Your Care Settings (`care-overview`)

| Field | Type | Condition |
|---|---|---|
| `careSettings` | multiselect chips (inpatient, php, court, outpatient, other) | — |

This is the **adaptive spine.** Everything downstream keys off it.

---

## Step 3: Repeat Experiences (`care-frequency`)

*Skipped if no institutional setting selected.*

| Field | Type | Condition |
|---|---|---|
| `inpatientMultiple` | radio (Yes / No / I'm not sure) | `careSettings` includes `"inpatient"` |
| `inpatientTotal` | dropdown (2 … 10+) | `inpatientMultiple` equals `"yes"` |
| `phpMultiple` | radio (Yes / No / I'm not sure) | `careSettings` includes `"php"` |
| `phpTotal` | dropdown (2 … 10+) | `phpMultiple` equals `"yes"` |
| `courtMultiple` | radio (Yes / No / I'm not sure) | `careSettings` includes `"court"` |
| `courtTotal` | dropdown (2 … 10+) | `courtMultiple` equals `"yes"` |

**⟶ CHANGED:** each `*Multiple` radio is its own screen (auto-advances); the
matching `*Total` dropdown appears on the *next* screen when "Yes," rather than
expanding inline.

---

## Step 4: Focus Experience (`focus-experience`)

**⟶ CHANGED — trigger:** now shown whenever **2+ `careSettings`** are selected
(any category), not only institutional ones. Skipped when only one setting.

| Field | Type | Condition |
|---|---|---|
| `focusType` | radio | Dynamic options from **all** selected `careSettings` via `optionsMap` (inpatient → "Inpatient hospitalization", php → "PHP/IOP", court → "Court-ordered or police-involved care", outpatient → "Outpatient therapy / psychiatry", other → "Other care"). **⟶ CHANGED:** `optionsMap` extended to include outpatient/other. Hidden if 0 options resolve. |
| `focusDetail` | radio (first / recent / significant / unsure) | `hasMultipleExposure: true` |

Selecting a focus moves to its **own** screen (auto-advance) — not an inline
drop-down on the same screen.

---

## Step 5: Age at the Time (`focus-age`)  **⟶ NEW · moved early**

| Field | Type | Condition |
|---|---|---|
| `ageAtExperience` | radio (Under 18 / 18–25 / 26–40 / Over 40) | — |

Collected **before** the "what happened" content, per the redesign. This is age
*at the focus experience* — distinct from the demographic `age` (current age) in
Step 12, which is retained but should be relabeled to avoid confusion. *(Cam to
confirm whether current-age demographic stays or is cut as redundant.)*

> **Breath screen** **⟶ NEW** — between Step 5 and Step 6: *"Let's talk about
> [that experience]. Take your time. Tap only what fits. You can skip anything."*

---

## Step 6: What Happened (`what-happened`)

| Field | Type | Condition |
|---|---|---|
| `harmExperiences` | **⟶ CHANGED: `multiselect` chips** — "Select any of the following you experienced." Adaptive list (below). Ends with **"Something else / hard to name"** → optional free text. *(Replaces the 9×3 Yes/No/Not-sure grid — the clipped-label mobile bug and a render-crash source.)* | — |
| `wasTraumatic` | radio (Yes / No / Not sure) | — |
| `emotionalSafety` | **⟶ CHANGED: `scale5`** — 1 "Not at all safe" ↔ 5 "Completely safe" *(was slider 0–10)* | — |

**Adaptive `harmExperiences` lists** (shown by category):

- **institutional:** Physical restraint · Forced medication · Seclusion /
  isolation · Strip search or forced nudity · Verbal abuse · Racial or
  gender-identity-based mistreatment · Denied basic needs · Not listened to ·
  Held longer than needed
- **outpatient / other:** Dismissed or not believed · Misdiagnosed · Medication
  mishandled · Boundary violation · Confidentiality broken · Shamed or judged ·
  Pushed treatment I didn't want · Couldn't get follow-up

*(Institutional list ≈ the current 9 rows. Exact wording is Cam's call.)*

---

## Step 7: What Helped or Didn't (`care-quality`)

**⟶ CHANGED:** the 7×4 grid (`careComponentsImpact`) is retired and split into
**two chip screens**, each one decision:

| Field | Type | Condition |
|---|---|---|
| `helpedComponents` | **⟶ NEW** `multiselect` — "Which of these helped?" | — |
| `hurtComponents` | **⟶ NEW** `multiselect` — "Which of these made things worse?" | — |
| `feltListenedTo` | **⟶ CHANGED: `scale5`** — 1 "Not at all" ↔ 5 "Completely" *(was slider 0–10)* | — |
| `treatmentUnderstanding` | radio (Yes / Somewhat / No) | — |

Component rows (adaptive — institutional-only items hidden for outpatient):
Medication · Therapy or groups · Peer support · Nurses / aides *(institutional)*
· Doctors / prescribers · Family involvement · Discharge / follow-up planning.
*(Final list Cam's call. "Neutral/N/A" dropped — absence = not selected.)*

> Migration note: `careComponentsImpact` data, if any exists, maps to
> `helpedComponents` (Helped) + `hurtComponents` (Hurt); Neutral/N/A discarded.

---

## Step 8: How It Affected You (`outcomes`)

| Field | Type | Condition |
|---|---|---|
| `mentalHealthChange` | **⟶ CHANGED: `scale5`** — 1 "Much worse" ↔ 5 "Much better" *(was slider −5…+5)* | — |
| `trustChange` | **⟶ CHANGED: `scale5`** — 1 "Much less trust" ↔ 5 "Much more trust" *(was slider 0–10)* | — |
| `avoidance` | radio (Yes / No / Not sure) | — |
| `loopBack` | radio (Yes / No) | — |
| `loopBackNote` | info (deferred message) | `loopBack` equals `"yes"` |

> Loop-back captured for sentiment only; full multi-experience support
> (namespaced answers) still deferred.

---

## Step 9: Access + Barriers (`barriers`)

| Field | Type | Condition |
|---|---|---|
| `barriers` | multiselect chips (cost, waitlists, location, discrimination, transport, trauma, legal, none) | — |
| `deniedCare` | radio (Yes / No) | — |
| `identityImpact` | radio (Yes / No / Not sure) | — |

**⟶ CHANGED:** `barriers` renders as chips, not a native multi-select dropdown.

---

## Step 10: Time + Place (`time-place`)

| Field | Type | Condition |
|---|---|---|
| `stateLocation` | dropdown (50 states + DC + "Outside the U.S.") | — |
| `whenOccurred` | radio (within last year / 1–3 / 4–6 / 7+) | — |
| `multiState` | radio (Yes / No) | — |

*(Unchanged. Dropdown is acceptable for a 52-item list.)*

---

## Step 11: Optional Reflection (`reflection`)

| Field | Type | Condition |
|---|---|---|
| `reflectionType` | radio (voice note / visual card / skip) | — |

> Voice-note and visual-card capture still not implemented.

---

## Step 12: About You (`demographics`)

| Field | Type | Condition |
|---|---|---|
| `age` | radio (under 18 … 65+) | — |
| `gender` | multiselect (7 options) | — |
| `raceEthnicity` | multiselect (8 options) | — |
| `disability` | radio (Yes / No / Unsure) | — |
| `insurance` | radio (private / medicaid / medicare / none / other) | — |

**⟶ CHANGED:** relabel `age` → "How old are you now?" to distinguish from the
new `ageAtExperience` (Step 5). Multi-selects render as chips.

---

## Step 13: Stay Involved (`follow-up`)

| Field | Type | Condition |
|---|---|---|
| `summaryOptIn` | radio (Yes / No) | — |
| `advocacyOptIn` | radio (Yes / No) | — |
| `interviewOptIn` | radio (Yes / No) | — |
| `email` | email | **any of** `summaryOptIn`, `advocacyOptIn`, `interviewOptIn` equals `"yes"` |

---

## After Step 13 → Review Screen → Submit

---

## Appendix A — Scale conversions (all retired sliders → `scale5`)

| Field | Was | Now (`scale5`, 5 = positive pole) |
|---|---|---|
| `emotionalSafety` | slider 0–10 | 1 "Not at all safe" ↔ 5 "Completely safe" |
| `feltListenedTo` | slider 0–10 | 1 "Not at all" ↔ 5 "Completely" |
| `mentalHealthChange` | slider −5…+5 | 1 "Much worse" ↔ 5 "Much better" |
| `trustChange` | slider 0–10 | 1 "Much less trust" ↔ 5 "Much more trust" |

## Appendix B — Retired field types

- **`grid`** — both instances removed. `harmExperiences` → adaptive chips;
  `careComponentsImpact` → `helpedComponents` + `hurtComponents` chips.
- **`slider`** — all four → `scale5` (Appendix A).

Removing these two types also clears the schema↔renderer crash surface noted in
the earlier engine review.