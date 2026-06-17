import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import camProfile from '../assets/cam-profile.jpg'

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Reveal({ children, className = '' }) {
  return (
    <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className={className}>
      {children}
    </motion.div>
  )
}

const work = [
  { tag: 'Patient resource · Built', accent: 'bg-brand-orange', title: 'Psychiatric Hospital Welcome Package', body: 'A 50-page, trauma-informed patient guide — rights, self-advocacy, medication tracking, and discharge planning — built to inpatient standards.', cta: 'Interested in bringing this to your hospital? Get in touch →', link: '/contact' },
  { tag: 'Research · Reference', accent: 'bg-brand-rose', title: 'Patient Rights Across U.S. States', body: "A state-by-state reference on psychiatric patient rights — the plain-language map that didn't exist when I needed it.", cta: 'Read the guide →', link: '/research' },
  { tag: 'Data analysis', accent: 'bg-brand-orange-deep', title: 'NYC Psychiatric Hospital Scorecard', body: 'A CMS-data evaluation of 12 NYC psychiatric hospitals on restraint use, readmission, and follow-up — scored with a balanced-scorecard framework.', cta: 'See the analysis →', link: '/research' },
  { tag: 'Writing · Book', accent: 'bg-brand-rose-deep', title: 'Everyone Deserves to Heal', body: 'An illustrated book about pain, dignity, and the right to begin again — for patients, the people who love them, and the providers who care for them.', cta: 'Read an excerpt →', link: '/essays' },
]

const focus = [
  { tag: 'Research · Analytics', title: 'Data & insights', body: 'Turning behavioral data and patient experience into evidence — scorecards, audits, and reform frameworks grounded in real outcomes.' },
  { tag: 'Strategy · Trauma-informed', title: 'Patient experience', body: 'Tools, guides, and process ideas that make care more humane and more compliant at once — written for the person in the bed.' },
  { tag: 'Equity · LGBTQ+ health', title: 'Inclusive & queer care', body: 'Affirming systems built for the queer, trans, and marginalized patients standard care most often overlooks or actively harms.' },
]

export default function Home() {
  return (
    <div className="font-sans text-ink">
      {/* HERO */}
      <header className="max-w-6xl mx-auto px-7 pt-20 pb-16">
        <div className="grid md:grid-cols-[1.35fr_0.9fr] gap-14 items-center">
          <div>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep">
              Behavioral health · Patient experience · Advocacy
            </p>
            <h1 className="font-display font-extrabold leading-[1.02] tracking-tight text-4xl md:text-6xl mt-5 mb-6">
              Reclaiming the <span className="text-brand-orange">care</span> in mental healthcare.
            </h1>
            <div className="spectrum h-1 w-full max-w-[240px] rounded-full mb-7" />
            <p className="text-lg text-ink-soft max-w-[46ch] mb-8">
              I'm a strategist, advocate, and writer building the research, resources, and essays that make the case for more humane mental healthcare — grounded in data and lived experience.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href="#work" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full bg-brand-orange text-white hover:bg-brand-orange-deep transition">See the work →</a>
              <Link to="/about" className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full bg-white border border-line text-ink hover:border-ink transition">Read my story</Link>
            </div>
          </div>

          <aside className="bg-white border border-line rounded-[20px] p-2.5 shadow-[0_24px_50px_-28px_rgba(120,40,70,0.32)] max-w-[340px] w-full mx-auto">
            <div className="relative rounded-[14px] overflow-hidden aspect-[1/1.02]">
              <img src={camProfile} alt="Cam Abbott smiling in front of a pink background" className="w-full h-full object-cover" />
              <div className="spectrum absolute left-0 right-0 bottom-0 h-1.5" />
            </div>
            <div className="px-3.5 pt-4 pb-3">
              <div className="font-display font-bold text-xl tracking-tight">
                Cam Abbott <span className="font-mono font-normal text-[0.72rem] text-brand-rose-deep">(they/he)</span>
              </div>
              <div className="font-mono text-[0.72rem] tracking-wide uppercase text-ink-soft mt-1.5">Strategist · Advocate · Writer</div>
            </div>
          </aside>
        </div>
      </header>

      {/* WHERE I FOCUS */}
      <section className="bg-sand py-16">
        <div className="max-w-6xl mx-auto px-7">
          <Reveal className="flex items-baseline gap-4 mb-9">
            <span className="font-mono text-sm font-bold text-brand-orange">01</span>
            <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight">Where I focus</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {focus.map((c) => (
              <Reveal key={c.title} className="bg-white border border-line rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_22px_40px_-26px_rgba(120,40,70,0.34)] transition">
                <div className="spectrum w-9 h-9 rounded-[9px]" />
                <h3 className="font-display font-bold text-xl mt-4 mb-1 tracking-tight">{c.title}</h3>
                <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-brand-rose-deep mb-2">{c.tag}</p>
                <p className="text-[0.95rem] text-ink-soft">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-7">
          <Reveal className="flex items-baseline gap-4 mb-9">
            <span className="font-mono text-sm font-bold text-brand-orange">02</span>
            <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight">Selected work</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {work.map((w) => (
              <Reveal key={w.title} className="relative bg-white border border-line rounded-2xl p-7 overflow-hidden hover:-translate-y-1 transition">
                <span className={`absolute left-0 top-0 bottom-0 w-[5px] ${w.accent}`} />
                <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ink-soft">{w.tag}</span>
                <h3 className="font-display font-bold text-2xl mt-2.5 mb-2 tracking-tight">{w.title}</h3>
                <p className="text-[0.95rem] text-ink-soft max-w-[48ch]">{w.body}</p>
                <Link to={w.link} className="inline-block font-mono text-[0.76rem] font-bold text-brand-orange-deep mt-4">{w.cta}</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS WORK */}
      <section className="bg-brand-plum text-[#f3e7ee]">
        <div className="max-w-6xl mx-auto px-7 py-20">
          <Reveal>
            <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-[#E79BC0]">Why this work</p>
            <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight text-white mt-3.5 mb-5">I don't study this system from the outside.</h2>
            <p className="text-[1.06rem] text-[#d9c6d1] max-w-[60ch]">
              I've spent more than a decade inside behavioral healthcare as a patient — including psychiatric hospitalizations where I saw firsthand how disorienting and disempowering care can become. That perspective is exactly why my work is precise where so much of this field stays abstract. I build for the patients the system tends to overlook, because I have been one of them, and because everyone moving through it deserves care that treats them as a whole person.
            </p>
            <div className="spectrum h-1 w-full max-w-[160px] rounded-full mt-9 mb-3" />
            <blockquote className="font-display font-semibold text-2xl md:text-3xl leading-snug text-white max-w-[26ch]">
              "The circumstances of your fall do not determine your right to stand back up."
            </blockquote>
            <p className="font-mono text-[0.78rem] text-[#E79BC0] mt-2">— from Everyone Deserves to Heal</p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-blush">
        <div className="max-w-6xl mx-auto px-7 py-[70px] text-center">
          <Reveal>
            <div className="spectrum h-1 w-full max-w-[120px] rounded-full mx-auto" />
            <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-brand-rose-deep mt-3.5">Built to contain. Broken open to care.</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight max-w-[20ch] mx-auto mt-3.5 mb-6">Let's build the care this system should have had.</h2>
            <div className="flex flex-wrap gap-3.5 justify-center">
              <Link to="/contact" className="font-semibold px-6 py-3 rounded-full bg-brand-orange text-white hover:bg-brand-orange-deep transition">Get in touch</Link>
              <Link to="/about" className="font-semibold px-6 py-3 rounded-full bg-white border border-line text-ink hover:border-ink transition">Read my story</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}