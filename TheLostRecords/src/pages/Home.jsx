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

const primaryBtn =
  'w-full sm:w-auto inline-flex justify-center bg-accent text-accent-ink font-semibold px-6 py-4 rounded-xl hover:bg-accent-soft transition';
const secondaryBtn =
  'w-full sm:w-auto inline-flex justify-center border border-hairline text-ink font-semibold px-6 py-4 rounded-xl hover:border-accent transition';

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

          <motion.div
            className="mx-auto max-w-2xl px-5 py-20 sm:py-28 text-center"
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeInUp}
              custom={0}
              className="text-accent text-sm sm:text-base tracking-wide mb-4"
            >
              You weren’t the only one.
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              Unburying what the system left out.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="mt-5 text-base sm:text-lg text-muted leading-relaxed"
            >
              The Lost Records gathers real experiences from patients, providers,
              and advocates — and turns them into evidence the system can’t bury.
            </motion.p>

            <motion.div
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
          </motion.div>
        </section>

        {/* WHAT THIS IS — plain-language clarity */}
        <motion.section
          className="mx-auto max-w-2xl px-5 py-14 sm:py-16"
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

        {/* HOW IT WORKS — four tappable cards (real route links) */}
        <section className="mx-auto max-w-5xl px-5 py-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-accent mb-8">
            How it works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flowSteps.map((step, index) => (
              <Link
                key={step.phase}
                to={step.link}
                className="block bg-surface rounded-xl p-5 border border-hairline hover:border-accent transition"
              >
                <div className="w-9 h-9 rounded-full bg-accent text-accent-ink flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-1">{step.phase}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* WHOEVER YOU ARE — unity; blame on the system, not the people */}
        <motion.section
          className="mx-auto max-w-2xl px-5 py-14 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4">
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
          className="mx-auto max-w-2xl px-5 py-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Your experience belongs in the record.
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed mb-8">
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