import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: 'easeOut' },
  }),
};

const sectionIn = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const primaryBtn =
  'inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-accent px-6 py-4 text-base font-semibold text-accent-ink shadow-lg shadow-accent/20 transition hover:bg-accent-soft hover:text-accent-ink hover:no-underline active:scale-[0.98] sm:w-auto';

const secondaryBtn =
  'inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-hairline bg-base/35 px-6 py-4 text-base font-semibold text-ink transition hover:border-accent hover:bg-surface hover:text-ink hover:no-underline active:scale-[0.98] sm:w-auto';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main className="text-ink">
        {/* HERO */}
        <section className="relative isolate overflow-hidden rounded-[1.75rem] border border-hairline/70 bg-base/80 px-5 py-14 shadow-2xl shadow-black/35 sm:px-8 sm:py-20 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_55%_at_50%_0%,rgba(157,52,46,0.24),transparent_72%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

          <div className="mx-auto max-w-3xl">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft sm:text-sm"
            >
              A public-interest archive
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="text-[2.85rem] font-bold leading-[0.98] text-balance sm:text-6xl lg:text-7xl"
            >
              Mental healthcare stories are being lost.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            >
              The Lost Records is building a public archive of experiences that
              never made it into the official record.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
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

        {/* THE MISSING RECORD */}
        <motion.section
          className="mx-auto max-w-3xl px-1 py-16 sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionIn}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft sm:text-sm">
            The missing record
          </p>

          <div className="space-y-6 text-[1.45rem] leading-[1.45] text-muted sm:text-3xl sm:leading-[1.35]">
            <p>
              Mental healthcare creates records for symptoms, diagnoses,
              admissions, discharges, billing, and outcomes.
            </p>

            <p className="text-ink">
              But many of the most important experiences are never recorded at
              all.
            </p>
          </div>

          <div className="mt-10 border-l-2 border-accent pl-5">
            <p className="text-lg leading-relaxed text-muted sm:text-xl">
              What patients endured.
              <br />
              What providers witnessed.
              <br />
              What advocates tried to change.
            </p>

            <p className="mt-5 text-lg font-medium leading-relaxed text-ink sm:text-xl">
              That is what this archive is here to preserve.
            </p>
          </div>
        </motion.section>

        {/* WHY IT MATTERS */}
        <motion.section
          className="relative mx-auto max-w-4xl py-6 sm:py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionIn}
        >
          <div className="relative overflow-hidden rounded-[1.5rem] border border-hairline bg-surface/60 px-5 py-10 sm:px-8 sm:py-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(157,52,46,0.15),transparent_75%)]" />

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft sm:text-sm">
              Why it matters
            </p>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-balance sm:text-5xl">
              Stories move people.
              <br />
              Data moves policy.
            </h2>

            <div className="mt-9 grid gap-5 text-lg leading-relaxed text-muted sm:grid-cols-2 sm:text-xl">
              <p>One account can validate another person’s experience.</p>
              <p>Many accounts can reveal a pattern.</p>
              <p>Patterns can become evidence.</p>
              <p>Evidence can support reform.</p>
            </div>
          </div>
        </motion.section>

        {/* BRIDGE */}
        <motion.section
          className="mx-auto flex min-h-[55svh] max-w-3xl items-center justify-center px-1 py-16 text-center sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionIn}
        >
          <blockquote className="text-3xl font-semibold leading-tight text-balance text-ink sm:text-5xl">
            You were never alone.
            <br />
            <span className="text-muted">
              And your experience deserves to be documented.
            </span>
          </blockquote>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section
          className="relative isolate overflow-hidden rounded-[1.75rem] border border-hairline bg-surface px-5 py-12 text-center shadow-2xl shadow-black/30 sm:px-8 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionIn}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(75%_55%_at_50%_0%,rgba(157,52,46,0.22),transparent_72%)]" />

          <div className="mx-auto max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft sm:text-sm">
              Add to the archive
            </p>

            <h2 className="text-3xl font-bold leading-tight text-balance sm:text-5xl">
              Your experience belongs in the record.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Share what happened, explore what others have documented, or return
              when you are ready.
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
        </motion.section>
      </main>
    </Layout>
  );
}