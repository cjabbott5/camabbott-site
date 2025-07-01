const dummyData = {
  summary: {
    totalResponses: 1248,
    percentHarmed: "74%",
    percentSafe: "26%",
    avgRecoveryTime: "4.6 months",
  },

  settings: [
    { name: "Psych Hospital", safe: 18, harmful: 82 },
    { name: "ER", safe: 26, harmful: 74 },
    { name: "Outpatient Clinic", safe: 63, harmful: 37 },
    { name: "Telehealth", safe: 71, harmful: 29 },
    { name: "Community Program", safe: 42, harmful: 58 },
  ],

  harmTypes: {
    all: [
      { type: "Verbal Abuse", count: 743 },
      { type: "Physical Restraint", count: 512 },
      { type: "Forced Medication", count: 486 },
      { type: "Lack of Informed Consent", count: 604 },
      { type: "Neglect", count: 351 },
      { type: "Other", count: 210 },
    ],
    PsychHospital: [
      { type: "Forced Medication", count: 320 },
      { type: "Physical Restraint", count: 280 },
    ],
    ER: [
      { type: "Neglect", count: 120 },
      { type: "Verbal Abuse", count: 98 },
    ],
    // Add other specific settings as needed
  },

  supports: [
    { name: "Peer Support", value: 430 },
    { name: "Therapy", value: 723 },
    { name: "Community Programs", value: 294 },
    { name: "Medication", value: 512 },
    { name: "Spiritual Practice", value: 157 },
    { name: "None", value: 82 },
  ],

  filters: {
    genderIdentities: ["Trans", "Nonbinary", "Cis", "Other"],
    sexualOrientations: ["Gay/Lesbian", "Bisexual", "Straight", "Queer", "Asexual"],
    races: ["Black", "Latinx", "White", "Asian", "Indigenous", "Multiracial", "Other"],
    disabilities: ["Yes", "No"],
    diagnoses: ["Bipolar", "Depression", "Schizophrenia", "PTSD", "OCD", "Autism", "ADHD"],
    neurodivergence: ["Yes", "No"],
    regions: ["South", "Northeast", "Midwest", "West"],
    urbanRural: ["Urban", "Rural"],
    ageGroups: ["18–24", "25–34", "35–44", "45–54", "55+"],
    timeOfExperience: ["Last Year", "1–5 Years Ago", "5+ Years Ago"],
    settings: ["Psych Hospital", "ER", "Outpatient Clinic", "Telehealth", "Community Program"],
    exposureContext: ["Involuntary", "Voluntary", "Police Involved", "Support Present"],
    recoveryStatus: ["In Recovery", "Not in Recovery"],
    trustInSystem: ["1", "2", "3", "4", "5"],
  },
};

export default dummyData;
