// src/components/schemas/patientSurveySchema.js
//
// REDESIGN v2 — one question per screen, scale5 instead of sliders,
// chips instead of grids, adaptive by care setting.
//
// Field types in use: radio | multiselect | dropdown | email | text | scale5 | breath | info
//   scale5  → needs leftLabel + rightLabel (5 = positive pole)
//   breath  → a transition screen; not stored. needs `copy`.
//   chips   → multiselect; options can be static `options`, dynamic
//             (dynamicOptionsFrom + optionsMap), or `optionsByCategory`.
//
// Lines marked  // CAM:  are open decisions from SURVEY_MAP.md — defaults are
// the map's provisional content. Change the strings freely; the engine doesn't
// care about wording.

export const patientSurveySchema = [
  // 1 ── Welcome / Consent
  {
    id: "consent",
    title: "Welcome to Lost Records",
    intro:
      "This anonymous survey collects real stories from people who've received institutional mental health care. You can stop at any time. No typing is required.",
    fields: [
      {
        name: "consent",
        type: "radio",
        label: "Do you consent to participate in this survey?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "I'm not sure", value: "unsure" },
        ],
      },
    ],
  },

  // 2 ── Care Settings (the adaptive spine)
  {
    id: "care-overview",
    title: "Your Care Settings",
    intro:
      "Let's begin with the kinds of mental health care you've received.",
    fields: [
      {
        name: "careSettings",
        type: "multiselect",
        label: "Which of these care settings have you experienced?",
        options: [
          { label: "Inpatient psychiatric hospitalization", value: "inpatient" },
          { label: "PHP / IOP (partial or intensive outpatient)", value: "php" },
          { label: "Court-ordered or police-involved care", value: "court" },
          { label: "Outpatient therapy or psychiatry only", value: "outpatient" },
          { label: "Other (peer-led, community, spiritual)", value: "other" },
        ],
      },
    ],
  },

  // 3 ── Repeat Experiences (skipped if no institutional setting)
  {
    id: "care-frequency",
    title: "Repeat Experiences",
    fields: [
      {
        name: "inpatientMultiple",
        type: "radio",
        label: "Have you had more than one psychiatric hospitalization?",
        condition: { field: "careSettings", includes: "inpatient" },
        options: yesNoUnsure(),
      },
      {
        name: "inpatientTotal",
        type: "dropdown",
        label: "How many psychiatric hospitalizations have you had?",
        condition: { field: "inpatientMultiple", equals: "yes" },
        options: countOptions(),
      },
      {
        name: "phpMultiple",
        type: "radio",
        label: "Have you participated in more than one PHP / IOP program?",
        condition: { field: "careSettings", includes: "php" },
        options: yesNoUnsure(),
      },
      {
        name: "phpTotal",
        type: "dropdown",
        label: "How many PHP / IOP programs have you participated in?",
        condition: { field: "phpMultiple", equals: "yes" },
        options: countOptions(),
      },
      {
        name: "courtMultiple",
        type: "radio",
        label:
          "Have you had more than one court-ordered or police-involved episode?",
        condition: { field: "careSettings", includes: "court" },
        options: yesNoUnsure(),
      },
      {
        name: "courtTotal",
        type: "dropdown",
        label: "How many court-ordered or police-involved episodes have you had?",
        condition: { field: "courtMultiple", equals: "yes" },
        options: countOptions(),
      },
    ],
  },

  // 4 ── Focus Experience (only when 2+ settings selected)
  {
    id: "focus-experience",
    title: "Focus Experience",
    intro:
      "You've experienced more than one kind of care. For now, let's focus on the one that stands out most.",
    fields: [
      {
        name: "focusType",
        type: "radio",
        label: "Which experience would you like to focus on?",
        condition: { multipleSettings: true },
        dynamicOptionsFrom: "careSettings",
        optionsMap: {
          inpatient: "Inpatient hospitalization",
          php: "PHP / IOP",
          court: "Court-ordered or police-involved care",
          outpatient: "Outpatient therapy / psychiatry", // CAM: confirm wording
          other: "Other care", // CAM: confirm wording
        },
      },
      {
        name: "focusDetail",
        type: "radio",
        label: "Which one specifically?",
        condition: { hasMultipleExposure: true },
        options: [
          { label: "My first experience", value: "first" },
          { label: "My most recent experience", value: "recent" },
          { label: "The most significant one", value: "significant" },
          { label: "I'm not sure", value: "unsure" },
        ],
      },
    ],
  },

  // 5 ── Age at the time (moved early)
  {
    id: "focus-age",
    title: "About That Time",
    fields: [
      {
        name: "ageAtExperience",
        type: "radio",
        label: "About how old were you during that experience?",
        options: [
          { label: "Under 18", value: "<18" },
          { label: "18–25", value: "18-25" },
          { label: "26–40", value: "26-40" },
          { label: "Over 40", value: "40+" },
        ],
      },
    ],
  },

  // breath screen before the heavy section
  {
    id: "breath-1",
    title: "",
    fields: [
      {
        name: "_breath1",
        type: "breath",
        copy: "Let's talk about what happened. Take your time. Tap only what fits — you can skip anything.",
      },
    ],
  },

  // 6 ── What Happened
  {
    id: "what-happened",
    title: "What Happened",
    fields: [
      {
        name: "harmExperiences",
        type: "multiselect",
        label: "Select anything you experienced.",
        // CAM: confirm both lists' wording (SURVEY_MAP Step 6)
        optionsByCategory: {
          institutional: [
            { label: "Physical restraint", value: "restraint" },
            { label: "Forced medication", value: "forced-meds" },
            { label: "Seclusion or isolation", value: "seclusion" },
            { label: "Strip search or forced nudity", value: "strip-search" },
            { label: "Verbal abuse", value: "verbal-abuse" },
            { label: "Racial or gender-identity-based mistreatment", value: "discrimination" },
            { label: "Denied basic needs", value: "neglect" },
            { label: "Not listened to", value: "not-heard" },
            { label: "Held longer than needed", value: "held-long" },
          ],
          outpatient: [
            { label: "Dismissed or not believed", value: "dismissed" },
            { label: "Misdiagnosed", value: "misdiagnosed" },
            { label: "Medication mishandled", value: "med-mishandled" },
            { label: "Boundary violation", value: "boundary" },
            { label: "Confidentiality broken", value: "confidentiality" },
            { label: "Shamed or judged", value: "shamed" },
            { label: "Pushed treatment I didn't want", value: "pushed-treatment" },
            { label: "Couldn't get follow-up", value: "no-followup" },
          ],
        },
        allowOther: true, // appends a "Something else / hard to name" chip
      },
      {
        name: "harmOther",
        type: "text",
        label: "What else happened? (optional)",
        condition: { field: "harmExperiences", includes: "other" },
        placeholder: "In your own words…",
      },
      {
        name: "wasTraumatic",
        type: "radio",
        label: "Would you describe any part of this as traumatic?",
        options: yesNoNotSure(),
      },
      {
        name: "emotionalSafety",
        type: "scale5",
        label: "Did you feel emotionally safe?",
        leftLabel: "Not at all safe",
        rightLabel: "Completely safe",
      },
    ],
  },

  // 7 ── What Helped or Didn't
  {
    id: "care-quality",
    title: "What Helped or Didn't",
    fields: [
      {
        name: "helpedComponents",
        type: "multiselect",
        label: "Which of these helped?",
        // CAM: confirm component list
        optionsByCategory: {
          institutional: componentList(true),
          outpatient: componentList(false),
        },
      },
      {
        name: "hurtComponents",
        type: "multiselect",
        label: "Which of these made things worse?",
        optionsByCategory: {
          institutional: componentList(true),
          outpatient: componentList(false),
        },
      },
      {
        name: "feltListenedTo",
        type: "scale5",
        label: "Did you feel listened to by staff?",
        leftLabel: "Not at all",
        rightLabel: "Completely",
      },
      {
        name: "treatmentUnderstanding",
        type: "radio",
        label: "Did you understand your treatment plan?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "Somewhat", value: "somewhat" },
          { label: "No", value: "no" },
        ],
      },
    ],
  },

  // 8 ── How It Affected You
  {
    id: "outcomes",
    title: "How It Affected You",
    fields: [
      {
        name: "mentalHealthChange",
        type: "scale5",
        label: "How has your mental health changed since this care?",
        leftLabel: "Much worse",
        rightLabel: "Much better",
      },
      {
        name: "trustChange",
        type: "scale5",
        label:
          "Did this change your trust in mental health providers?",
        leftLabel: "Much less trust",
        rightLabel: "Much more trust",
      },
      {
        name: "avoidance",
        type: "radio",
        label: "Have you avoided future care because of what happened?",
        options: yesNoNotSure(),
      },
      {
        name: "loopBack",
        type: "radio",
        label: "Would you like to focus on another care experience?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "loopBackNote",
        type: "info",
        label:
          "Thank you. You'll be able to add another experience in a future version of this survey.",
        condition: { field: "loopBack", equals: "yes" },
      },
    ],
  },

  // 9 ── Access + Barriers
  {
    id: "barriers",
    title: "Access + Barriers",
    fields: [
      {
        name: "barriers",
        type: "multiselect",
        label: "Which of these were barriers to care?",
        options: [
          { label: "Cost or insurance", value: "cost" },
          { label: "Waitlists", value: "waitlists" },
          { label: "No providers nearby", value: "location" },
          { label: "Discrimination", value: "discrimination" },
          { label: "Transportation", value: "transport" },
          { label: "Prior trauma", value: "trauma" },
          { label: "Legal restrictions", value: "legal" },
          { label: "None of these", value: "none" },
        ],
      },
      {
        name: "deniedCare",
        type: "radio",
        label: "Have you ever been denied care?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "identityImpact",
        type: "radio",
        label: "Did your identity affect how you were treated?",
        options: yesNoNotSure(),
      },
    ],
  },

  // 10 ── Time + Place
  {
    id: "time-place",
    title: "Time + Place",
    fields: [
      {
        name: "stateLocation",
        type: "dropdown",
        label: "Where were you living at the time?",
        options: stateOptions(),
      },
      {
        name: "whenOccurred",
        type: "radio",
        label: "When did this happen?",
        options: [
          { label: "Within the last year", value: "0-1" },
          { label: "1–3 years ago", value: "1-3" },
          { label: "4–6 years ago", value: "4-6" },
          { label: "7+ years ago", value: "7+" },
        ],
      },
      {
        name: "multiState",
        type: "radio",
        label: "Have you received care in more than one state?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
    ],
  },

  // 11 ── Optional Reflection
  // CAM: voice-note / visual-card capture is NOT built. Options below currently
  // do nothing if chosen. Decide: keep as-is, or cut to skip-only for Phase 1.
  {
    id: "reflection",
    title: "Optional Reflection",
    intro:
      "Would you like to leave a message for policymakers, providers, or other patients?",
    fields: [
      {
        name: "reflectionType",
        type: "radio",
        label: "Choose one (optional):",
        options: [
          { label: "Write a short message", value: "text" }, // CAM: swapped voice→text since voice isn't built
          { label: "Skip", value: "skip" },
        ],
      },
      {
        name: "reflectionText",
        type: "text",
        label: "Your message (optional)",
        condition: { field: "reflectionType", equals: "text" },
        placeholder: "Anything you'd like to say…",
        multiline: true,
      },
    ],
  },

  // 12 ── About You
  {
    id: "demographics",
    title: "About You",
    intro: "These help us understand who is most affected. Never tied to your name.",
    fields: [
      {
        name: "age",
        type: "radio",
        label: "How old are you now?",
        options: [
          { label: "Under 18", value: "<18" },
          { label: "18–24", value: "18-24" },
          { label: "25–34", value: "25-34" },
          { label: "35–44", value: "35-44" },
          { label: "45–54", value: "45-54" },
          { label: "55–64", value: "55-64" },
          { label: "65+", value: "65+" },
        ],
      },
      {
        name: "gender",
        type: "multiselect",
        label: "Gender identity",
        options: [
          { label: "Cis woman", value: "cis-woman" },
          { label: "Cis man", value: "cis-man" },
          { label: "Nonbinary / gender non-conforming", value: "nonbinary" },
          { label: "Trans woman", value: "trans-woman" },
          { label: "Trans man", value: "trans-man" },
          { label: "Other", value: "other" },
          { label: "Prefer not to say", value: "prefer-not" },
        ],
      },
      {
        name: "raceEthnicity",
        type: "multiselect",
        label: "Race / ethnicity",
        options: [
          { label: "Black / African American", value: "black" },
          { label: "Latino/a/x", value: "latinx" },
          { label: "White", value: "white" },
          { label: "Asian / Pacific Islander", value: "asian" },
          { label: "Native / Indigenous", value: "indigenous" },
          { label: "Middle Eastern / North African", value: "mena" },
          { label: "Multiracial", value: "multi" },
          { label: "Other", value: "other" },
        ],
      },
      {
        name: "disability",
        type: "radio",
        label: "Do you consider yourself disabled?",
        options: yesNoUnsure(),
      },
      {
        name: "insurance",
        type: "radio",
        label: "What kind of health coverage do you have?",
        options: [
          { label: "Private insurance", value: "private" },
          { label: "Medicaid", value: "medicaid" },
          { label: "Medicare", value: "medicare" },
          { label: "None", value: "none" },
          { label: "Other", value: "other" },
        ],
      },
    ],
  },

  // 13 ── Stay Involved
  {
    id: "follow-up",
    title: "Stay Involved",
    fields: [
      {
        name: "summaryOptIn",
        type: "radio",
        label: "Would you like a summary of the results?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "advocacyOptIn",
        type: "radio",
        label: "Would you like advocacy materials or updates?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "interviewOptIn",
        type: "radio",
        label: "Open to being contacted for a follow-up interview?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ],
      },
      {
        name: "email",
        type: "email",
        label: "Your email address",
        condition: {
          anyOf: ["summaryOptIn", "advocacyOptIn", "interviewOptIn"],
          equals: "yes",
        },
      },
    ],
  },
];

// ── small builders to keep the schema readable ───────────────────────────────
function yesNoUnsure() {
  return [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "I'm not sure", value: "unsure" },
  ];
}
function yesNoNotSure() {
  return [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "Not sure", value: "unsure" },
  ];
}
function countOptions() {
  return [
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4–5", value: "4-5" },
    { label: "6–9", value: "6-9" },
    { label: "10+", value: "10+" },
  ];
}
function componentList(institutional) {
  const base = [
    { label: "Medication", value: "medication" },
    { label: "Therapy or groups", value: "therapy" },
    { label: "Peer support", value: "peer" },
    { label: "Doctors or prescribers", value: "doctors" },
    { label: "Family involvement", value: "family" },
    { label: "Discharge / follow-up planning", value: "discharge" },
  ];
  if (institutional) {
    base.splice(3, 0, { label: "Nurses or aides", value: "nurses" });
  }
  return base;
}
function stateOptions() {
  const states = [
    ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"],
    ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"],
    ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"], ["ID", "Idaho"],
    ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"], ["KS", "Kansas"],
    ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"], ["MD", "Maryland"],
    ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"], ["MS", "Mississippi"],
    ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"],
    ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"], ["NY", "New York"],
    ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"], ["OK", "Oklahoma"],
    ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"],
    ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"],
    ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"], ["WV", "West Virginia"],
    ["WI", "Wisconsin"], ["WY", "Wyoming"], ["DC", "District of Columbia"],
    ["OUS", "Outside the U.S."],
  ];
  return states.map(([value, label]) => ({ value, label }));
}