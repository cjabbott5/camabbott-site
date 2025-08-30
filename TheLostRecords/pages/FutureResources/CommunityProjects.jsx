import Layout from '@/components/layout/Layout'

export default function OpenCommunityProjects() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 text-white">
        <h1 className="text-3xl font-bold text-sky-400 mb-4">Open Community Projects</h1>
        <p className="text-zinc-300 mb-6">
          These projects are co-created and open to contribution. If you're interested in volunteering, submitting ideas,
          or collaborating, we’d love to hear from you.
        </p>
        {/* Add links to GitHub, Airtable signups, or Notion hubs */}
      </div>
    </Layout>
  )
}