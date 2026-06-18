import { useState } from 'react'
import ResourceLibrary from '../components/ResourceLibrary'
import TableauEmbed from '../components/TableauEmbed'
import PdfModal from '../components/PdfModal'
import { educateItems, educateCategories } from '../data/library'

export default function Educate() {
  const [pdf, setPdf] = useState(null)
  return (
    <div className="font-sans text-ink">
      <header className="max-w-6xl mx-auto px-7 pt-20 pb-10">
        <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">Educate</p>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-4 mb-5">Understand the system.</h1>
        <div className="spectrum h-1 w-full max-w-[220px] rounded-full mb-7" />
        <p className="text-lg text-ink-soft max-w-[60ch]">
          You can’t advocate for yourself in a system you don’t understand. This is the library — the data, the history, your rights, and plain-language guides to the conditions and the care itself. Search it, filter it, or browse by theme.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-7 pb-14" id="dashboard">
        <TableauEmbed />
      </section>

      <section className="max-w-6xl mx-auto px-7 pb-24">
        <ResourceLibrary items={educateItems} categories={educateCategories} onOpenPdf={setPdf} />
      </section>

      <PdfModal pdf={pdf} onClose={() => setPdf(null)} />
    </div>
  )
}