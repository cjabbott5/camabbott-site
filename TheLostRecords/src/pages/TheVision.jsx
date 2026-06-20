import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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

const principles = [
  {
    title: 'Dignity',
    text: 'People deserve to be treated as whole human beings, not reduced to symptoms, risk scores, billing codes, or compliance notes.',
  },
  {
    title: 'Agency',
    text: 'The people most affected by mental healthcare systems should have power in how those systems are evaluated, challenged, and changed.',
  },
  {
    title: 'Transparency',
    text: 'When experiences become data, people deserve to see what is being collected, how it is interpreted, and what it is being used to support.',
  },
  {
    title: 'Collective evidence',
    text: 'One record can validate a person. Many records can reveal a pattern. Patterns can become evidence, and evidence can support reform.',
  },
];

const phases = [
  {
    label: 'Collect',
    title: 'Build the record',
    text: 'Gather stories and anonymous survey responses from patients, providers, advocates, and others with lived insight.',
  },
  {
    label: 'Connect',
    title: 'Reveal the patterns',
    text: 'Organize narratives and dashboard data so recurring harms, gaps, supports, and outcomes become visible.',
  },
  {
    label: 'Mobilize',
    title: 'Turn evidence into action',
    text: 'Use the record to support public education, advocacy, research-informed analysis, and reform efforts.',
  },
];

const primaryBtn =
  'inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-accent px-5 py-3.5 text-[0.95rem] font-semibold text-accent-ink shadow-md shadow-accent/15 transition hover:bg-accent-soft hover:text-accent-ink hover:no-underline active:scale-[0.98] sm:w-auto';

const secondaryBtn =
  'inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-hairline bg-base/25 px-5 py-3.5 text-[0.95rem] font-semibold text-ink transition hover:border-accent hover:bg-surface hover:text-ink hover:no-underline active:scale-[0.98] sm:w-auto';

const eyebrow =
  'text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-accent-soft sm:text-xs';

export default function TheVision() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-4 py-10 text-ink sm:px-6 sm:py-14 lg:px-8">
        <section className="relative isolate overflow-hidden rounded-2xl border border-hairline/70 bg-surface/60 px-5 py-11 shadow-xl shadow-black/20 sm:px-8 sm:py-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(157,52,46,0.22),transparent_72%)]" />
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
            className={eyebrow}
          >
            The Vision
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
            className="mt-5 max-w-3xl text-[2.35rem] font-bold leading-[1.02] text-balance sm:text-6xl"
          >
            A public record built by the people who lived it.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={2}
            className="mt-6 max-w-3xl text-[1.08rem] leading-8 text-muted sm:text-xl"
          >
            The Lost Records exists to preserve what official systems often leave out:
            the lived experiences, patterns, harms, supports, and truths that mental
            healthcare records rarely capture.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={3}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link to="/collection" className={primaryBtn}>
              Contribute to the Record
            </Link>
            <Link to="/responses" className={secondaryBtn}>
              Explore the Records
            </Link>
          </motion.div>
        </section>

        <motion.section
          className="mx-auto max-w-3xl py-14 sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionIn}
        >
          <p className={eyebrow}>What we are building</p>

          <div className="mt-6 space-y-5 text-xl leading-9 text-muted sm:text-3xl sm:leading-[1.35]">
            <p>
              Stories preserve the truth.
              <br />
              Stats reveal the pattern.
            </p>

            <p className="text-ink">
              Together, they build the case for reform.
            </p>
          </div>

          <p className="mt-8 text-base leading-8 text-muted sm:text-lg">
            This project is not about one person’s story standing above anyone
            else’s. It is about creating a shared platform where many records can
            sit beside one another, point to what keeps happening, and help people
            demand better.
          </p>
        </motion.section>

        <motion.section
          className="grid gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionIn}
        >
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-2xl border border-hairline/70 bg-surface/55 p-6 transition hover:border-accent/70"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_45%_at_50%_0%,rgba(157,52,46,0.12),transparent_75%)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
                {phase.label}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-ink">
                {phase.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">{phase.text}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          className="py-14 sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionIn}
        >
          <div className="rounded-2xl border border-hairline/70 bg-base/50 p-5 sm:p-8">
            <p className={eyebrow}>How it works</p>

            <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
              <div className="rounded-xl border border-hairline bg-surface p-5">
                <h3 className="text-lg font-semibold text-ink">Stories</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Personal narratives, testimony, and reflections become part of
                  the qualitative archive.
                </p>
              </div>

              <div className="hidden items-center text-accent md:flex">→</div>

              <div className="rounded-xl border border-hairline bg-surface p-5">
                <h3 className="text-lg font-semibold text-ink">Stats</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Anonymous survey responses feed the dashboard and help quantify
                  patterns across experiences.
                </p>
              </div>

              <div className="hidden items-center text-accent md:flex">→</div>

              <div className="rounded-xl border border-hairline bg-surface p-5">
                <h3 className="text-lg font-semibold text-ink">The Case</h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Together, stories and stats become evidence that can support
                  public education, advocacy, and reform.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="pb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionIn}
        >
          <p className={eyebrow}>Our principles</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-hairline bg-surface/60 p-6 transition hover:border-accent/70"
              >
                <h2 className="text-xl font-semibold text-ink">
                  {principle.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {principle.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="relative isolate overflow-hidden rounded-2xl border border-hairline/70 bg-surface/70 px-5 py-10 text-center shadow-xl shadow-black/20 sm:px-8 sm:py-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionIn}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_45%_at_50%_0%,rgba(157,52,46,0.16),transparent_72%)]" />

          <p className={eyebrow}>Build with us</p>

          <h2 className="mx-auto mt-5 max-w-2xl text-[2rem] font-bold leading-[1.08] text-balance sm:text-5xl">
            Every contribution strengthens the record.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            You can share a story, complete the anonymous survey, explore what
            others have documented, or return when you are ready.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/collection" className={primaryBtn}>
              Contribute
            </Link>
            <Link to="/case" className={secondaryBtn}>
              See the Case
            </Link>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}