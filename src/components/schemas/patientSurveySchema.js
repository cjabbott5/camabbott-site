export const patientSurveySchema = [
  {
    id: "care-duration",
    title: "How long have you been receiving mental health care?",
    fields: [
      {
        name: "careDuration",
        type: "radio",
        label: "Please select a time range:",
        options: [
          { label: "Less than 1 year", value: "<1" },
          { label: "1–3 years", value: "1-3" },
          { label: "3–5 years", value: "3-5" },
          { label: "5–10 years", value: "5-10" },
          { label: "More than 10 years", value: ">10" }
        ]
      }
    ]
  },
  {
    id: "confidence-rating",
    title: "How confident are you navigating the mental healthcare system?",
    fields: [
      {
        name: "systemConfidence",
        type: "rating",
        label: "Rate from 1 (lost) to 5 (confident):"
      }
    ]
  },
  {
    id: "settings-used",
    title: "What settings have you received mental health care in?",
    fields: [
      {
        name: "careSettings",
        type: "multi-select",
        label: "Select all that apply:",
        options: [
          { label: "Outpatient therapy", value: "outpatient" },
          { label: "Inpatient hospital", value: "inpatient" },
          { label: "Crisis center", value: "crisis" },
          { label: "Emergency Room", value: "er" },
          { label: "Partial/Intensive Program (PHP/IOP)", value: "php" },
          { label: "School counseling", value: "school" },
          { label: "Other", value: "other" }
        ]
      }
    ]
  },
  {
    id: "demographics",
    title: "Tell us a little about you (optional)",
    fields: [
      {
        name: "genderIdentity",
        type: "multi-select",
        label: "Gender Identity",
        options: [
          { label: "Woman", value: "woman" },
          { label: "Man", value: "man" },
          { label: "Nonbinary", value: "nonbinary" },
          { label: "Transmasc", value: "transmasc" },
          { label: "Transfem", value: "transfem" },
          { label: "Other", value: "other" }
        ]
      },
      {
        name: "race",
        type: "multi-select",
        label: "Race / Ethnicity",
        options: [
          { label: "Black", value: "black" },
          { label: "Latine / Hispanic", value: "latine" },
          { label: "White", value: "white" },
          { label: "Asian", value: "asian" },
          { label: "Indigenous", value: "indigenous" },
          { label: "Middle Eastern / SWANA", value: "mena" },
          { label: "Mixed", value: "mixed" },
          { label: "Other", value: "other" }
        ]
      }
    ]
  }
];

export function generateSettingFollowUps(settings = []) {
  return settings.map((setting) => ({
    id: `review-${setting}`,
    title: `Your experience in ${settingLabel(setting)}`,
    fields: [
      {
        name: `healingLevel-${setting}`,
        type: "rating",
        label: "Was this experience more healing or more harmful?",
        scaleLabels: ["Harmful", "Neutral", "Healing"]
      },
      {
        name: `qualityRating-${setting}`,
        type: "rating",
        label: "Overall quality of care (1–5):"
      },
      {
        name: `feltHeard-${setting}`,
        type: "radio",
        label: "Did you feel heard and understood?",
        options: [
          { label: "Yes", value: "yes" },
          { label: "Sometimes", value: "sometimes" },
          { label: "No", value: "no" }
        ]
      },
      {
        name: `notes-${setting}`,
        type: "textarea",
        label: "Anything else you’d like to share about this setting? (optional)"
      }
    ]
  }));
}

function settingLabel(value) {
  const labels = {
    outpatient: "Outpatient Therapy",
    inpatient: "Inpatient Hospital",
    crisis: "Crisis Center",
    er: "Emergency Room",
    php: "Partial/Intensive Program (PHP/IOP)",
    school: "School Counseling",
    other: "Other Setting"
  };
  return labels[value] || value;
}
