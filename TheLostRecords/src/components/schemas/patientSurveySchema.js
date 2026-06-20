// src/components/schemas/patientSurveySchema.js
//
// REDESIGN v3 — research-grade, neutral-first, one question per screen.
//
// Field types in use:
// radio | multiselect | dropdown | email | text | scale5 | breath | info
//
// New schema helpers:
// optional: true        → SurveyEngine shows a visible Skip button
// noneExclusive: true   → selecting "none" clears other multiselect options
// helpText              → small explanatory copy under the field label
//
// Important research design:
// 1. Define one care episode.
// 2. Capture neutral care-quality metrics before harm/safety events.
// 3. Ask about safety/rights events without assuming harm.
// 4. Capture outcomes, barriers, demographics, and follow-up separately.

export const SURVEY_SCHEMA_VERSION = "share-your-stats-v3";

export const patientSurveySchema = [
  // 1 ── Consent
  {
    id: "consent",
    title: "Welcome to Lost Records",
    intro:
      "This anonymous survey collects information about mental health care experiences. Some experiences may have been helpful, harmful, mixed, or neutral. You can stop at any time.",
    fields: [
      {
        name: "consent",
        type: "radio",
        label: "Do you consent to participate in this anonymous survey?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "I'm not sure", value: "unsure" },
        ],
      },
    ],
  },

  // 2 ── Episode definition
  {
    id: "episode-definition",
    title: "Choose One Experience",
    intro:
     "First, tell us what kinds of mental health care you've experienced. After that, we'll ask you to choose one specific experience to focus on.",
    fields: [
      {
        name: "careSettings",
        type: "multiselect",
        label: "Which kinds of mental health care have you experienced?",
        optional: true,
        helpText: "This helps us understand your broader care history.",
        options: [
          { label: "Inpatient psychiatric hospitalization", value: "inpatient" },
          { label: "PHP / IOP", value: "php-iop" },
          { label: "Emergency room or crisis care", value: "er-crisis" },
          { label: "Court-ordered or police-involved care", value: "court-police" },
          { label: "Outpatient therapy", value: "therapy" },
          { label: "Outpatient psychiatry / medication management", value: "psychiatry" },
          { label: "Peer-led or community support", value: "peer-community" },
          { label: "Other", value: "other" },
        ],
      },
      {
  name: "_focusIntro",
  type: "info",
  label:
    "Now choose one experience to focus on. This helps each record describe a single episode of care, instead of mixing multiple experiences together.",
},
      {
        name: "focusType",
        type: "radio",
        label: "Which type of care should this record focus on?",
        optional: true,
        dynamicOptionsFrom: "careSettings",
        optionsMap: {
          inpatient: "Inpatient psychiatric hospitalization",
          "php-iop": "PHP / IOP",
          "er-crisis": "Emergency room or crisis care",
          "court-police": "Court-ordered or police-involved care",
          therapy: "Outpatient therapy",
          psychiatry: "Outpatient psychiatry / medication management",
          "peer-community": "Peer-led or community support",
          other: "Other care experience",
        },
      },
      {
        name: "focusDetail",
        type: "radio",
        label: "Which experience should we focus on?",
        optional: true,
        options: [
          { label: "My most recent experience", value: "recent" },
          { label: "The experience I remember most clearly", value: "clearest" },
          { label: "The experience that affected me most", value: "most-affected" },
          { label: "My first experience", value: "first" },
          { label: "I'm not sure", value: "unsure" },
        ],
      },
      {
        name: "overallExperience",
        type: "radio",
        label: "Overall, how would you describe that experience?",
        optional: true,
        options: [
          { label: "Mostly helpful", value: "mostly-helpful" },
          { label: "Mixed", value: "mixed" },
          { label: "Mostly harmful", value: "mostly-harmful" },
          { label: "Neither helpful nor harmful", value: "neutral" },
          { label: "I'm not sure", value: "unsure" },
        ],
      },
    ],
  },

  // 3 ── Context for statistical adjustment
  {
    id: "episode-context",
    title: "Context",
    intro:
      "These questions help us compare experiences more fairly across different types of care.",
    fields: [
      {
        name: "ageAtExperience",
        type: "radio",
        label: "About how old were you during that experience?",
        optional: true,
        options: [
          { label: "Under 18", value: "<18" },
          { label: "18–25", value: "18-25" },
          { label: "26–40", value: "26-40" },
          { label: "41–64", value: "41-64" },
          { label: "65+", value: "65+" },
          { label: "I'm not sure", value: "unsure" },
        ],
      },
      {
        name: "whenOccurred",
        type: "radio",
        label: "About when did this care experience begin?",
        optional: true,
        options: [
          { label: "Within the last 6 months", value: "0-6m" },
{ label: "6–12 months ago", value: "6-12m" },
{ label: "1–2 years ago", value: "1-2y" },
{ label: "3–5 years ago", value: "3-5y" },
{ label: "6–10 years ago", value: "6-10y" },
{ label: "More than 10 years ago", value: "10y-plus" },
{ label: "I'm not sure", value: "unsure" },
        ],
      },
      {
        name: "stateLocation",
        type: "dropdown",
        label: "Where were you living at the time?",
        optional: true,
        options: stateOptions(),
      },
      {
        name: "careVoluntary",
        type: "radio",
        label: "Was this care voluntary, involuntary, or something else?",
        optional: true,
        options: [
          { label: "Voluntary", value: "voluntary" },
          { label: "Involuntary / held against my will", value: "involuntary" },
          { label: "Pressured or coerced, but not formally involuntary", value: "pressured" },
          { label: "Court-ordered", value: "court-ordered" },
          { label: "I'm not sure", value: "unsure" },
        ],
      },
      {
        name: "careReason",
        type: "radio",
        label: "What best describes why you were receiving care?",
        optional: true,
        options: [
          { label: "Routine or ongoing support", value: "routine" },
          { label: "A mental health crisis", value: "crisis" },
          { label: "Medication support or adjustment", value: "medication" },
          { label: "Required by school, work, court, or family", value: "required" },
          { label: "Something else", value: "other" },
          { label: "Prefer not to say", value: "prefer-not" },
        ],
      },
      {
        name: "careDuration",
        type: "radio",
        label: "About how long did this episode of care last?",
        optional: true,
        options: [
          { label: "Less than 24 hours", value: "<24h" },
{ label: "1–3 days", value: "1-3d" },
{ label: "4–7 days", value: "4-7d" },
{ label: "8–14 days", value: "8-14d" },
{ label: "15–30 days", value: "15-30d" },
{ label: "More than 30 days", value: ">30d" },
{ label: "Ongoing", value: "ongoing" },
{ label: "I'm not sure", value: "unsure" },
        ],
      },
      {
        name: "insuranceAtTime",
        type: "radio",
        label: "What kind of health coverage did you have at the time?",
        optional: true,
        options: insuranceOptions(),
      },
    ],
  },

  {
    id: "breath-quality",
    title: "",
    fields: [
      {
        name: "_breathQuality",
        type: "breath",
        copy:
          "Next, we'll ask about communication, respect, safety, and follow-up. These questions are neutral by design — helpful, harmful, mixed, and unclear experiences all matter.",
      },
    ],
  },

  // 4 ── Neutral care-quality metrics
  {
    id: "care-quality",
    title: "Care Quality",
    intro:
      "These questions help measure care quality in a way that can be compared across settings.",
    fields: [
      {
        name: "treatedWithRespect",
        type: "scale5",
        label: "Were you treated with respect?",
        optional: true,
        leftLabel: "Not at all",
        rightLabel: "Completely",
      },
      {
        name: "feltListenedTo",
        type: "scale5",
        label: "Did staff or providers listen to you?",
        optional: true,
        leftLabel: "Not at all",
        rightLabel: "Completely",
      },
      {
        name: "involvedInDecisions",
        type: "scale5",
        label: "Were you involved in decisions about your care?",
        optional: true,
        leftLabel: "Not at all",
        rightLabel: "Completely",
      },
      {
        name: "treatmentExplained",
        type: "scale5",
        label: "Were treatments, medications, or next steps explained clearly?",
        optional: true,
        leftLabel: "Not at all clear",
        rightLabel: "Completely clear",
      },
      {
        name: "privacyRespected",
        type: "scale5",
        label: "Was your privacy respected?",
        optional: true,
        leftLabel: "Not at all",
        rightLabel: "Completely",
      },
      {
        name: "emotionalSafety",
        type: "scale5",
        label: "Did you feel emotionally safe?",
        optional: true,
        leftLabel: "Not at all safe",
        rightLabel: "Completely safe",
      },
      {
        name: "physicalSafety",
        type: "scale5",
        label: "Did you feel physically safe?",
        optional: true,
        leftLabel: "Not at all safe",
        rightLabel: "Completely safe",
      },
      {
        name: "dischargePlanning",
        type: "scale5",
        label: "Were follow-up plans or next steps handled well?",
        optional: true,
        leftLabel: "Not at all",
        rightLabel: "Very well",
      },
    ],
  },

  // 5 ── Helped / harmed components
  {
    id: "help-harm-components",
    title: "What Helped or Didn't",
    fields: [
      {
        name: "helpedComponents",
        type: "multiselect",
        label: "Which parts of care helped, if any?",
        optional: true,
        noneExclusive: true,
        optionsByCategory: {
          institutional: componentList(true),
          outpatient: componentList(false),
        },
      },
      {
        name: "hurtComponents",
        type: "multiselect",
        label: "Which parts of care made things worse, if any?",
        optional: true,
        noneExclusive: true,
        optionsByCategory: {
          institutional: componentList(true),
          outpatient: componentList(false),
        },
      },
    ],
  },

  {
    id: "breath-safety",
    title: "",
    fields: [
      {
        name: "_breathSafety",
        type: "breath",
        copy:
          "Next, we'll ask whether specific safety or rights concerns occurred. Select only what fits. You can skip anything.",
      },
    ],
  },

  // 6 ── Safety and rights events
  {
    id: "safety-rights-events",
    title: "Safety + Rights",
    fields: [
      {
        name: "safetyEvents",
        type: "multiselect",
        label: "Did any of these occur during this experience?",
        optional: true,
        noneExclusive: true,
        optionsByCategory: {
          institutional: [
            { label: "Physical restraint", value: "restraint" },
            { label: "Seclusion or isolation", value: "seclusion" },
            { label: "Medication given against my will", value: "forced-meds" },
            { label: "Threats, intimidation, or verbal abuse", value: "threats-verbal" },
            { label: "Strip search, forced nudity, or invasive search", value: "strip-search" },
            { label: "Police, security, or handcuffs involved", value: "police-security" },
            { label: "Denied food, water, bathroom, sleep, or hygiene", value: "basic-needs" },
            { label: "Ignored medical needs or physical pain", value: "medical-needs-ignored" },
            { label: "Confidentiality or privacy breach", value: "privacy-breach" },
            { label: "Unsafe discharge or no follow-up plan", value: "unsafe-discharge" },
            { label: "Discrimination or identity-based mistreatment", value: "discrimination" },
            { label: "Held longer than seemed necessary", value: "held-longer" },
            { label: "None of these", value: "none" },
            { label: "Not sure", value: "unsure" },
          ],
          outpatient: [
            { label: "Dismissed, minimized, or not believed", value: "dismissed" },
            { label: "Medication mishandled", value: "med-mishandled" },
            { label: "Misdiagnosis or diagnostic harm", value: "misdiagnosis" },
            { label: "Boundary violation", value: "boundary" },
            { label: "Confidentiality or privacy breach", value: "privacy-breach" },
            { label: "Shamed, judged, or blamed", value: "shamed" },
            { label: "Pressured into treatment I did not want", value: "pressured-treatment" },
            { label: "Could not get follow-up when needed", value: "no-followup" },
            { label: "Discrimination or identity-based mistreatment", value: "discrimination" },
            { label: "None of these", value: "none" },
            { label: "Not sure", value: "unsure" },
          ],
        },
        allowOther: true,
      },
      {
        name: "safetyEventFrequency",
        type: "radio",
        label: "How often did the most serious concern happen?",
        optional: true,
        condition: { field: "safetyEvents", hasAnyExcept: ["none", "unsure"] },
        options: [
          { label: "Once", value: "once" },
          { label: "More than once", value: "multiple" },
          { label: "Repeatedly / throughout care", value: "repeated" },
          { label: "I'm not sure", value: "unsure" },
        ],
      },
      {
        name: "safetyOther",
        type: "text",
        label: "Anything else you want to name? Optional.",
        optional: true,
        condition: { field: "safetyEvents", includes: "other" },
        placeholder: "In your own words…",
      },
      {
        name: "wasTraumatic",
        type: "radio",
        label: "Would you describe any part of this experience as traumatic?",
        optional: true,
        options: yesNoNotSure(),
      },
    ],
  },

  // 7 ── Outcomes
  {
    id: "outcomes",
    title: "Outcomes",
    intro:
      "These questions help show what happened after care — including both improvement and harm.",
    fields: [
      {
        name: "mentalHealthChange",
        type: "scale5",
        label: "How did your mental health change after this care?",
        optional: true,
        leftLabel: "Much worse",
        rightLabel: "Much better",
      },
      {
        name: "trustChange",
        type: "scale5",
        label: "How did this affect your trust in mental health providers?",
        optional: true,
        leftLabel: "Much less trust",
        rightLabel: "Much more trust",
      },
      {
        name: "futureCareAvoidance",
        type: "radio",
        label: "Have you avoided future care because of this experience?",
        optional: true,
        options: yesNoNotSure(),
      },
      {
        name: "followUpObtained",
        type: "radio",
        label: "Were you able to get follow-up care when you needed it?",
        optional: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "Somewhat", value: "somewhat" },
          { label: "No", value: "no" },
          { label: "I did not need follow-up care", value: "not-needed" },
          { label: "Not sure", value: "unsure" },
        ],
      },
      {
        name: "lifeImpact",
        type: "multiselect",
        label: "Did this experience affect any of these parts of your life?",
        optional: true,
        noneExclusive: true,
        options: [
          { label: "Work or school", value: "work-school" },
          { label: "Housing", value: "housing" },
          { label: "Finances", value: "finances" },
          { label: "Relationships or family", value: "relationships" },
          { label: "Physical health", value: "physical-health" },
          { label: "Legal status or court involvement", value: "legal" },
          { label: "None of these", value: "none" },
          { label: "Not sure", value: "unsure" },
        ],
      },
      {
        name: "complaintFiled",
        type: "radio",
        label: "Did you file a complaint, grievance, report, or appeal?",
        optional: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "I wanted to but did not know how", value: "wanted-no-knowledge" },
          { label: "I was afraid to", value: "afraid" },
          { label: "Not sure", value: "unsure" },
        ],
      },
    ],
  },

  // 8 ── Access barriers
  {
    id: "barriers",
    title: "Access + Barriers",
    fields: [
      {
        name: "barriers",
        type: "multiselect",
        label: "Which of these were barriers to getting care?",
        optional: true,
        noneExclusive: true,
        options: [
          { label: "Cost or insurance", value: "cost" },
          { label: "Waitlists", value: "waitlists" },
          { label: "No providers nearby", value: "location" },
          { label: "Transportation", value: "transport" },
          { label: "Appointment hours or scheduling", value: "scheduling" },
          { label: "Language access", value: "language" },
          { label: "Discrimination", value: "discrimination" },
          { label: "Prior trauma with care systems", value: "prior-trauma" },
          { label: "Fear of being hospitalized or coerced", value: "fear-coercion" },
          { label: "Legal restrictions", value: "legal" },
          { label: "Not knowing where to go", value: "navigation" },
          { label: "None of these", value: "none" },
          { label: "Not sure", value: "unsure" },
        ],
      },
      {
        name: "deniedCare",
        type: "radio",
        label: "Have you ever been denied mental health care you tried to get?",
        optional: true,
        options: yesNoNotSure(),
      },
      {
        name: "identityImpact",
        type: "radio",
        label: "Do you think your identity affected how you were treated?",
        optional: true,
        options: yesNoNotSure(),
      },
    ],
  },

  // 9 ── Optional reflection
  {
    id: "reflection",
    title: "Optional Reflection",
    intro:
      "You can leave this blank. Short reflections may help explain what the numbers cannot.",
    fields: [
      {
        name: "reflectionText",
        type: "text",
        label: "Is there anything you want policymakers, providers, or other patients to understand?",
        optional: true,
        placeholder: "Anything you'd like to say…",
        multiline: true,
      },
    ],
  },

  // 10 ── Demographics
  {
    id: "demographics",
    title: "About You",
    intro:
      "These optional questions help identify who is most affected. They are never tied to your name.",
    fields: [
      {
        name: "currentAge",
        type: "radio",
        label: "How old are you now?",
        optional: true,
        options: [
          { label: "Under 18", value: "<18" },
          { label: "18–24", value: "18-24" },
          { label: "25–34", value: "25-34" },
          { label: "35–44", value: "35-44" },
          { label: "45–54", value: "45-54" },
          { label: "55–64", value: "55-64" },
          { label: "65+", value: "65+" },
          { label: "Prefer not to say", value: "prefer-not" },
        ],
      },
      {
        name: "gender",
        type: "multiselect",
        label: "Gender identity",
        optional: true,
        noneExclusive: true,
        options: [
          { label: "Cis woman", value: "cis-woman" },
          { label: "Cis man", value: "cis-man" },
          { label: "Nonbinary / gender non-conforming", value: "nonbinary" },
          { label: "Trans woman", value: "trans-woman" },
          { label: "Trans man", value: "trans-man" },
          { label: "Another identity", value: "other" },
          { label: "Prefer not to say", value: "prefer-not" },
        ],
      },
      {
        name: "raceEthnicity",
        type: "multiselect",
        label: "Race / ethnicity",
        optional: true,
        noneExclusive: true,
        options: [
          { label: "Black / African American", value: "black" },
          { label: "Latino/a/x or Hispanic", value: "latinx" },
          { label: "White", value: "white" },
          { label: "Asian / Pacific Islander", value: "asian-pacific" },
          { label: "Native / Indigenous", value: "indigenous" },
          { label: "Middle Eastern / North African", value: "mena" },
          { label: "Multiracial", value: "multi" },
          { label: "Another race or ethnicity", value: "other" },
          { label: "Prefer not to say", value: "prefer-not" },
        ],
      },
      {
        name: "disability",
        type: "radio",
        label: "Do you consider yourself disabled?",
        optional: true,
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "I'm not sure", value: "unsure" },
          { label: "Prefer not to say", value: "prefer-not" },
        ],
      },
      {
        name: "currentInsurance",
        type: "radio",
        label: "What kind of health coverage do you have now?",
        optional: true,
        options: insuranceOptions(),
      },
    ],
  },

  // 11 ── Stay involved
  {
    id: "follow-up",
    title: "Stay Involved",
    intro:
      "This part is separate from your anonymous survey answers. Only share contact information if you want updates or follow-up.",
    fields: [
      {
        name: "summaryOptIn",
        type: "radio",
        label: "Would you like a summary of the results?",
        optional: true,
        options: yesNo(),
      },
      {
        name: "advocacyOptIn",
        type: "radio",
        label: "Would you like advocacy materials or updates?",
        optional: true,
        options: yesNo(),
      },
      {
        name: "interviewOptIn",
        type: "radio",
        label: "Would you be open to a follow-up interview?",
        optional: true,
        options: yesNo(),
      },
      {
        name: "email",
        type: "email",
        label: "Email address",
        condition: {
          anyOf: ["summaryOptIn", "advocacyOptIn", "interviewOptIn"],
          equals: "yes",
        },
        placeholder: "you@example.com",
      },
    ],
  },
];

// ── builders ────────────────────────────────────────────────────────────────

function yesNo() {
  return [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
}

function yesNoNotSure() {
  return [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "Not sure", value: "unsure" },
  ];
}

function insuranceOptions() {
  return [
    { label: "Private insurance", value: "private" },
    { label: "Medicaid", value: "medicaid" },
    { label: "Medicare", value: "medicare" },
    { label: "Military / VA coverage", value: "military-va" },
    { label: "No insurance", value: "none" },
    { label: "Other", value: "other" },
    { label: "Not sure", value: "unsure" },
    { label: "Prefer not to say", value: "prefer-not" },
  ];
}

function componentList(institutional) {
  const base = [
    { label: "Medication", value: "medication" },
    { label: "Therapy or groups", value: "therapy-groups" },
    { label: "Peer support", value: "peer" },
    { label: "Doctors or prescribers", value: "doctors" },
    { label: "Family involvement", value: "family" },
    { label: "Discharge / follow-up planning", value: "discharge" },
    { label: "None of these", value: "none" },
    { label: "Not sure", value: "unsure" },
  ];

  if (institutional) {
    base.splice(3, 0, { label: "Nurses or aides", value: "nurses-aides" });
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
    ["UNSURE", "Not sure"],
    ["PREFER_NOT", "Prefer not to say"],
  ];

  return states.map(([value, label]) => ({ value, label }));
}