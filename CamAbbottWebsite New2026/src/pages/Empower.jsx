import { useState } from 'react'
import ResourceLibrary from '../components/ResourceLibrary'
import PdfModal from '../components/PdfModal'
import { empowerItems, empowerCategories } from '../data/library'

export default function Empower() {
  const [pdf, setPdf] = useState(null)
  return (
    <div className="font-sans text-ink">
      <header className="max-w-6xl mx-auto px-7 pt-20 pb-10">
        <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">Empower</p>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-4 mb-5">Take control of your care.</h1>
        <div className="spectrum h-1 w-full max-w-[220px] rounded-full mb-7" />
        <p className="text-lg text-ink-soft max-w-[60ch]">
          Understanding only matters when it turns into action. These are the tools — guides, trackers, scripts, and plans — for directing your own care, knowing your rights, and getting through the hard parts with something to hold onto.
        </p>
      </header>

      {/* interactive showpiece teaser — swap for the real tool when built */}
      <section className="max-w-6xl mx-auto px-7 pb-14">
        <div className="relative bg-plum text-cream rounded-2xl p-8 md:p-10 overflow-hidden">
          <div className="spectrum h-1 w-full max-w-[180px] rounded-full mb-5" />
          <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#E79BC0]">Coming soon · Interactive</span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mt-2 mb-3 max-w-[24ch]">Build your own plan, step by step.</h2>
          <p className="text-[0.98rem] text-[#d9c6d1] max-w-[58ch]">
            An interactive tool that walks you through building a personalized safety plan or care toolkit — and hands you a printable version at the end. In development.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-7 pb-24">
        <ResourceLibrary items={empowerItems} categories={empowerCategories} onOpenPdf={setPdf} />
      </section>

      <PdfModal pdf={pdf} onClose={() => setPdf(null)} />
    </div>
  )
}