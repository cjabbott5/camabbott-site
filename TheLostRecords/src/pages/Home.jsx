import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.48, ease: 'easeOut' },
  }),
};

const sectionIn = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const primaryBtn =
  'inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-accent px-5 py-3.5 text-[0.95rem] font-semibold text-accent-ink shadow-md shadow-accent/15 transition hover:bg-accent-soft hover:text-accent-ink hover:no-underline active:scale-[0.98] sm:w-auto';

const secondaryBtn =
  'inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-hairline bg-base/25 px-5 py-3.5 text-[0.95rem] font-semibold text-ink transition hover:border-accent hover:bg-surface hover:text-ink hover:no-underline active:scale-[0.98] sm:w-auto';

const eyebrow =
  'text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-accent-soft sm:text-xs';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main className="text-ink">
        {/* HERO */}
        <section className="relative isolate overflow-hidden rounded-2xl border border-hairline/60 bg-base/80 px-5 py-12 shadow-xl shadow-black/25 sm:px-8 sm:py-18 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(75%_45%_at_50%_0%,rgba(157,52,46,0.18),transparent_72%)]" />
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="mx-auto max-w-3xl">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className={eyebrow}
            >
              Public-interest archive
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="mt-5 max-w-3xl text-[2.35rem] font-bold leading-[1.02] text-balance sm:text-6xl lg:text-7xl"
            >
              Mental healthcare stories are being lost.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="mt-6 max-w-2xl text-[1.08rem] leading-8 text-muted sm:text-xl"
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
          className="mx-auto max-w-3xl py-14 sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionIn}
        >
          <p className={eyebrow}>The missing record</p>

          <div className="mt-6 space-y-5 text-xl leading-9 text-muted sm:text-3xl sm:leading-[1.35]">
            <p>
              Mental healthcare creates records for symptoms, diagnoses,
              admissions, discharges, billing, and outcomes.
            </p>

            <p className="text-ink">
              But many of the most important experiences are never recorded at
              all.
            </p>
          </div>

          <div className="mt-9 border-t border-hairline/70 pt-6">
            <p className="text-base leading-8 text-muted sm:text-lg">
              What patients endured.
              <br />
              What providers witnessed.
              <br />
              What advocates tried to change.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-ink sm:text-lg">
              That is what this archive is here to preserve.
            </p>
          </div>
        </motion.section>

        {/* WHY IT MATTERS */}
        <motion.section
          className="mx-auto max-w-4xl py-4 sm:py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionIn}
        >
          <div className="relative overflow-hidden rounded-2xl border border-hairline/70 bg-surface/45 px-5 py-9 sm:px-8 sm:py-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(65%_45%_at_50%_0%,rgba(157,52,46,0.12),transparent_76%)]" />

            <p className={eyebrow}>Why it matters</p>

            <h2 className="mt-5 max-w-2xl text-[2rem] font-bold leading-[1.08] text-balance sm:text-5xl">
              Stories move people.
              <br />
              Data moves policy.
            </h2>

            <div className="mt-8 grid gap-4 text-base leading-8 text-muted sm:grid-cols-2 sm:text-lg">
              <p>One account can validate another person’s experience.</p>
              <p>Many accounts can reveal a pattern.</p>
              <p>Patterns can become evidence.</p>
              <p>Evidence can support reform.</p>
            </div>
          </div>
        </motion.section>

        {/* BRIDGE */}
        <motion.section
          className="mx-auto flex min-h-[45svh] max-w-3xl items-center justify-center py-14 text-center sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionIn}
        >
          <blockquote className="text-[2rem] font-semibold leading-[1.12] text-balance text-ink sm:text-5xl">
            You were never alone.
            <br />
            <span className="text-muted">
              And your experience deserves to be documented.
            </span>
          </blockquote>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section
          className="relative isolate overflow-hidden rounded-2xl border border-hairline/70 bg-surface/70 px-5 py-11 text-center shadow-xl shadow-black/20 sm:px-8 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionIn}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_45%_at_50%_0%,rgba(157,52,46,0.16),transparent_72%)]" />

          <div className="mx-auto max-w-2xl">
            <p className={eyebrow}>Add to the archive</p>

            <h2 className="mt-5 text-[2rem] font-bold leading-[1.08] text-balance sm:text-5xl">
              Your experience belongs in the record.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
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