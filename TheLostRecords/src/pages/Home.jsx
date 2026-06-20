import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

const primaryBtn =
  'inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-accent px-6 py-4 text-base font-semibold text-accent-ink shadow-lg shadow-accent/20 transition hover:bg-accent-soft hover:text-accent-ink hover:no-underline active:scale-[0.98] sm:w-auto';

const secondaryBtn =
  'inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-hairline bg-base/30 px-6 py-4 text-base font-semibold text-ink transition hover:border-accent hover:bg-surface hover:text-ink hover:no-underline active:scale-[0.98] sm:w-auto';

const trustItems = ['Anonymous', 'Evidence-Based', 'For Reform'];

const processSteps = [
  {
    label: 'Story',
    text: 'Patients, providers, and advocates document what happened.',
  },
  {
    label: 'Pattern',
    text: 'Shared experiences reveal failures that isolated records miss.',
  },
  {
    label: 'Evidence',
    text: 'Stories and survey responses become organized public documentation.',
  },
  {
    label: 'Reform',
    text: 'Preserved experiences can inform advocacy, research, and policy change.',
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main className="lr-home-snap text-ink">
        {/* HERO */}
        <section className="lr-snap-section relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden rounded-2xl border border-hairline/70 bg-base px-5 py-12 shadow-2xl shadow-black/40 sm:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_55%_at_50%_0%,rgba(157,52,46,0.28),transparent_70%)]" />
          <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-accent to-transparent sm:left-8" />
          <div className="absolute left-[17px] top-10 h-3 w-3 rounded-full bg-accent-soft shadow-accent-glow sm:left-[29px]" />

          <div className="mx-auto max-w-3xl pl-6 sm:pl-10">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent-soft"
            >
              Patient voices → evidence → policy change.
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="text-4xl font-bold leading-[1.02] text-balance sm:text-6xl"
            >
              Mental healthcare stories are being lost.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            >
              The Lost Records is building a public archive of patient, provider,
              and advocate experiences.
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
              className="mt-5 max-w-xl text-base font-medium text-ink"
            >
              Stories move people. Data moves policy.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={4}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link to="/collection" className={primaryBtn}>
                Share Your Story
              </Link>

              <Link to="/responses" className={secondaryBtn}>
                Explore the Records
              </Link>
            </motion.div>
          </div>
        </section>

        {/* TRUST / PURPOSE */}
        <section className="lr-snap-section mx-auto flex min-h-[65svh] max-w-5xl flex-col justify-center px-5 py-12 sm:min-h-[50svh] sm:px-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item}
                className="border-l-2 border-accent bg-surface/70 px-5 py-5"
              >
                <h2 className="text-xl font-semibold text-ink">{item}</h2>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Documentation is not the end goal. Preserved experiences become
            evidence that can inform advocacy, research, and reform.
          </p>
        </section>

        {/* PROCESS */}
        <section className="lr-snap-section mx-auto flex min-h-[100svh] max-w-4xl flex-col justify-center px-5 py-14 sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent-soft">
            How records become reform
          </p>

          <h2 className="mb-10 text-3xl font-bold leading-tight text-balance sm:text-4xl">
            Story → Pattern → Evidence → Reform
          </h2>

          <div className="relative space-y-8 pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-soft to-accent/20" />

            {processSteps.map((step) => (
              <div key={step.label} className="relative">
                <div className="absolute -left-8 top-1 h-4 w-4 rounded-full border-2 border-accent-soft bg-base" />
                <h3 className="text-xl font-semibold text-ink">{step.label}</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BRIDGE */}
        <section className="lr-snap-section flex min-h-[70svh] items-center justify-center px-5 py-14 text-center">
          <blockquote className="max-w-2xl text-2xl font-semibold leading-tight text-balance text-ink sm:text-4xl">
            “You were never alone — and your experience deserves to be
            documented.”
          </blockquote>
        </section>

        {/* FINAL CTA */}
        <section className="lr-snap-section relative isolate flex min-h-[85svh] items-center overflow-hidden rounded-2xl border border-hairline bg-surface px-5 py-14 text-center sm:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(157,52,46,0.22),transparent_70%)]" />

          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-balance sm:text-5xl">
              Your experience belongs in the record.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Patient voices → evidence → policy change.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/collection" className={primaryBtn}>
                Share Your Story
              </Link>

              <Link to="/responses" className={secondaryBtn}>
                Explore the Records
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}