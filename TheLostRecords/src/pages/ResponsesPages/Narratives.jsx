import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'
import CrisisResources from '@/components/ui/CrisisResources'

const roles = ['Patient', 'Provider', 'Advocate', 'Other']
const themes = [
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
  'Burnout & Moral Injury',
  'System-Level Frustrations',
  'Policy Barriers',
  'Unheard Voices',
  'Other',
]
const sortOptions = ['Excerpt A–Z', 'Excerpt Z–A', 'Role A–Z', 'Role Z–A']

const narratives = [
  {
    id: 1,
    excerpt: 'They took away my clothes and said it was for safety...',
    fullText: 'They took away my clothes and said it was for safety. I had no way to call my family...',
    role: 'Patient',
    tags: ['Psychiatric Hospitalization', 'Involuntary Treatment'],
  },
  {
    id: 2,
    excerpt: "I had 20 clients a day and still couldn't afford rent.",
    fullText: "As a provider, I felt drained and powerless. Insurance companies dictated every move...",
    role: 'Provider',
    tags: ['Burnout & Moral Injury', 'System-Level Frustrations', 'BIPOC Experience'],
  },
  {
    id: 3,
    excerpt: 'We organized a protest after my friend was detained without cause.',
    fullText: "After my friend’s involuntary hold, we launched a grassroots campaign...",
    role: 'Advocate',
    tags: ['Policy Barriers', 'Queer & Trans Care'],
  },
]

export default function Narratives() {
  const [selectedRoles, setSelectedRoles] = useState([])
  const [selectedThemes, setSelectedThemes] = useState([])
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('')

  const handleMultiSelect = (e, setFn) => {
    const values = Array.from(e.target.selectedOptions, (option) => option.value)
    setFn(values)
  }

  const handleClearFilters = () => {
    setSelectedRoles([])
    setSelectedThemes([])
    setSearch('')
    setSortBy('')
  }

  let filteredNarratives = narratives.filter((narrative) => {
    const roleMatch = selectedRoles.length === 0 || selectedRoles.includes(narrative.role)
    const themeMatch =
      selectedThemes.length === 0 ||
      selectedThemes.some((theme) => narrative.tags.includes(theme))
    const searchMatch = search
      ? narrative.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        narrative.fullText.toLowerCase().includes(search.toLowerCase())
      : true
    return roleMatch && themeMatch && searchMatch
  })

  if (sortBy === 'Excerpt A–Z') {
    filteredNarratives.sort((a, b) => a.excerpt.localeCompare(b.excerpt))
  } else if (sortBy === 'Excerpt Z–A') {
    filteredNarratives.sort((a, b) => b.excerpt.localeCompare(a.excerpt))
  } else if (sortBy === 'Role A–Z') {
    filteredNarratives.sort((a, b) => a.role.localeCompare(b.role))
  } else if (sortBy === 'Role Z–A') {
    filteredNarratives.sort((a, b) => b.role.localeCompare(a.role))
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-10 text-ink">
        <div className="mb-8">
          <CrisisResources variant="compact" />
        </div>

        <h1 className="text-3xl font-semibold mb-6 text-accent">Narrative Responses</h1>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm text-muted mb-2">Filter by Role:</label>
            <select
              multiple
              value={selectedRoles}
              onChange={(e) => handleMultiSelect(e, setSelectedRoles)}
              className="w-full bg-surface border border-hairline rounded-lg p-2 h-40 text-ink focus:outline-none focus:border-accent"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-muted mb-2">Filter by Theme:</label>
            <select
              multiple
              value={selectedThemes}
              onChange={(e) => handleMultiSelect(e, setSelectedThemes)}
              className="w-full bg-surface border border-hairline rounded-lg p-2 h-40 text-ink focus:outline-none focus:border-accent"
            >
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-muted mb-2">Search:</label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search narratives..."
              className="w-full bg-surface border border-hairline rounded-lg p-2 text-ink placeholder-faint focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm text-muted mb-2">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-surface border border-hairline rounded-lg p-2 text-ink focus:outline-none focus:border-accent"
            >
              <option value="">Default</option>
              {sortOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted">
            Showing {filteredNarratives.length} stor
            {filteredNarratives.length === 1 ? 'y' : 'ies'}.
          </p>
          <button
            onClick={handleClearFilters}
            className="text-sm text-accent underline hover:text-accent-soft transition"
          >
            Clear All Filters
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNarratives.map((story) => {
            const topTheme = story.tags[0];
            return (
              <div
                key={story.id}
                className="border border-hairline rounded-xl p-5 bg-surface hover:border-accent transition"
              >
                <div className="mb-3 text-lg font-semibold text-ink">
                  {story.role} Story: {topTheme}
                </div>

                <p className="mb-3 text-muted italic text-base leading-snug">
                  "{story.excerpt}"
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-raised text-muted border border-hairline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  )
}
