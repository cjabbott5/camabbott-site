import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import CrisisResources from '../components/ui/CrisisResources';

const whyItMattersCards = [
  {
    title: 'Records aren’t written for patients',
    text: 'They’re often designed for billing, compliance, and liability — not healing or accountability.',
  },
  {
    title: 'Real experiences get erased',
    text: 'Harm is buried in jargon, stripped of nuance, and rewritten to protect institutions.',
  },
  {
    title: 'Change needs proof',
    text: 'We’re building evidence that can’t be ignored — stories and data that point to patterns.',
  },
];

const shareTiles = [
  {
    title: 'A Story',
    subtitle: 'Under 500 words · share as many as you like',
    text: 'A personal experience that shows what went wrong — and why it matters.',
    link: '/collection/story',
    cta: 'Share Your Story',
  },
  {
    title: 'Your Stats',
    subtitle: 'Quick survey · once per person',
    text: 'Short responses that help quantify harm, gaps, and unmet needs.',
    link: '/collection/stats',
    cta: 'Share Your Stats',
  },
  {
    title: 'Shared Insight',
    subtitle: 'A reflection or pattern',
    text: 'A realization, observation, or idea about what needs to change.',
    link: null,
    cta: 'Coming Soon',
  },
];

const primaryBtn =
  'inline-flex justify-center bg-accent text-accent-ink font-semibold px-6 py-3 rounded-xl text-center transition hover:bg-accent-soft hover:text-accent-ink hover:no-underline';
const secondaryBtn =
  'inline-flex justify-center border border-hairline text-ink font-semibold px-6 py-3 rounded-xl text-center transition hover:border-accent hover:text-ink hover:no-underline';

export default function TheCollection() {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Trauma-informed support, up top */}
        <div className="mb-10">
          <CrisisResources />
        </div>

        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-accent">Contribute</h1>
          <p className="mb-2 text-lg text-ink">This is where the record begins — with you.</p>
          <p className="mb-8 text-lg text-muted">
            You’re helping build the proof we need to demand change, and finally be taken seriously.
          </p>

          <div className="mb-10 border-l-2 border-accent py-2 pl-4">
            <p className="text-lg font-semibold text-ink">
              The system controls the narrative.
            </p>
            <p className="text-lg italic text-muted">We’re here to take it back.</p>
          </div>

          <div className="mb-14 flex flex-col gap-4 sm:flex-row">
            <Link to="/collection/story" className={primaryBtn}>
              Share Your Story
            </Link>
            <Link to="/collection/stats" className={secondaryBtn}>
              Share Your Stats
            </Link>
          </div>
        </div>

        {/* Why It Matters */}
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold text-accent">Why it matters</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {whyItMattersCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-hairline bg-surface p-6"
              >
                <h3 className="mb-2 font-semibold text-ink">{card.title}</h3>
                <p className="leading-relaxed text-muted">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-hairline bg-surface p-6">
            <p className="leading-relaxed text-ink">
              <span className="font-semibold">Here, we do things differently.</span> We document
              for each other. We write what actually happened — clearly, honestly, and on our own
              terms.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              This is how we reclaim the record and build something the system can’t ignore.
            </p>
          </div>
        </section>

        {/* What You Can Share */}
        <section className="mt-16">
          <h2 className="mb-3 text-2xl font-semibold text-accent">What you can share</h2>
          <p className="max-w-3xl leading-relaxed text-muted">
            We’re gathering stories, statistics, and insights — anything that helps map what’s
            really happening inside the system. You can{' '}
            <span className="font-semibold text-ink">share as many stories as you like</span>. The
            stats survey is designed to be taken{' '}
            <span className="font-semibold text-ink">once per person</span>, so the numbers stay
            accurate — but you’re always welcome to come back and add another story.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {shareTiles.map((tile) => {
              const content = (
                <div className="rounded-xl border border-hairline bg-surface p-6 transition hover:border-accent">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-ink">{tile.title}</h3>
                      <p className="text-sm italic text-accent">{tile.subtitle}</p>
                    </div>
                    <div className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
                      {tile.cta}
                    </div>
                  </div>
                  <p className="leading-relaxed text-muted">{tile.text}</p>
                </div>
              );

              if (!tile.link) return <div key={tile.title}>{content}</div>;

              return (
                <Link key={tile.title} to={tile.link} className="block hover:no-underline">
                  {content}
                </Link>
              );
            })}
          </div>

          {/* Submission guidelines */}
          <div className="mt-8 rounded-xl border border-hairline bg-surface p-6">
            <p className="leading-relaxed text-muted">
              If you share a story, keep it{' '}
              <span className="font-semibold text-ink">under 500 words</span> and include{' '}
              <span className="font-semibold text-ink">at least one relevant tag</span> (e.g.,
              “inpatient psych,” “insurance denial,” “racial bias”).
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              To protect you and others, please{' '}
              <span className="font-semibold text-ink">don’t name specific individuals</span> —
              describe roles and settings instead (“the attending psychiatrist,” “the adolescent
              unit”). Full guidance is in the{' '}
              <Link to="/terms" className="text-accent hover:text-accent-soft">
                Terms of Use
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Pointer to The Vision (replaces the old "What We're Building" section) */}
        <section className="mt-16">
          <div className="flex flex-col gap-4 rounded-xl border border-hairline bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-1 text-xl font-semibold text-ink">
                Curious what happens to your contribution?
              </h2>
              <p className="leading-relaxed text-muted">
                Every submission becomes part of a living archive we use to analyze patterns,
                surface failures, and push for reform. See where it’s all headed on The Vision.
              </p>
            </div>
            <Link to="/vision" className={`${secondaryBtn} sm:shrink-0`}>
              See the Vision
            </Link>
          </div>
        </section>

        {/* Data Use Notice */}
        <section className="mt-16">
          <h2 className="mb-4 text-2xl font-semibold text-accent">Before you share</h2>

          <div className="max-w-3xl rounded-xl border border-hairline bg-surface p-6">
            <ul className="space-y-3 text-muted">
              <li>
                You must be <span className="font-semibold text-ink">18 or older</span> to
                contribute. Youth experiences are welcome through adults recounting their own care
                as minors, parents or guardians, and providers.
              </li>
              <li>We don’t ask for your name. Submissions are published without it.</li>
              <li>
                We do <span className="font-semibold text-ink">not</span> sell your data, and we
                don’t profit from it.
              </li>
              <li>
                Your words are used for public education, systems analysis, and advocacy — as part
                of a public archive.
              </li>
              <li>
                Treat anything you submit as public. You can ask us to remove it later, with the
                limits explained in our policy.
              </li>
            </ul>

            <p className="mt-4 text-sm text-muted">
              Full details:{' '}
              <Link to="/privacy" className="text-accent hover:text-accent-soft">
                Privacy Policy
              </Link>{' '}
              ·{' '}
              <Link to="/terms" className="text-accent hover:text-accent-soft">
                Terms of Use
              </Link>
            </p>
          </div>

          {/* Bottom CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/collection/story" className={primaryBtn}>
              Share Your Story
            </Link>
            <Link to="/collection/stats" className={secondaryBtn}>
              Share Your Stats
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}