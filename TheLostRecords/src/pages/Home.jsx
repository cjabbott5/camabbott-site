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

// hover:text-* + hover:no-underline defend against the global `a:hover` rule
// in index.css, which would otherwise repaint button text and add an underline.
const primaryBtn =
  'w-full sm:w-auto inline-flex justify-center bg-accent text-accent-ink font-semibold px-6 py-4 rounded-xl transition hover:bg-accent-soft hover:text-accent-ink hover:no-underline';
const secondaryBtn =
  'w-full sm:w-auto inline-flex justify-center border border-hairline text-ink font-semibold px-6 py-4 rounded-xl transition hover:border-accent hover:text-ink hover:no-underline';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="text-ink">
        {/* HERO — recognition + plain "what this is" + action */}
        <section className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-base via-surface to-base" />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(70% 55% at 50% 0%, rgba(88,198,230,0.14), transparent 70%)',
            }}
          />

          <div className="mx-auto max-w-2xl px-5 sm:px-6 py-20 sm:py-28 text-center">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-accent"
            >
              You were never alone.
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              Unburying what the system left out.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="mt-5 text-base sm:text-lg text-muted leading-relaxed"
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

        {/* HOW IT WORKS — four tappable cards, bolder on hover, no underline */}
        <section className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 py-6">
          <h2 className="mb-8 text-center text-2xl sm:text-3xl font-semibold text-accent">
            How it works
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flowSteps.map((step, index) => (
              <Link
                key={step.phase}
                to={step.link}
                className="group block rounded-xl border border-hairline bg-surface p-5 transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:no-underline"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-bold text-accent-ink transition-transform duration-200 group-hover:scale-105">
                  {index + 1}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                  {step.phase}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* WHOEVER YOU ARE — unity; blame on the system, not the people */}
        <motion.section
          className="mx-auto max-w-2xl px-5 sm:px-6 py-14 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-accent">
            Whoever you are in this
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            You may have lived it as a patient, worked inside it as a provider, or
            fought for change as an advocate. From every one of those seats, you’ve
            seen the same thing: a system that too often loses the person inside the
            paperwork.
          </p>
          <p className="mt-4 text-base sm:text-lg text-ink leading-relaxed">
            That isn’t the fault of the people doing the work — it’s how the system
            was built. This is where we document it together, and start to change
            it.
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
          <h2 className="mb-3 text-2xl sm:text-3xl font-semibold">
            Your experience belongs in the record.
          </h2>
          <p className="mb-8 text-base sm:text-lg text-muted leading-relaxed">
            It takes a few minutes — and it becomes part of something permanent.
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