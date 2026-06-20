export const patientSurveySchema = [
  // SECTION 1: Welcome + Consent
  {
    id: "consent",
    title: "Welcome to Lost Records",
    intro: `This anonymous survey collects real stories from people who’ve received institutional mental health care. Your experience matters. Your responses will help change policies and protect future patients. You can stop at any time. No typing is required.`,
    fields: [
      {
        name: "consent",
        type: "radio",
        label: "Do you consent to participate in this survey?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "I’m not sure", value: "unsure" }
        ]
      }
    ]
  },

  // SECTION 2: Care Overview
  {
    id: "care-overview",
    title: "Your Care Settings",
    intro: `Let’s begin by identifying the kinds of mental health care you’ve received. This version of the survey focuses on institutional settings like hospitalization or court-ordered programs.`,
    fields: [
      {
        name: "careSettings",
        type: "multi-select",
        label: "Which of the following care settings have you experienced?",
        options: [
          { label: "Inpatient psychiatric hospitalization", value: "inpatient" },
          { label: "PHP/IOP (Partial Hospitalization / Intensive Outpatient Program)", value: "php" },
          { label: "Court-ordered or police-involved care", value: "court" },
          { label: "Outpatient therapy or psychiatry only", value: "outpatient" },
          { label: "Other (e.g., peer-led, community-based, spiritual)", value: "other" }
        ]
      }
    ]
  },

  // Follow-up frequency questions (conditional)
  {
  id: "care-frequency",
  title: "Repeat Experiences",
  fields: [
    // INPATIENT
    {
      name: "inpatientMultiple",
      type: "radio",
      label: "Have you experienced more than one psychiatric hospitalization?",
      condition: { field: "careSettings", includes: "inpatient" },
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I’m not sure", value: "unsure" }
      ]
    },
    {
      name: "inpatientTotal",
      type: "dropdown",
      label: "How many psychiatric hospitalizations have you had?",
      condition: {
        field: "inpatientMultiple",
        equals: "yes"
      },
      options: [
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4–5", value: "4-5" },
        { label: "6–9", value: "6-9" },
        { label: "10+", value: "10+" }
      ]
    },

    // PHP/IOP
    {
      name: "phpMultiple",
      type: "radio",
      label: "Have you participated in more than one PHP/IOP program?",
      condition: { field: "careSettings", includes: "php" },
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I’m not sure", value: "unsure" }
      ]
    },
    {
      name: "phpTotal",
      type: "dropdown",
      label: "How many PHP/IOP programs have you participated in?",
      condition: {
        field: "phpMultiple",
        equals: "yes"
      },
      options: [
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4–5", value: "4-5" },
        { label: "6–9", value: "6-9" },
        { label: "10+", value: "10+" }
      ]
    },

    // COURT-ORDERED
    {
      name: "courtMultiple",
      type: "radio",
      label: "Have you had more than one episode of court-ordered or police-involved care?",
      condition: { field: "careSettings", includes: "court" },
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "I’m not sure", value: "unsure" }
      ]
    },
    {
      name: "courtTotal",
      type: "dropdown",
      label: "How many court-ordered or police-involved episodes have you had?",
      condition: {
        field: "courtMultiple",
        equals: "yes"
      },
      options: [
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4–5", value: "4-5" },
        { label: "6–9", value: "6-9" },
        { label: "10+", value: "10+" }
      ]
    }
  ]
},

  // SECTION 3A: Select Focus Experience
  {
    id: "focus-experience",
    title: "Focus Experience",
    intro: `You’ve experienced more than one kind of care. For now, we’d like to focus on one specific experience—the one that stands out most to you.`,
    fields: [
      {
        name: "focusType",
        type: "radio",
        label: "Which care experience would you like to focus on?",
        dynamicOptionsFrom: "careSettings",
        optionsMap: {
          inpatient: "Inpatient hospitalization",
          php: "PHP/IOP",
          court: "Court-ordered or police-involved care"
        }
      },
      {
        name: "focusDetail",
        type: "radio",
        label: "Which experience do you want to focus on?",
        condition: {
          field: "focusType",
          hasMultipleExposure: true
        },
        options: [
          { label: "My first experience", value: "first" },
          { label: "My most recent experience", value: "recent" },
          { label: "The most significant experience (positive or negative)", value: "significant" },
          { label: "I’m not sure", value: "unsure" }
        ]
      }
    ]
  },

  // SECTION 4: What Happened
  {
    id: "what-happened",
    title: "What Happened",
    intro: `Let’s talk about what happened during your selected experience.`,
    fields: [
      {
        name: "harmExperiences",
        type: "grid",
        label: "Did you experience any of the following?",
        gridOptions: [
          "Physical restraint",
          "Forced medication",
          "Seclusion or isolation",
          "Strip search or nudity",
          "Verbal abuse",
          "Racial or gender identity-based discrimination",
          "Neglect (e.g., hunger, ignored symptoms)",
          "Loss of belongings",
          "Something else"
        ],
        columns: ["Yes", "No", "Not sure"]
      },
      {
        name: "wasTraumatic",
        type: "radio",
        label: "Would you describe any part of this experience as traumatic?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Not sure", value: "unsure" }
        ]
      },
      {
        name: "emotionalSafety",
        type: "slider",
        label: "Did you feel emotionally safe?",
        min: 0,
        max: 10,
        scaleLabels: ["Not at all", "Completely"]
      }
    ]
  },

  // SECTION 5: What Helped or Didn’t
  {
    id: "care-quality",
    title: "What Helped or Didn’t",
    intro: `Thinking about that same experience, what helped or hurt your recovery?`,
    fields: [
      {
        name: "careComponentsImpact",
        type: "grid",
        label: "How did each of these affect you?",
        gridOptions: [
          "Medication",
          "Therapy or groups",
          "Peer support",
          "Nurses or aides",
          "Doctors or psychiatrists",
          "Rules and policies",
          "Physical environment"
        ],
        columns: ["Helped", "Hurt", "Neutral", "Not applicable"]
      },
      {
        name: "feltListenedTo",
        type: "slider",
        label: "Did you feel listened to by staff?",
        min: 0,
        max: 10,
        scaleLabels: ["Not at all", "Completely"]
      },
      {
        name: "treatmentUnderstanding",
        type: "radio",
        label: "Did you understand your treatment plan?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "Somewhat", value: "somewhat" },
          { label: "No", value: "no" }
        ]
      }
    ]
  },

  // SECTION 6: Outcomes
  {
    id: "outcomes",
    title: "How It Affected You",
    intro: `Let’s look at how that experience affected your life.`,
    fields: [
      {
        name: "mentalHealthChange",
        type: "slider",
        label: "How has your mental health changed since this care?",
        min: -5,
        max: 5,
        scaleLabels: ["Much worse", "Much better"]
      },
      {
        name: "trustChange",
        type: "slider",
        label: "Did this experience increase or decrease your trust in mental health providers?",
        min: 0,
        max: 10,
        scaleLabels: ["Much less trust", "Much more trust"]
      },
      {
        name: "avoidance",
        type: "radio",
        label: "Have you avoided future care because of what happened?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Not sure", value: "unsure" }
        ]
      },
      {
        name: "loopBack",
        type: "radio",
        label: "Would you like to focus on another care experience?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      // TODO(cam): decide loop behavior — Option A (full loop with namespaced
      // answers) vs Option B (defer). Currently implementing Option B.
      {
        name: "loopBackNote",
        type: "info",
        label: "Thanks for letting us know. You'll be able to add another experience in a future version of this survey.",
        condition: { field: "loopBack", equals: "yes" }
      }
    ]
  },

  // SECTION 7: Access + Barriers
  {
    id: "barriers",
    title: "Access + Barriers",
    intro: `Now let’s look at what made it easier—or harder—for you to access care.`,
    fields: [
      {
        name: "barriers",
        type: "multi-select",
        label: "Which of these were barriers to care?",
        options: [
          { label: "Cost or insurance", value: "cost" },
          { label: "Waitlists", value: "waitlists" },
          { label: "No providers nearby", value: "location" },
          { label: "Discrimination", value: "discrimination" },
          { label: "Transportation", value: "transport" },
          { label: "Prior trauma", value: "trauma" },
          { label: "Legal restrictions", value: "legal" },
          { label: "None of these", value: "none" }
        ]
      },
      {
        name: "deniedCare",
        type: "radio",
        label: "Have you ever been denied care?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      {
        name: "identityImpact",
        type: "radio",
        label: "Did your identity affect how you were treated?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Not sure", value: "unsure" }
        ]
      }
    ]
  },

  // SECTION 8: Time + Place
  {
    id: "time-place",
    title: "Time + Place",
    intro: `These questions help us understand where and when care occurred.`,
    fields: [
      {
        name: "stateLocation",
        type: "dropdown",
        label: "Where were you living at the time?",
        options: [
          { label: "Alabama", value: "AL" },
          { label: "Alaska", value: "AK" },
          { label: "Arizona", value: "AZ" },
          { label: "Arkansas", value: "AR" },
          { label: "California", value: "CA" },
          { label: "Colorado", value: "CO" },
          { label: "Connecticut", value: "CT" },
          { label: "Delaware", value: "DE" },
          { label: "Florida", value: "FL" },
          { label: "Georgia", value: "GA" },
          { label: "Hawaii", value: "HI" },
          { label: "Idaho", value: "ID" },
          { label: "Illinois", value: "IL" },
          { label: "Indiana", value: "IN" },
          { label: "Iowa", value: "IA" },
          { label: "Kansas", value: "KS" },
          { label: "Kentucky", value: "KY" },
          { label: "Louisiana", value: "LA" },
          { label: "Maine", value: "ME" },
          { label: "Maryland", value: "MD" },
          { label: "Massachusetts", value: "MA" },
          { label: "Michigan", value: "MI" },
          { label: "Minnesota", value: "MN" },
          { label: "Mississippi", value: "MS" },
          { label: "Missouri", value: "MO" },
          { label: "Montana", value: "MT" },
          { label: "Nebraska", value: "NE" },
          { label: "Nevada", value: "NV" },
          { label: "New Hampshire", value: "NH" },
          { label: "New Jersey", value: "NJ" },
          { label: "New Mexico", value: "NM" },
          { label: "New York", value: "NY" },
          { label: "North Carolina", value: "NC" },
          { label: "North Dakota", value: "ND" },
          { label: "Ohio", value: "OH" },
          { label: "Oklahoma", value: "OK" },
          { label: "Oregon", value: "OR" },
          { label: "Pennsylvania", value: "PA" },
          { label: "Rhode Island", value: "RI" },
          { label: "South Carolina", value: "SC" },
          { label: "South Dakota", value: "SD" },
          { label: "Tennessee", value: "TN" },
          { label: "Texas", value: "TX" },
          { label: "Utah", value: "UT" },
          { label: "Vermont", value: "VT" },
          { label: "Virginia", value: "VA" },
          { label: "Washington", value: "WA" },
          { label: "West Virginia", value: "WV" },
          { label: "Wisconsin", value: "WI" },
          { label: "Wyoming", value: "WY" },
          { label: "District of Columbia", value: "DC" },
          { label: "Outside the U.S.", value: "OUS" },
        ]
      },
      {
        name: "whenOccurred",
        type: "radio",
        label: "When did this experience happen?",
        options: [
          { label: "Within the last year", value: "0-1" },
          { label: "1–3 years ago", value: "1-3" },
          { label: "4–6 years ago", value: "4-6" },
          { label: "7+ years ago", value: "7+" }
        ]
      },
      {
        name: "multiState",
        type: "radio",
        label: "Have you received care in more than one state?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      }
    ]
  },

  // SECTION 9: Optional Reflection
  {
    id: "reflection",
    title: "Optional Reflection",
    intro: `Would you like to share a message for policymakers, providers, or other patients?`,
    fields: [
      {
        name: "reflectionType",
        type: "radio",
        label: "Choose one (optional):",
        options: [
          { label: "Record voice note", value: "voice" },
          { label: "Choose visual card", value: "visual" },
          { label: "Skip", value: "skip" }
        ]
      }
    ]
  },

  // SECTION 10: About You
  {
    id: "demographics",
    title: "About You",
    intro: `These questions help us understand who is most affected. Your identity will never be connected to your name.`,
    fields: [
      {
        name: "age",
        type: "radio",
        label: "What is your age?",
        options: [
          { label: "Under 18", value: "<18" },
          { label: "18–24", value: "18-24" },
          { label: "25–34", value: "25-34" },
          { label: "35–44", value: "35-44" },
          { label: "45–54", value: "45-54" },
          { label: "55–64", value: "55-64" },
          { label: "65+", value: "65+" }
        ]
      },
      {
        name: "gender",
        type: "multi-select",
        label: "Gender Identity",
        options: [
          { label: "Cis Woman", value: "cis-woman" },
          { label: "Cis Man", value: "cis-man" },
          { label: "Nonbinary / gender non-conforming", value: "nonbinary" },
          { label: "Trans Woman", value: "trans-woman" },
          { label: "Trans Man", value: "trans-man" },
          { label: "Other", value: "other" },
          { label: "Prefer not to say", value: "prefer-not" }
        ]
      },
      {
        name: "raceEthnicity",
        type: "multi-select",
        label: "Race / Ethnicity",
        options: [
          { label: "Black / African American", value: "black" },
          { label: "Latino/a/x", value: "latinx" },
          { label: "White", value: "white" },
          { label: "Asian / Pacific Islander", value: "asian" },
          { label: "Native / Indigenous", value: "indigenous" },
          { label: "Middle Eastern / North African", value: "mena" },
          { label: "Multiracial", value: "multi" },
          { label: "Other", value: "other" }
        ]
      },
      {
        name: "disability",
        type: "radio",
        label: "Do you consider yourself disabled?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Unsure", value: "unsure" }
        ]
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
          { label: "Other", value: "other" }
        ]
      }
    ]
  },

  // FINAL: Thank You + Opt-In
  {
    id: "follow-up",
    title: "Stay Involved",
    fields: [
      {
        name: "summaryOptIn",
        type: "radio",
        label: "Would you like to receive a summary of the results?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      {
        name: "advocacyOptIn",
        type: "radio",
        label: "Would you like to receive advocacy materials or updates?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      {
        name: "interviewOptIn",
        type: "radio",
        label: "Are you open to being contacted for a follow-up interview?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" }
        ]
      },
      {
        name: "email",
        type: "email",
        label: "Your email address (only shown if any opt-in is 'yes')",
        condition: {
          anyOf: ["summaryOptIn", "advocacyOptIn", "interviewOptIn"],
          equals: "yes"
        }
      }
    ]
  }
];