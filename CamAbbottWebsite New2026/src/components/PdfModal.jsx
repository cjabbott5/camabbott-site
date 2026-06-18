import { useEffect } from 'react'

export default function PdfModal({ pdf, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    if (pdf) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [pdf, onClose])

  if (!pdf) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-line">
          <h3 className="font-display font-bold text-base md:text-lg tracking-tight truncate">{pdf.title}</h3>
          <div className="flex items-center gap-2 shrink-0">
            <a href={pdf.url} download className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.08em] text-white bg-brand-orange hover:bg-brand-orange-deep rounded-full px-3 py-1.5 transition">Download</a>
            <button onClick={onClose} aria-label="Close" className="font-mono text-[0.72rem] font-bold uppercase tracking-[0.08em] text-ink-soft border border-line hover:border-ink rounded-full px-3 py-1.5 transition">Close</button>
          </div>
        </div>
        <iframe src={pdf.url} title={pdf.title} className="flex-1 w-full" style={{ border: 0 }} />
      </div>
    </div>
  )
}