import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'

const roles = ['Patient', 'Provider', 'Advocate', 'Other']

const tagOptionsByRole = {
  Patient: [
    'Psychiatric Hospitalization',
    'Diagnosis Journey',
    'Involuntary Treatment',
    'Medication Side Effects',
    'Therapy Experience',
    'Insurance Denial',
    'Crisis Response',
    'Queer & Trans Care',
    'BIPOC Experience',
    'Disability & Accommodation',
    'Stigma & Shame',
    'Youth & Family Dynamics',
    'Recovery & Resilience',
    'Other',
  ],
  Provider: [
    'Burnout & Moral Injury',
    'Staffing Shortages',
    'Underfunded Systems',
    'Insurance Constraints',
    'Training & Education Gaps',
    'Crisis Protocols',
    'Trauma-Informed Care',
    'Working with Queer & Trans Clients',
    'Cultural Competency',
    'Suicidality & Risk Management',
    'System-Level Frustrations',
    'Hopeful Outcomes',
    'Other',
  ],
  Advocate: [
    'Policy Barriers',
    'Lived Experience Leadership',
    'Campaign Wins',
    'Systemic Stigma',
    'Peer Support Models',
    'Coalition Building',
    'Queer & Trans Justice',
    'Disability Justice',
    'Criminal Legal Intersection',
    'Youth Organizing',
    'Language Access',
    'Grassroots vs Institutional Advocacy',
    'Other',
  ],
  Other: [
    'Family Member Story',
    'Educator Experience',
    'Friend or Ally Perspective',
    'Observing Harm in Systems',
    'Grief & Loss',
    'System Confusion',
    'Unheard Voices',
    'Gender & Mental Health',
    'Race & Mental Health',
    'Outside Looking In',
    'Other',
  ],
}

const prompts = {
  Patient: [
    'Describe a turning point in your mental healthcare journey.',
    'What barriers have you faced accessing care?',
    'What support (if any) made a difference for you?',
  ],
  Provider: [
    'Describe a moment that challenged your understanding of patient care.',
    'What systemic limitations impact your ability to serve?',
    'What changes do you wish you could make in the system?',
  ],
  Advocate: [
    'What inspired you to become an advocate?',
    'Describe a moment where advocacy made a difference.',
    'What do you want policy leaders to hear?',
  ],
  Other: [
    'Share your relationship with the mental healthcare system.',
    'What stories do you think are being overlooked?',
    'What would you want the world to understand?',
  ],
}

export default function ShareYourStory() {
  const [role, setRole] = useState('')
  const [response, setResponse] = useState('')
  const [selectedTags, setSelectedTags] = useState([])

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold mb-6 text-sky-300">Share Your Story</h1>

        <div className="mb-8 space-y-4 text-zinc-300 text-sm">
          <p>
            This platform exists to collect and elevate real stories from across the mental health
            landscape—whether you're a patient, provider, advocate, or someone with insight to
            share.
          </p>
          <p>
            Submissions are voluntary and anonymous unless you choose otherwise. Contributors will
            receive:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>A copy of their story for personal records</li>
            <li>The option to be featured on the “Responses” page</li>
            <li>An opportunity to support data-driven reform and advocacy efforts</li>
          </ul>
          <p>
            Our goal is to bring these stories to the people who can make a difference—decision
            makers, clinicians, policymakers—and to do so with clarity, compassion, and purpose. See
            our vision on the{' '}
            <a href="/vision/future" className="text-sky-300 underline">
              About the Future
            </a>{' '}
            page.
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-sm text-zinc-400 mb-2">What role best describes you?</label>
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value)
              setSelectedTags([]) // Reset tags on role change
            }}
            className="w-full bg-zinc-800 text-white border border-zinc-700 rounded p-2"
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
              <label className="block text-sm text-zinc-400 mb-2">
                Reflection Prompts (optional):
              </label>
              <ul className="list-disc list-inside text-zinc-300 mb-4">
                {prompts[role].map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>

              <label className="block text-sm text-zinc-400 mb-2">Your Story:</label>
              <textarea
                placeholder="Share what you've lived. What you've seen. What others need to hear."
                rows={10}
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                className="w-full bg-zinc-800 text-white border border-zinc-700 rounded p-3"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm text-zinc-400 mb-2">
                What themes or topics does your story include? (select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {(tagOptionsByRole[role] || []).map((tag) => (
                  <label
                    key={tag}
                    className={`px-3 py-1 text-sm border rounded cursor-pointer transition ${
                      selectedTags.includes(tag)
                        ? 'bg-sky-600 border-sky-500 text-white'
                        : 'bg-zinc-800 border-zinc-600 text-zinc-300 hover:border-sky-400'
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
          <label className="block text-sm text-zinc-400 mb-2">Your name (optional):</label>
          <input
            type="text"
            className="w-full bg-zinc-800 text-white border border-zinc-700 rounded p-2"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm text-zinc-400 mb-2">Your email (optional):</label>
          <input
            type="email"
            className="w-full bg-zinc-800 text-white border border-zinc-700 rounded p-2"
          />
        </div>

        <div className="mb-6 space-y-2 text-sm text-zinc-300">
  <label className="flex items-start gap-2">
    <input type="checkbox" className="mt-1" required />
    <span>
      I consent to my story being used for anonymous research, advocacy, and publication purposes,
      as outlined on the{' '}
      <a href="/vision/future" className="underline text-sky-300">
        About the Future
      </a>{' '}
      page.
    </span>
  </label>

  <label className="flex items-start gap-2">
    <input type="checkbox" className="mt-1" />
    <span>
      I am open to being contacted if my story is selected for spotlight or follow-up (email
      required).
    </span>
  </label>

  <label className="flex items-start gap-2">
    <input type="checkbox" className="mt-1" />
    <span>
      I agree to have my story publicly featured on the “Responses” page (you may remain anonymous).
    </span>
  </label>
</div>


        <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-2 rounded">
          Submit
        </button>
      </div>
    </Layout>
  )
}
