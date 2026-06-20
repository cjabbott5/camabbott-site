import React, { useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import CrisisResources from "@/components/ui/CrisisResources";
import { Link, useNavigate } from "react-router-dom";

const roles = ["Patient", "Provider", "Advocate", "Other"];

const tagOptionsByRole = {
  Patient: [
    "Psychiatric Hospitalization",
    "Diagnosis Journey",
    "Involuntary Treatment",
    "Medication Side Effects",
    "Therapy Experience",
    "Insurance Denial",
    "Crisis Response",
    "Queer & Trans Care",
    "BIPOC Experience",
    "Disability & Accommodation",
    "Stigma & Shame",
    "Youth & Family Dynamics",
    "Recovery & Resilience",
    "Other",
  ],
  Provider: [
    "Burnout & Moral Injury",
    "Staffing Shortages",
    "Underfunded Systems",
    "Insurance Constraints",
    "Training & Education Gaps",
    "Crisis Protocols",
    "Trauma-Informed Care",
    "Working with Queer & Trans Clients",
    "Cultural Competency",
    "Suicidality & Risk Management",
    "System-Level Frustrations",
    "Hopeful Outcomes",
    "Other",
  ],
  Advocate: [
    "Policy Barriers",
    "Lived Experience Leadership",
    "Campaign Wins",
    "Systemic Stigma",
    "Peer Support Models",
    "Coalition Building",
    "Queer & Trans Justice",
    "Disability Justice",
    "Criminal Legal Intersection",
    "Youth Organizing",
    "Language Access",
    "Grassroots vs Institutional Advocacy",
    "Other",
  ],
  Other: [
    "Family Member Story",
    "Educator Experience",
    "Friend or Ally Perspective",
    "Observing Harm in Systems",
    "Grief & Loss",
    "System Confusion",
    "Unheard Voices",
    "Gender & Mental Health",
    "Race & Mental Health",
    "Outside Looking In",
    "Other",
  ],
};

const prompts = {
  Patient: [
    "Describe a turning point in your mental healthcare journey.",
    "What barriers have you faced accessing care?",
    "What support (if any) made a difference for you?",
  ],
  Provider: [
    "Describe a moment that challenged your understanding of patient care.",
    "What systemic limitations impact your ability to serve?",
    "What changes do you wish you could make in the system?",
  ],
  Advocate: [
    "What inspired you to become an advocate?",
    "Describe a moment where advocacy made a difference.",
    "What do you want policy leaders to hear?",
  ],
  Other: [
    "Share your relationship with the mental healthcare system.",
    "What stories do you think are being overlooked?",
    "What would you want the world to understand?",
  ],
};

const primaryBtn =
  "inline-flex justify-center bg-accent text-accent-ink font-semibold px-6 py-3 rounded-xl text-center transition hover:bg-accent-soft hover:text-accent-ink hover:no-underline";
const secondaryBtn =
  "inline-flex justify-center border border-hairline text-ink font-semibold px-6 py-3 rounded-xl text-center transition hover:border-accent hover:text-ink hover:no-underline";

export default function ShareYourStory() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [response, setResponse] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [consentResearch, setConsentResearch] = useState(false);
  const [consentContact, setConsentContact] = useState(false);
  const [consentPublic, setConsentPublic] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);

  const availableTags = useMemo(() => tagOptionsByRole[role] || [], [role]);

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const validate = () => {
    if (!role) return "Please select your role.";
    if (!response.trim()) return "Please write your story before submitting.";
    if (!consentResearch) return "Please confirm consent for research/advocacy use to submit.";
    if (consentContact && !email.trim()) return "Email is required if you want to be contacted.";
    return "";
  };

  const handleSubmit = async () => {
    setError("");
    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        role,
        story: response.trim(),
        tags: selectedTags,
        name: name.trim() || null,
        email: email.trim() || null,
        consent: {
          research: consentResearch,
          contactOk: consentContact,
          publicOk: consentPublic,
        },
        status: "pending",
      };

      const res = await fetch("/api/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Submission failed.");
      }

      const data = await res.json();
      setSuccess({ id: data.id, editUrl: data.editUrl });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setError(e?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-semibold mb-4 text-accent">Story received</h1>
          <p className="text-muted leading-relaxed mb-6">
            Your submission has been saved. To protect contributors and keep the archive trustworthy,
            stories appear publicly after a brief review.
          </p>

          <div className="bg-surface border border-hairline rounded-xl p-6 mb-8">
            <p className="text-ink font-semibold mb-2">Save this private edit link</p>
            <p className="text-muted text-sm mb-4">
              This link lets you edit your submission later without creating an account.
              Keep it private.
            </p>
            <div className="break-all text-accent underline">
              <a href={success.editUrl}>{success.editUrl}</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/responses/narratives" className={secondaryBtn}>
              View Narratives
            </Link>
            <button
              onClick={() => navigate("/collection")}
              className={primaryBtn}
            >
              Back to Contribute
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-8">
          <CrisisResources variant="compact" />
        </div>

        <h1 className="text-3xl font-semibold mb-6 text-accent">Share Your Story</h1>

        <div className="mb-8 space-y-4 text-muted text-sm">
          <p>
            This platform exists to collect and elevate real stories from across the mental health
            landscape — whether you're a patient, provider, advocate, or someone with insight to share.
          </p>
          <p>Submissions are voluntary and anonymous unless you choose otherwise. Contributors may receive:</p>
          <ul className="list-disc list-inside pl-4">
            <li>A copy of their story for personal records</li>
            <li>The option to be featured on the "Responses" page</li>
            <li>An opportunity to support data-driven reform and advocacy efforts</li>
          </ul>
          <p>
            Our goal is to bring these stories to the people who can make a difference — decision makers,
            clinicians, policymakers — and to do so with clarity, compassion, and purpose. See our vision on the{" "}
            <Link to="/vision/future" className="text-accent hover:text-accent-soft">
              About the Future
            </Link>{" "}
            page.
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-danger/10 border border-danger/40 text-danger rounded-xl p-4">
            {error}
          </div>
        )}

        <div className="mb-6">
          <label className="block text-sm text-muted mb-2">What role best describes you?</label>
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setSelectedTags([]);
            }}
            className="w-full bg-surface text-ink border border-hairline rounded-lg p-2 focus:outline-none focus:border-accent"
          >
            <option value="">Select your role</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {role && (
          <>
            <div className="mb-6">
              <label className="block text-sm text-muted mb-2">Reflection Prompts (optional):</label>
              <ul className="list-disc list-inside text-muted mb-4">
                {prompts[role].map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>

              <label className="block text-sm text-muted mb-2">Your Story:</label>
              <textarea
                placeholder="Share what you've lived. What you've seen. What others need to hear."
                rows={10}
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                className="w-full bg-surface text-ink border border-hairline rounded-lg p-3 placeholder-faint focus:outline-none focus:border-accent"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm text-muted mb-2">
                What themes or topics does your story include? (select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <label
                    key={tag}
                    className={`px-3 py-1 text-sm border rounded-lg cursor-pointer transition ${
                      selectedTags.includes(tag)
                        ? "bg-accent border-accent text-accent-ink"
                        : "bg-surface border-hairline text-muted hover:border-accent"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={tag}
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagToggle(tag)}
                      className="hidden"
                    />
                    {tag}
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="mb-6">
          <label className="block text-sm text-muted mb-2">Your name (optional):</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-surface text-ink border border-hairline rounded-lg p-2 focus:outline-none focus:border-accent"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm text-muted mb-2">Your email (optional):</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-surface text-ink border border-hairline rounded-lg p-2 focus:outline-none focus:border-accent"
          />
          {consentContact && !email.trim() && (
            <p className="text-xs text-danger mt-2">Email is required if you want follow-up contact.</p>
          )}
        </div>

        <div className="mb-6 space-y-2 text-sm text-muted">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 accent-accent"
              checked={consentResearch}
              onChange={(e) => setConsentResearch(e.target.checked)}
              required
            />
            <span>
              I consent to my story being used for anonymous research, advocacy, and publication purposes,
              as outlined on the{" "}
              <Link to="/vision/future" className="text-accent hover:text-accent-soft">
                About the Future
              </Link>{" "}
              page.
            </span>
          </label>

          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 accent-accent"
              checked={consentContact}
              onChange={(e) => setConsentContact(e.target.checked)}
            />
            <span>I am open to being contacted if my story is selected for spotlight or follow-up (email required).</span>
          </label>

          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              className="mt-1 accent-accent"
              checked={consentPublic}
              onChange={(e) => setConsentPublic(e.target.checked)}
            />
            <span>I agree to have my story publicly featured on the "Responses" page (you may remain anonymous).</span>
          </label>
        </div>

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="bg-accent hover:bg-accent-soft disabled:opacity-60 text-accent-ink font-semibold px-6 py-3 rounded-xl transition"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </Layout>
  );
}
