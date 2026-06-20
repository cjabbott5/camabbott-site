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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardIn = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const impactCards = [
  {
    title: 'Stories Reveal What Metrics Miss',
    description:
      'Many experiences never appear in official reporting, audits, or outcome measures. Personal accounts help fill those gaps.',
  },
  {
    title: 'Patterns Reveal Systemic Problems',
    description:
      'One story is personal. Hundreds of stories can reveal trends, failures, and opportunities for improvement.',
  },
  {
    title: 'Evidence Creates Change',
    description:
      'Documentation is not the end goal. Preserved experiences become evidence that can inform advocacy, research, and reform.',
  },
];

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

        {/* HERO */}
        <section className="relative overflow-hidden rounded-2xl ring-1 ring-hairline/60 shadow-2xl shadow-black/40">
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

          <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="mx-auto max-w-3xl px-5 sm:px-6 py-16 sm:py-24 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-accent-soft to-transparent"
            />

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance"
            >
              Mental healthcare stories are being lost.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted leading-relaxed"
            >
              The Lost Records is building a public archive of patient, provider,
              and advocate experiences to identify patterns, expose systemic
              failures, and create evidence for reform.
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
              className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-faint"
            >
              Documenting experiences across psychiatric, behavioral health, and
              mental healthcare systems.
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={4}
              className="mt-6 text-accent-soft font-medium"
            >
              You were never alone — and your experience deserves to be documented.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={5}
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

        {/* TRUST LAYER */}
        <section className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-hairline bg-surface p-6">
              <h3 className="font-semibold text-ink mb-2">Anonymous</h3>
              <p className="text-sm text-muted leading-relaxed">
                Share only what you are comfortable sharing. Participation is voluntary and designed to respect privacy.
              </p>
            </div>

            <div className="rounded-xl border border-hairline bg-surface p-6">
              <h3 className="font-semibold text-ink mb-2">Evidence-Based</h3>
              <p className="text-sm text-muted leading-relaxed">
                Stories and survey responses help identify larger patterns that may not appear in traditional reporting.
              </p>
            </div>

            <div className="rounded-xl border border-hairline bg-surface p-6">
              <h3 className="font-semibold text-ink mb-2">For Reform</h3>
              <p className="text-sm text-muted leading-relaxed">
                The goal is documentation, understanding, accountability, and meaningful change.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT THIS IS */}
        <motion.section
          className="mx-auto max-w-2xl px-5 sm:px-6 py-14 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-accent-soft">
            What this is
          </h2>

          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Mental healthcare generates enormous amounts of documentation, yet many experiences never make it into the official record.
          </p>

          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            What patients felt. What providers witnessed. What advocates observed.
          </p>

          <p className="mt-4 text-base sm:text-lg text-ink leading-relaxed">
            The Lost Records exists to preserve those experiences, identify the patterns they reveal, and build a public archive that contributes to understanding, accountability, and reform.
          </p>
        </motion.section>

        {/* WHOEVER YOU ARE */}
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
            You may have lived it as a patient. You may have worked inside it as a provider. You may have fought for change as an advocate. Each of those seats sees something the others can’t — and the full picture only takes shape when those views are set side by side.
          </p>

          <p className="mt-4 text-base sm:text-lg text-ink leading-relaxed">
            Whatever you witnessed, whatever you carried, whatever never made it into the official record — it matters here. Your account is part of how we piece the truth back together. You don’t need the whole story. You just have to tell the part you know.
          </p>
        </motion.section>

        {/* WHY THESE RECORDS MATTER */}
        <section className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 py-6">
          <h2 className="mb-8 text-center text-2xl sm:text-3xl font-semibold text-accent-soft">
            Why these records matter
          </h2>

          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {impactCards.map((card) => (
              <motion.div
                key={card.title}
                variants={cardIn}
                className="rounded-xl border border-hairline bg-surface p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-ink">
                  {card.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* WHAT HAPPENS TO THE RECORDS */}
        <motion.section
          className="mx-auto max-w-2xl px-5 sm:px-6 py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-accent-soft">
            What happens to the records?
          </h2>

          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p className="text-muted">Stories are preserved.</p>
            <p className="text-muted">Survey responses are aggregated.</p>
            <p className="text-muted">Patterns are analyzed.</p>
            <p className="text-ink">
              Findings become public evidence that can support advocacy, education,
              research, and reform.
            </p>
          </div>
        </motion.section>

        {/* FINAL CTA */}
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
            It takes a few minutes — and it becomes part of a record bigger than any one story.
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