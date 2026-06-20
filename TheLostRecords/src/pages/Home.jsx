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
const flowItems = [
  {
    label: 'Stories',
    detail: 'preserve the truth',
  },
  {
    label: 'Archive',
    detail: 'documents lived experience',
  },
  {
    label: 'Stats',
    detail: 'reveal the pattern',
  },
  {
    label: 'Dashboard',
    detail: 'shows what is recurring',
  },
  {
    label: 'Public Record',
    detail: 'brings evidence together',
  },
  {
    label: 'The Case',
    detail: 'supports reform',
  },
];
function EvidenceFlow() {
  return (
    <div className="mx-auto mt-8 max-w-xl">
      <div className="relative overflow-hidden rounded-2xl border border-hairline/70 bg-base/45 p-4 shadow-xl shadow-black/20 sm:p-5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_45%_at_50%_0%,rgba(157,52,46,0.16),transparent_72%)]" />
        <div className="space-y-3">
          {flowItems.map((item, index) => (
            <div key={item.label}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.05, duration: 0.38, ease: 'easeOut' }}
                className="group rounded-xl border border-hairline/70 bg-surface/45 px-4 py-4 transition hover:border-accent/70 hover:bg-surface/75"
              >
                <p className="text-lg font-semibold text-ink">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
              </motion.div>
              {index < flowItems.length - 1 && (
                <div className="mx-auto h-6 w-px bg-gradient-to-b from-accent/60 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <main className="text-ink">
        {/* HERO */}
        <section className="relative isolate overflow-hidden rounded-2xl border border-hairline/60 bg-base/80 px-5 py-12 shadow-xl shadow-black/25 sm:px-8 sm:py-18 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(75%_45%_at_50%_0%,rgba(157,52,46,0.2),transparent_72%)]" />
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          <div className="mx-auto max-w-3xl">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className={eyebrow}
            >
              Evidence-building platform
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="mt-5 max-w-3xl text-[2.55rem] font-bold leading-[1.02] text-balance sm:text-6xl lg:text-7xl"
            >
              Stories preserve the truth.
              <br />
              <span className="text-muted">Stats reveal the pattern.</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="mt-6 max-w-2xl text-[1.08rem] leading-8 text-muted sm:text-xl"
            >
              The Lost Records is building a public record of mental healthcare
              experiences — turning individual experiences into collective
              evidence for reform.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link to="/collection" className={primaryBtn}>
                Contribute Your Experience
              </Link>
              <Link to="/responses" className={secondaryBtn}>
                Explore the Records
              </Link>
            </motion.div>
          </div>
        </section>
        {/* COLLECTIVE EVIDENCE */}
        <motion.section
          className="mx-auto max-w-3xl py-14 sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionIn}
        >
          <p className={eyebrow}>Collective evidence</p>
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
              What people endured.
              <br />
              What helped.
              <br />
              What harmed.
              <br />
              What shaped whether they could trust care again.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-ink sm:text-lg">
              The Lost Records exists to help document what the system does not
              consistently measure.
            </p>
          </div>
        </motion.section>
        {/* CHOOSE HOW TO CONTRIBUTE */}
        <motion.section
          className="mx-auto max-w-5xl py-4 sm:py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionIn}
        >
          <div className="relative overflow-hidden rounded-2xl border border-hairline/70 bg-surface/45 px-5 py-9 sm:px-8 sm:py-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(65%_45%_at_50%_0%,rgba(157,52,46,0.13),transparent_76%)]" />
            <p className={eyebrow}>Choose how to contribute</p>
            <h2 className="mt-5 max-w-2xl text-[2rem] font-bold leading-[1.08] text-balance sm:text-5xl">
              Two ways to help build the record.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Link
                to="/collection"
                className="group rounded-2xl border border-hairline/70 bg-base/45 p-5 transition hover:border-accent/70 hover:bg-base/70 hover:no-underline"
              >
                <p className={eyebrow}>Share a story</p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">
                  Add to the Archive
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  Stories preserve what official records often flatten, omit, or
                  misrepresent.
                </p>
                <p className="mt-5 text-sm font-semibold text-accent-soft">
                  Preserve the truth →
                </p>
              </Link>
              <Link
                to="/collection"
                className="group rounded-2xl border border-hairline/70 bg-base/45 p-5 transition hover:border-accent/70 hover:bg-base/70 hover:no-underline"
              >
                <p className={eyebrow}>Share your stats</p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">
                  Add to the Dashboard
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  Survey responses help reveal patterns across different care
                  experiences.
                </p>
                <p className="mt-5 text-sm font-semibold text-accent-soft">
                  Reveal the pattern →
                </p>
              </Link>
            </div>
          </div>
        </motion.section>
        {/* EVIDENCE FLOW */}
        <motion.section
          className="mx-auto max-w-4xl py-14 text-center sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionIn}
        >
          <p className={eyebrow}>How evidence builds</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-[2rem] font-bold leading-[1.08] text-balance sm:text-5xl">
            Individual contributions become part of something larger.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Stories and stats do different work. Together, they create a fuller
            public record of mental healthcare experiences.
          </p>
          <EvidenceFlow />
        </motion.section>
        {/* FINAL CTA */}
        <motion.section
          className="relative isolate overflow-hidden rounded-2xl border border-hairline/70 bg-surface/70 px-5 py-11 text-center shadow-xl shadow-black/20 sm:px-8 sm:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionIn}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_45%_at_50%_0%,rgba(157,52,46,0.17),transparent_72%)]" />
          <div className="mx-auto max-w-2xl">
            <p className={eyebrow}>The record is still being written</p>
            <h2 className="mt-5 text-[2rem] font-bold leading-[1.08] text-balance sm:text-5xl">
              Help document what the system misses.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Contribute a story, complete the survey, or explore what others
              have already added to the public record.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link to="/collection" className={primaryBtn}>
                Contribute Your Experience
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