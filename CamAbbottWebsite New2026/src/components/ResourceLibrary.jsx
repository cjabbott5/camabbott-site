import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// --- a single resource card -------------------------------------------------
function Card({ item, onOpenPdf }) {
  const soon = item.status === 'soon' || item.status === 'in-progress'
  const isPdf = item.link && item.link.startsWith('/files')
  const isExternal = item.link && item.link.startsWith('http')

  const CTA = () => {
    if (soon) {
      return (
        <span className="inline-block font-mono text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink-soft border border-line rounded-full px-3 py-1">
          {item.status === 'in-progress' ? 'In progress' : 'Coming soon'}
        </span>
      )
    }
    if (isPdf) {
      return (
        <button
          onClick={() => onOpenPdf({ url: item.link, title: item.title })}
          className="font-mono text-[0.74rem] font-bold text-brand-orange-deep hover:text-brand-orange transition cursor-pointer"
        >
          {item.cta} →
        </button>
      )
    }
    if (isExternal) {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer"
           className="font-mono text-[0.74rem] font-bold text-brand-orange-deep hover:text-brand-orange transition">
          {item.cta} →
        </a>
      )
    }
    return (
      <Link to={item.link}
            className="font-mono text-[0.74rem] font-bold text-brand-orange-deep hover:text-brand-orange transition">
        {item.cta} →
      </Link>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`relative bg-white border border-line rounded-2xl p-5 flex flex-col h-full transition hover:-translate-y-1 ${soon ? 'opacity-75' : ''}`}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] text-brand-rose-deep">{item.type}</span>
      </div>
      <h3 className="font-display font-bold text-lg leading-snug tracking-tight mb-1.5">{item.title}</h3>
      <p className="text-[0.9rem] text-ink-soft flex-1">{item.blurb}</p>
      <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
        {item.topics.map((t) => (
          <span key={t} className="font-mono text-[0.6rem] uppercase tracking-[0.06em] text-ink-soft bg-sand border border-line rounded-full px-2 py-0.5">{t}</span>
        ))}
      </div>
      <div className="pt-1"><CTA /></div>
    </motion.div>
  )
}

// --- a row of toggleable filter chips --------------------------------------
function ChipRow({ label, options, active, onToggle }) {
  if (options.length === 0) return null
  return (
    <div className="flex flex-wrap items-center gap-2 mb-2">
      <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-ink-soft w-[68px] shrink-0">{label}</span>
      {options.map((o) => {
        const on = active === o
        return (
          <button
            key={o}
            onClick={() => onToggle(on ? null : o)}
            className={`font-mono text-[0.68rem] uppercase tracking-[0.05em] rounded-full px-3 py-1 border transition ${
              on ? 'bg-ink text-cream border-ink' : 'bg-white text-ink-soft border-line hover:border-ink'
            }`}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}

// --- the library: search + filters + browse-by-theme -----------------------
export default function ResourceLibrary({ items, categories, onOpenPdf }) {
  const [q, setQ] = useState('')
  const [type, setType] = useState(null)
  const [topic, setTopic] = useState(null)
  const [audience, setAudience] = useState(null)

  const { types, topics, audiences } = useMemo(() => {
    const t = new Set(), to = new Set(), a = new Set()
    items.forEach((it) => {
      t.add(it.type)
      it.topics.forEach((x) => to.add(x))
      it.audience.forEach((x) => a.add(x))
    })
    return { types: [...t].sort(), topics: [...to].sort(), audiences: [...a].sort() }
  }, [items])

  const filtering = q.trim() !== '' || type || topic || audience

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return items.filter((it) => {
      if (type && it.type !== type) return false
      if (topic && !it.topics.includes(topic)) return false
      if (audience && !it.audience.includes(audience)) return false
      if (query) {
        const hay = `${it.title} ${it.blurb} ${it.topics.join(' ')} ${it.type}`.toLowerCase()
        if (!hay.includes(query)) return false
      }
      return true
    })
  }, [items, q, type, topic, audience])

  const clearAll = () => { setQ(''); setType(null); setTopic(null); setAudience(null) }

  return (
    <div>
      {/* search + filter bar */}
      <div className="bg-sand border border-line rounded-2xl p-5 mb-10">
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search resources…"
          className="w-full bg-white border border-line rounded-full px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/70 focus:outline-none focus:border-ink mb-4"
        />
        <ChipRow label="Type" options={types} active={type} onToggle={setType} />
        <ChipRow label="Topic" options={topics} active={topic} onToggle={setTopic} />
        <ChipRow label="For" options={audiences} active={audience} onToggle={setAudience} />
        {filtering && (
          <button onClick={clearAll} className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.08em] text-brand-rose-deep mt-1">
            ✕ Clear filters
          </button>
        )}
      </div>

      {/* results */}
      {filtering ? (
        filtered.length > 0 ? (
          <>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-soft mb-4">{filtered.length} result{filtered.length === 1 ? '' : 's'}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((it) => <Card key={it.id} item={it} onOpenPdf={onOpenPdf} />)}
            </div>
          </>
        ) : (
          <p className="text-ink-soft text-center py-12">No resources match that yet — try clearing a filter.</p>
        )
      ) : (
        // browse by theme when nothing is filtered
        categories.map((cat) => {
          const group = items.filter((it) => it.category === cat)
          if (group.length === 0) return null
          return (
            <section key={cat} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight">{cat}</h2>
                <span className="flex-1 h-px bg-line" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.map((it) => <Card key={it.id} item={it} onOpenPdf={onOpenPdf} />)}
              </div>
            </section>
          )
        })
      )}
    </div>
  )
}