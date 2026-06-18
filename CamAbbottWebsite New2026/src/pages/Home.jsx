import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GradientOrb from '../components/GradientOrb'
import SeedOfLife from '../components/SeedOfLife'

function Reveal({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={className}
    >{children}</motion.div>
  )
}

// shared section-heading scale — keep all top-level section titles identical
const H2 = 'font-display font-extrabold text-3xl md:text-5xl tracking-tight'

const framework = [
  { n: '01', name: 'Educate', to: '/educate', body: 'Make a confusing system legible. You can’t advocate for yourself in a system you don’t understand.' },
  { n: '02', name: 'Engage', to: '/engage', body: 'Feel seen, and find your people. Information alone doesn’t move anyone — connection does.' },
  { n: '03', name: 'Empower', to: '/empower', body: 'Take control of your own care — your rights, your voice, and a plan for navigating it.' },
]

const work = [
  { tag: 'Toolkit', title: 'Psychiatric Hospital Welcome Package', body: 'A trauma-informed guide for inpatients — a model for what humane intake could look like.', to: '/empower' },
  { tag: 'Reference', title: 'Patient Rights Across U.S. States', body: 'A state-by-state reference on psychiatric patient rights.', to: '/educate' },
  { tag: 'Research', title: 'NYC Psychiatric Hospital Scorecard', body: 'Restraints, readmissions, and reform — measured across NYC hospitals.', to: '/educate' },
  { tag: 'Book', title: 'Everyone Deserves to Heal', body: 'An illustrated meditation on falling apart and the right to stand back up.', to: '/engage' },
]

export default function Home() {
  return (
    <div className="font-sans text-ink">

      {/* ===== HERO ===== */}
      <section className="max-w-6xl mx-auto px-7 pt-16 pb-20 grid md:grid-cols-[1.25fr_0.85fr] gap-12 md:gap-16 items-center">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">Behavioral health · Patient experience · Advocacy</p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.02] tracking-tight mt-5">
            Reclaiming the <span className="text-brand-orange">care</span> in mental healthcare.
          </h1>
          <div className="spectrum h-1 w-full max-w-[260px] rounded-full my-6" />
          <p className="text-lg text-ink-soft max-w-[54ch]">
            Behavioral healthcare is overwhelmed, under-resourced, and shaped by a history that pushed many of us to the margins. Reclaiming the care means putting patients back at the center of their own journey — with understanding, connection, and the power to direct it.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/educate" className="font-mono text-[0.78rem] font-bold uppercase tracking-[0.08em] text-white bg-brand-orange hover:bg-brand-orange-deep rounded-full px-6 py-3 transition">Explore the work →</Link>
            <Link to="/about" className="font-mono text-[0.78rem] font-bold uppercase tracking-[0.08em] text-ink border border-line hover:border-ink rounded-full px-6 py-3 transition">My story</Link>
          </div>
        </div>
       <GradientOrb />
      </section>

      {/* ===== WHY IT MATTERS ===== */}
      <section className="bg-sand border-y border-line">
        <div className="max-w-6xl mx-auto px-7 py-20">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">Why this matters</p>
            <h2 className={`${H2} mt-4 mb-6 max-w-[18ch]`}>The problem was never the people.</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-[110ch]">
              <p className="text-[1.05rem] text-ink-soft">
                Behavioral healthcare is overwhelmed. It’s underfunded, understaffed, and stretched far past its limits — with provider-to-patient ratios that can’t come close to meeting demand and unmet need that runs staggeringly high across the country. The people working inside it are doing their best in a system that was never built to hold everyone who needs it.
              </p>
              <p className="text-[1.05rem] text-ink-soft">
                And that system carries a hard history — one that, for generations, confined the people society wanted out of sight more than it healed them. That legacy still shapes who care serves well and who it harms. Reclaiming it is work for all of us: patients, providers, and advocates building something better, together, with the people the system was never designed for at its center.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== THE FRAMEWORK ===== */}
      <section className="max-w-6xl mx-auto px-7 py-20">
        <Reveal className="mb-10">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">The approach</p>
          <h2 className={`${H2} mt-4 mb-3`}>Three steps back to the center.</h2>
          <p className="text-lg text-ink-soft max-w-[58ch]">Every project moves people along the same arc — from lost in the system to in control of their care.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {framework.map((f) => (
            <Reveal key={f.n}>
              <Link to={f.to} className="block bg-white border border-line rounded-2xl p-7 h-full hover:-translate-y-1 transition">
                <span className="font-mono text-sm font-bold text-brand-orange">{f.n}</span>
                <h3 className="font-display font-extrabold text-2xl tracking-tight mt-2 mb-2">{f.name}</h3>
                <p className="text-[0.95rem] text-ink-soft">{f.body}</p>
                <span className="inline-block font-mono text-[0.72rem] font-bold uppercase tracking-[0.08em] text-brand-orange-deep mt-4">Enter →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section className="bg-cream border-t border-line">
        <div className="max-w-6xl mx-auto px-7 py-20">
          <Reveal className="mb-10">
            <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">Selected work</p>
            <h2 className={`${H2} mt-4 mb-3`}>The framework, made real.</h2>
            <p className="text-lg text-ink-soft max-w-[52ch]">Each of these is one of those three steps, put into practice.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {work.map((w) => (
              <Reveal key={w.title}>
                <Link to={w.to} className="block bg-white border border-line rounded-2xl p-6 h-full hover:-translate-y-1 transition">
                  <span className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.1em] text-brand-rose-deep">{w.tag}</span>
                  <h3 className="font-display font-bold text-lg leading-snug tracking-tight mt-2 mb-2">{w.title}</h3>
                  <p className="text-[0.88rem] text-ink-soft">{w.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY THIS WORK / STORY ===== */}
      <section className="bg-brand-plum text-cream">
  <div className="max-w-6xl mx-auto px-7 py-20 grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
    <Reveal>
      <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-[#E79BC0]">Lived experience</p>
      <h2 className={`${H2} mt-4 mb-6 max-w-[20ch] text-white`}>I don’t study this system from the outside.</h2>
      <p className="text-[1.05rem] text-[#d9c6d1] max-w-[60ch]">
        I’ve lived bipolar disorder, psychosis, and psychiatric hospitalization. I’ve been the patient who couldn’t get a straight answer, trying to understand my own rights from inside a locked unit. That experience is the reason this exists — and the reason it centers the people the system too often forgets.
      </p>
      <p className="font-display font-bold text-2xl md:text-3xl tracking-tight mt-10 max-w-[24ch] text-white">
        “The circumstances of your fall do not determine your right to stand back up.”
      </p>
    </Reveal>
    <Reveal className="hidden md:block">
      <SeedOfLife className="w-72 mx-auto" opacity={0.8} />
    </Reveal>
  </div>
</section>

      {/* ===== CONTACT CTA ===== */}
      <section className="max-w-6xl mx-auto px-7 py-20 text-center">
        <Reveal>
          <h2 className={`${H2} mb-4`}>Let's build something better.</h2>
          <p className="text-lg text-ink-soft max-w-[50ch] mx-auto mb-8">Patient, provider, advocate, or just someone who gets it — if this resonates, there’s a place for you in this work. I’d love to hear from you.</p>
          <Link to="/contact" className="inline-block font-mono text-[0.78rem] font-bold uppercase tracking-[0.08em] text-white bg-brand-orange hover:bg-brand-orange-deep rounded-full px-7 py-3 transition">Get in touch →</Link>
        </Reveal>
      </section>
    </div>
  )
}