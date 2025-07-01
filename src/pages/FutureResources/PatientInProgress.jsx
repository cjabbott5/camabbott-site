import Layout from '@/components/layout/Layout'

export default function PatientInProgress() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 text-white">
        <h1 className="text-3xl font-bold text-sky-400 mb-4">Patient Resources (In Progress)</h1>
        <p className="text-zinc-300 mb-6">
          These resources are actively being developed. We're inviting feedback from patients with lived experience to ensure accuracy,
          usability, and emotional resonance.
        </p>
        {/* Add a sign-up form or feedback loop for users to participate */}
      </div>
    </Layout>
  )
}