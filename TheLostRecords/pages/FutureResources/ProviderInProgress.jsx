import Layout from '@/components/layout/Layout'

export default function ProviderInProgress() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 text-white">
        <h1 className="text-3xl font-bold text-sky-400 mb-4">Provider Resources (In Progress)</h1>
        <p className="text-zinc-300 mb-6">
          We're building new frameworks and pilot tools for providers committed to ethical, inclusive mental health care.
          Feedback and pilot partnerships welcome.
        </p>
        {/* Include contact form or expression of interest area */}
      </div>
    </Layout>
  )
}