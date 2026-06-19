import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
};

// Section reveal + staggered children (used by the "How it works" grid)
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const cardIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const flowSteps = [
  {
    phase: 'Contribute',
    description: 'Add your experience, as a story or a few quick questions.',
    link: '/collection',
  },
  {
    phase: 'The Records',
    description: 'See what others have shared, in their words and in the numbers.',
    link: '/responses',
  },
  {
    phase: 'The Case',
    description: 'We trace the patterns and build the evidence for what needs to change.',
    link: '/case',
  },
  {
    phase: 'The Vision',
    description: "Where we're headed: care rebuilt around dignity, agency, and trust.",
    link: '/vision',
  },
];

// hover:* + hover:no-underline defend against the global `a:hover` rule in
// index.css, which would otherwise repaint button text and add an underline.
const primaryBtn =
  'w-full sm:w-auto inline-flex justify-center bg-accent text-accent-ink font-semibold px-6 py-4 rounded-xl shadow-lg shadow-accent/20 transition duration-200 hover:bg-accent-soft hover:text-accent-ink hover:shadow-accent-glow hover:no-underline active:scale-[0.98]';
const secondaryBtn =
  'w-full sm:w-auto inline-flex justify-center border border-hairline text-ink font-semibold px-6 py-4 rounded-xl transition duration-200 hover:border-accent hover:text-ink hover:no-underline active:scale-[0.98]';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="text-ink">
        {/* HERO — recognition + plain "what this is" + action */}
        <section className="relative overflow-hidden rounded-2xl ring-1 ring-hairline/60 shadow-2xl shadow-black/40">
          {/* layered warm background so the hero reads as a distinct plate */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface via-base to-base" />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(72% 55% at 50% -5%, rgba(157,52,46,0.28), transparent 70%)',
            }}
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(55% 45% at 0% 100%, rgba(230,169,92,0.08), transparent 60%)',
            }}
          />
          {/* top hairline highlight */}
          <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="mx-auto max-w-2xl px-5 sm:px-6 py-16 sm:py-24 text-center">
            {/* decorative gradient tab above the eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-accent-soft to-transparent"
            />
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-accent-soft"
            >
              You were never alone.
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance"
            >
              Unburying what the system left out.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-muted leading-relaxed text-balance"
            >
              The Lost Records gathers real experiences from patients, providers,
              and advocates — and turns them into evidence the system can’t bury.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center"
            >
              <Link to="/collection" className={primaryBtn}>
                Share your experience
              </Link>
              <Link to="/responses" className={secondaryBtn}>
                Explore the records
              </Link>
            </motion.div>
          </div>
        </section>

        {/* WHAT THIS IS — plain-language clarity */}
        <motion.section
          className="mx-auto max-w-2xl px-5 sm:px-6 py-14 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Medical records are written for billing, liability, and compliance —
            not for the people living through care. So what actually happens often
            goes undocumented, downplayed, or lost.
          </p>
          <p className="mt-4 text-base sm:text-lg text-ink leading-relaxed">
            The Lost Records is where it gets written down. We collect experiences,
            find the patterns, and build a public, referenceable archive to push
            for reform — with dignity at the center.
          </p>
        </motion.section>

        {/* HOW IT WORKS — four tappable cards, staggered reveal on scroll */}
        <section className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 py-6">
          <h2 className="mb-8 text-center text-2xl sm:text-3xl font-semibold text-accent-soft">
            How it works
          </h2>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {flowSteps.map((step, index) => (
              <motion.div key={step.phase} variants={cardIn}>
                <Link
                  to={step.link}
                  className="group block h-full rounded-xl border border-hairline bg-surface p-5 transition duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/15 hover:no-underline"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-bold text-accent-ink transition-transform duration-200 group-hover:scale-110">
                    {index + 1}
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-ink transition-colors group-hover:text-accent-soft">
                    {step.phase}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* WHOEVER YOU ARE — different vantage points, one shared record */}
        <motion.section
          className="mx-auto max-w-2xl px-5 sm:px-6 py-14 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-accent-soft">
            Whoever you are in this
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            You may have lived it as a patient. You may have worked inside it as a
            provider. You may have fought for change as an advocate. Each of those
            seats sees something the others can’t — and the full picture only takes
            shape when those views are set side by side.
          </p>
          <p className="mt-4 text-base sm:text-lg text-ink leading-relaxed">
            Whatever you witnessed, whatever you carried, whatever never made it
            into the official record — it matters here. Your account is part of how
            we piece the truth back together. You don’t need the whole story. You
            just have to tell the part you know.
          </p>
        </motion.section>

        {/* CLOSE — invitation + action */}
        <motion.section
          className="mx-auto max-w-2xl px-5 sm:px-6 py-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-3 text-2xl sm:text-3xl font-semibold text-balance">
            Your experience belongs in the record.
          </h2>
          <p className="mb-8 text-base sm:text-lg text-muted leading-relaxed text-balance">
            It takes a few minutes — and it becomes part of a record bigger than any
            one story.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
            <Link to="/collection" className={primaryBtn}>
              Share your experience
            </Link>
            <Link to="/responses" className={secondaryBtn}>
              Explore the records
            </Link>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}