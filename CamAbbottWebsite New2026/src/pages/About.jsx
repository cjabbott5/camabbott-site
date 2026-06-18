import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import camProfile from '../assets/cam-profile.jpg'

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

const H2 = 'font-display font-extrabold text-3xl md:text-5xl tracking-tight'

const beliefs = [
  { t: 'Patients are the experts on their own lives.', b: 'Care works best when it’s built with people, not done to them.' },
  { t: 'Dignity isn’t a feature.', b: 'It’s the baseline — especially in the moments people are most vulnerable.' },
  { t: 'Lived experience is data.', b: 'The people who’ve moved through the system know where it breaks.' },
  { t: 'Everyone deserves to heal.', b: 'No matter how they arrived, or how many times they’ve had to start over.' },
]

export default function About() {
  return (
    <div className="font-sans text-ink">

      {/* ===== HERO ===== */}
      <section className="max-w-6xl mx-auto px-7 pt-16 pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">About</p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.04] tracking-tight mt-5">Hi — I’m Cam.</h1>
          <div className="spectrum h-1 w-full max-w-[220px] rounded-full my-6" />
          <p className="text-lg text-ink-soft max-w-[52ch]">
            I’m a behavioral-health strategist, advocate, and writer working to make mental healthcare more humane — and I come to it as someone who has been a patient inside the system, not just a student of it.
          </p>
        </div>
        <Reveal className="bg-blush border border-line rounded-3xl p-6">
          <div className="rounded-2xl overflow-hidden border border-line">
            <img src={camProfile} alt="Cam Abbott" className="w-full object-cover aspect-[4/5]" />
          </div>
          <div className="spectrum h-1 w-20 rounded-full mt-5 mb-3" />
          <p className="font-display font-extrabold text-2xl tracking-tight">Cam Abbott</p>
          <p className="font-mono text-[0.74rem] uppercase tracking-[0.08em] text-brand-rose-deep mt-1">Strategist · Advocate · Writer</p>
        </Reveal>
      </section>

      {/* ===== STORY ===== */}
      <section className="bg-sand border-y border-line">
        <div className="max-w-3xl mx-auto px-7 py-20">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">How I got here</p>
            <h2 className={`${H2} mt-4 mb-6`}>The work found me before I chose it.</h2>
            <div className="space-y-5 text-[1.05rem] text-ink-soft">
              {/* EDIT ME: this is drafted from what you’ve shared — make it yours. */}
              <p>
                I’ve lived with bipolar disorder, moved through psychosis, and spent time as an inpatient on psychiatric units. I know what it’s like to be the person who can’t get a straight answer — trying to understand your own diagnosis, your own medication, your own rights, from inside a place built to contain you rather than explain anything to you.
              </p>
              <p>
                As a queer and trans person, I also know what it means to navigate a system that hasn’t always been built with you in mind. Those experiences were disorienting and, at times, dehumanizing. But they also showed me exactly where the gaps are — and gave me a stubborn conviction that it doesn’t have to be this way.
              </p>
              <p>
                So I started making the things I wish I’d had: plain-language guides, tools for self-advocacy, research that names what’s broken. What began as survival became a body of work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== WHAT I DO ===== */}
      <section className="max-w-3xl mx-auto px-7 py-20">
        <Reveal>
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">What I do</p>
          <h2 className={`${H2} mt-4 mb-6`}>Turning lived experience into change.</h2>
          <p className="text-[1.05rem] text-ink-soft mb-4">
            My work lives at the intersection of strategy and storytelling. I build educational resources that make a confusing system legible, create spaces where people feel less alone in it, and design tools that help patients take real control of their care — especially the people the system has historically pushed to the margins.
          </p>
          <p className="text-[1.05rem] text-ink-soft">
            That work moves along one arc — <Link to="/educate" className="text-brand-orange-deep font-semibold">educate</Link>, <Link to="/engage" className="text-brand-orange-deep font-semibold">engage</Link>, <Link to="/empower" className="text-brand-orange-deep font-semibold">empower</Link> — and all of it is free to read, share, and use.
          </p>
        </Reveal>
      </section>

      {/* ===== BELIEFS ===== */}
      <section className="bg-cream border-y border-line">
        <div className="max-w-6xl mx-auto px-7 py-20">
          <Reveal className="mb-10">
            <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">What I believe</p>
            <h2 className={`${H2} mt-4`}>The principles under all of it.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {beliefs.map((x) => (
              <Reveal key={x.t} className="bg-white border border-line rounded-2xl p-6">
                <h3 className="font-display font-bold text-xl tracking-tight mb-1.5">{x.t}</h3>
                <p className="text-[0.95rem] text-ink-soft">{x.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COLLABORATE CTA ===== */}
      <section className="bg-brand-plum text-cream">
        <div className="max-w-3xl mx-auto px-7 py-20 text-center">
          <Reveal>
            <div className="spectrum h-1 w-24 rounded-full mx-auto mb-7" />
            <h2 className={`${H2} text-white mb-5`}>Let’s work together.</h2>
            <p className="text-[1.05rem] text-[#d9c6d1] max-w-[56ch] mx-auto mb-8">
              Whether you’re a provider rethinking patient experience, an organization building better resources, a fellow advocate, or someone with a story to share — my door is open. I’d genuinely love to hear what you’re working on.
            </p>
            <Link to="/contact" className="inline-block font-mono text-[0.78rem] font-bold uppercase tracking-[0.08em] text-white bg-brand-orange hover:bg-brand-orange-deep rounded-full px-7 py-3 transition">Reach out →</Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}