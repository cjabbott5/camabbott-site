import { Link } from 'react-router-dom'

const cols = [
  { to: '/educate', label: 'Educate' },
  { to: '/engage', label: 'Engage' },
  { to: '/empower', label: 'Empower' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-plum text-cream">
      <div className="max-w-6xl mx-auto px-7 py-14">
        <div className="spectrum h-1 w-full max-w-[160px] rounded-full mb-8" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-display font-extrabold text-2xl tracking-tight">Cam<span className="text-brand-orange">.</span>Abbott</p>
            <p className="text-[#d9c6d1] text-sm mt-2 max-w-[40ch]">Reclaiming the care in mental healthcare — through education, connection, and tools that put patients back at the center.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {cols.map((c) => (
              <Link key={c.to} to={c.to} className="font-mono text-[0.74rem] font-bold uppercase tracking-[0.08em] text-[#ecdfe6] hover:text-[#E79BC0] transition">{c.label}</Link>
            ))}
          </div>
        </div>
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-[#9b7f90] mt-10">
          A personal advocacy project · Views are my own · © {new Date().getFullYear()} Cam Abbott
        </p>
      </div>
    </footer>
  )
}