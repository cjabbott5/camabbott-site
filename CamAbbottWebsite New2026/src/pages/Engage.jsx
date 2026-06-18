import { motion } from 'framer-motion'

function Reveal({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >{children}</motion.div>
  )
}

// === EDIT ME: real comments / questions / topics from your TikTok. =========
// Keep these honest and representative — voices and conversations, not stats.
const communityVoices = [
  { quote: 'PLACEHOLDER — paste a real comment or question you’ve gotten that captures what people are working through.', from: 'a comment on TikTok' },
  { quote: 'PLACEHOLDER — another real one. The point is people seeing themselves in someone else’s words.', from: 'a comment on TikTok' },
  { quote: 'PLACEHOLDER — a topic or question you hear a lot, in someone’s own voice.', from: 'a comment on TikTok' },
]

// === EDIT ME: your essays. Set href to the live link when published. =======
const essays = [
  { title: 'We Deserve More', blurb: 'On what patient-centered care should actually feel like.', href: '#' },
  { title: 'The Bipolar Hustle', blurb: 'Ambition, mania, and untangling drive from illness.', href: '#' },
]

// Real, vetted support resources. Confirm each link before publishing.
const directory = [
  { name: '988 Suicide & Crisis Lifeline', note: 'Call or text 988, 24/7', href: 'https://988lifeline.org' },
  { name: 'Crisis Text Line', note: 'Text HOME to 741741', href: 'https://www.crisistextline.org' },
  { name: 'NAMI', note: 'Helpline, education & local support', href: 'https://www.nami.org' },
  { name: 'DBSA', note: 'Free peer support groups', href: 'https://www.dbsalliance.org' },
  { name: 'Trans Lifeline', note: 'Peer support by & for trans people', href: 'https://translifeline.org' },
  { name: 'The Trevor Project', note: 'Crisis support for LGBTQ+ youth', href: 'https://www.thetrevorproject.org' },
  { name: 'r/bipolar', note: 'A large peer community on Reddit', href: 'https://www.reddit.com/r/bipolar/' },
]

const TIKTOK_URL = 'https://www.tiktok.com/@camabbott5'
const NEWSLETTER_URL = '#' // TODO: paste your Substack URL

export default function Engage() {
  return (
    <div className="font-sans text-ink">
      <header className="max-w-6xl mx-auto px-7 pt-20 pb-10">
        <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">Engage</p>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mt-4 mb-5">You’re not the only one.</h1>
        <div className="spectrum h-1 w-full max-w-[220px] rounded-full mb-7" />
        <p className="text-lg text-ink-soft max-w-[62ch]">
          Connection is hard when you’re struggling — mental illness is isolating by design, and reaching out can feel impossible. This is the part of the work that’s about not doing it alone.
        </p>
      </header>

      {/* honest intro — your story */}
      <section className="max-w-6xl mx-auto px-7 pb-14">
        <Reveal className="bg-plum text-cream rounded-2xl p-8 md:p-10">
          <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#E79BC0]">Why this matters to me</span>
          <p className="text-[1.05rem] leading-relaxed text-[#ecdfe6] mt-3 max-w-[64ch]">
            {/* EDIT ME: your words. A starting draft you can rewrite: */}
            For a long time I tried to carry this privately, and it only made the lows lonelier. Being open about my mental health on TikTok changed that. Showing up honestly — even on the hard days — built me a real sense of support I didn’t have before, and reminded me that being seen is part of healing. Connection won’t fix everything. But you were never meant to do this alone.
          </p>
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer"
             className="inline-block font-mono text-[0.74rem] font-bold uppercase tracking-[0.08em] text-[#E79BC0] mt-5">
            Find me on TikTok →
          </a>
        </Reveal>
      </section>

      {/* community voices */}
      <section className="max-w-6xl mx-auto px-7 pb-16">
        <Reveal className="flex items-baseline gap-4 mb-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">From the community</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {communityVoices.map((v, i) => (
            <Reveal key={i} className="bg-blush border border-line rounded-2xl p-6">
              <p className="font-display text-lg leading-snug tracking-tight">“{v.quote}”</p>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-brand-rose-deep mt-4">{v.from}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* essays */}
      <section className="max-w-6xl mx-auto px-7 pb-16">
        <Reveal className="flex items-baseline gap-4 mb-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">Essays &amp; writing</h2>
          <span className="flex-1 h-px bg-line" />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {essays.map((e) => (
            <Reveal key={e.title} className="bg-white border border-line rounded-2xl p-6 hover:-translate-y-1 transition">
              <h3 className="font-display font-bold text-xl tracking-tight mb-1.5">{e.title}</h3>
              <p className="text-[0.92rem] text-ink-soft">{e.blurb}</p>
              <a href={e.href} className="inline-block font-mono text-[0.74rem] font-bold text-brand-orange-deep mt-3">Read →</a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* support directory */}
      <section className="max-w-6xl mx-auto px-7 pb-16">
        <Reveal className="mb-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">Find your people</h2>
          <p className="text-ink-soft mt-2 max-w-[60ch]">Honestly — connection can be hard to build. These are real places people have found support, including in crisis. You don’t have to start big.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-3">
          {directory.map((d) => (
            <a key={d.name} href={d.href} target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-between gap-4 bg-white border border-line rounded-xl px-5 py-4 hover:border-ink transition">
              <span>
                <span className="font-display font-bold text-base tracking-tight">{d.name}</span>
                <span className="block text-[0.84rem] text-ink-soft">{d.note}</span>
              </span>
              <span className="font-mono text-brand-orange-deep text-sm shrink-0">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* share your story + newsletter */}
      <section className="max-w-6xl mx-auto px-7 pb-24 grid md:grid-cols-2 gap-5">
        <Reveal className="bg-sand border border-line rounded-2xl p-8">
          <h2 className="font-display font-bold text-2xl tracking-tight mb-2">Share your story</h2>
          <p className="text-ink-soft text-[0.95rem] mb-4">Your experience helps make the case for better care — and helps the next person feel less alone. Tell me what your journey through the system was like.</p>
          <a href="#" className="inline-block font-mono text-[0.74rem] font-bold uppercase tracking-[0.08em] text-white bg-brand-orange hover:bg-brand-orange-deep rounded-full px-5 py-2.5 transition">Take the survey →</a>
        </Reveal>
        <Reveal className="bg-blush border border-line rounded-2xl p-8">
          <h2 className="font-display font-bold text-2xl tracking-tight mb-2">Stay connected</h2>
          <p className="text-ink-soft text-[0.95rem] mb-4">Essays, resources, and honest reflections on healing and the system — in your inbox, no spam.</p>
          <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-mono text-[0.74rem] font-bold uppercase tracking-[0.08em] text-white bg-brand-rose hover:bg-brand-rose-deep rounded-full px-5 py-2.5 transition">Subscribe →</a>
        </Reveal>
      </section>
    </div>
  )
}