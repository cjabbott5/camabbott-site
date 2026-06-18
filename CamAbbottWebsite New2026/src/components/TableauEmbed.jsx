// ============================================================
//  TABLEAU DASHBOARD EMBED
//  1. Publish your workbook to Tableau Public.
//  2. Click Share → copy the "Embed" URL (ends in :showVizHome=no
//     &:embed=true). Paste it into VIZ_URL below.
//  3. Fill in SOURCES with your real data sources.
// ============================================================

const VIZ_URL = 'PASTE_YOUR_TABLEAU_PUBLIC_EMBED_URL_HERE'

// TODO: replace with your real sources/methodology.
const SOURCES = [
  'SOURCE PLACEHOLDER — e.g. SAMHSA, National Survey on Drug Use and Health (year)',
  'SOURCE PLACEHOLDER — e.g. HRSA, Mental Health Professional Shortage Areas (year)',
  'SOURCE PLACEHOLDER — e.g. U.S. Census / county population data (year)',
]

export default function TableauEmbed({ title = 'U.S. Behavioral Health Unmet-Need Map' }) {
  const ready = VIZ_URL && !VIZ_URL.startsWith('PASTE_')

  return (
    <div className="bg-white border border-line rounded-2xl overflow-hidden">
      <div className="px-6 pt-6 pb-4 border-b border-line">
        <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-brand-rose-deep">Interactive · Data</span>
        <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight mt-1">{title}</h3>
        <p className="text-[0.9rem] text-ink-soft mt-1 max-w-[60ch]">
          The provider-to-patient gap, mapped. This is the evidence behind the argument: need is enormous and unevenly met across the country.
        </p>
      </div>

      {ready ? (
        <div className="relative w-full" style={{ paddingTop: '62%' }}>
          <iframe
            title={title}
            src={VIZ_URL}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      ) : (
        <div className="bg-sand m-6 rounded-xl border border-dashed border-line p-10 text-center">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-soft">Dashboard embed</p>
          <p className="text-ink-soft mt-2 text-sm max-w-[44ch] mx-auto">
            Paste your Tableau Public embed URL into <code className="font-mono text-brand-orange-deep">VIZ_URL</code> in <code className="font-mono">TableauEmbed.jsx</code> to go live.
          </p>
        </div>
      )}

      <div className="px-6 py-5 bg-cream border-t border-line">
        <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] text-ink-soft mb-2">Sources &amp; methodology</p>
        <ul className="text-[0.82rem] text-ink-soft space-y-1 list-disc pl-5">
          {SOURCES.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
    </div>
  )
}