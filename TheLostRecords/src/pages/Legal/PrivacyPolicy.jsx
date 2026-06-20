// pages/Legal/PrivacyPolicy.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const LAST_UPDATED = 'June 18, 2026';

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <div className="space-y-3 text-muted leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-12 text-ink">
        {/* Draft notice — remove once a lawyer has reviewed */}
        <div className="mb-8 rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-muted">
          This policy is a working draft and not legal advice. Have an attorney
          review it before launch, especially the sections on minors and
          publication.
        </div>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-accent">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated: {LAST_UPDATED}</p>
          <p className="mt-4 text-muted leading-relaxed">
            The Lost Records collects lived experiences of mental healthcare so
            they can become public evidence for reform. Because what you share
            is sensitive, we try to take less from you, not more, and to be
            honest about what we can and can't promise.
          </p>
        </header>

        <div className="space-y-10">
          <Section title="What we collect">
            <p>
              <span className="font-medium text-ink">What you give us.</span>{' '}
              The story or survey responses you choose to submit. We do not ask
              for your name, and you can leave any field blank. If you
              optionally give us a way to contact you, we keep it separate from
              your published submission.
            </p>
            <p>
              <span className="font-medium text-ink">What's collected automatically.</span>{' '}
              Like most websites, our hosting and analytics tools may record
              basic technical data (such as approximate region, device type,
              and pages visited) to keep the site working and understand reach.
              We don't use this to identify you.
            </p>
          </Section>

          <Section title="What we never do">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>We do not sell your data.</li>
              <li>We do not profit from your story.</li>
              <li>
                We do not share submissions with insurers, employers, or care
                providers for use against you.
              </li>
              <li>We do not require an account or login to contribute.</li>
            </ul>
          </Section>

          <Section title="How we use what you share">
            <p>
              Submissions are used for public education, pattern and systems
              analysis, advocacy, and inclusion in a public, referenceable
              archive. We may quote, excerpt, or aggregate submissions in
              reports and policy materials — always without attaching your name
              unless you've explicitly asked us to.
            </p>
          </Section>

          <Section title="Your submission becomes public — and we want you to understand that">
            <p>
              The point of this archive is visibility, so stories and aggregated
              data are intended to be seen publicly. Please treat anything you
              submit as public the moment you send it.
            </p>
            <p>
              <span className="font-medium text-ink">An honest limitation:</span>{' '}
              we're an early-stage project and don't yet have accounts or a
              self-service way for you to edit or delete a submission after the
              fact. If you want something removed or corrected, email us (below)
              and we'll act on it as quickly as we reasonably can — but we can't
              guarantee a copy hasn't already been read, cached, or saved
              elsewhere. We'd rather tell you that plainly than imply a control
              we don't have yet.
            </p>
          </Section>

          <Section title="Protecting other people in your story">
            <p>
              To protect you and others, please don't include the names of
              specific individuals (clinicians, staff, other patients). Describe
              roles and settings instead — "the attending psychiatrist," "the
              adolescent unit." If a submission names identifiable people, we may
              redact those details before it appears.
            </p>
          </Section>

          <Section title="Minors">
            <p>
              You must be 18 or older to submit. We do not knowingly collect
              information from people under 18.
            </p>
            <p>
              Youth experiences matter deeply to this work, so we actively
              welcome them through people who can consent on their own behalf:
              adults recounting care they received as minors, parents or legal
              guardians sharing a child's experience, and providers who worked
              in youth settings. If we learn that a submission came directly
              from someone under 18, we'll remove it.
            </p>
          </Section>

          <Section title="Service providers">
            <p>
              We rely on third parties for hosting and basic analytics. They
              process data only to provide those services and are not permitted
              to use your information for their own purposes.
            </p>
          </Section>

          <Section title="Security">
            <p>
              We take reasonable measures to protect the information we hold. No
              method of transmission or storage is perfectly secure, so we can't
              guarantee absolute security — another reason we ask you not to
              include details you wouldn't want to be public.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy as the project grows. We'll revise the
              "last updated" date above, and significant changes will be noted
              on the site.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions, corrections, or removal requests:{' '}
              <a
                href="mailto:camabbott5@gmail.com"
                className="font-medium text-accent hover:text-accent-soft"
              >
                camabbott5@gmail.com
              </a>
              . {/* TODO: replace with your real contact address */}
            </p>
          </Section>
        </div>

        <div className="mt-12 border-t border-hairline pt-6 text-sm">
          <Link to="/terms" className="text-accent hover:text-accent-soft font-medium">
            Read the Terms of Use →
          </Link>
        </div>
      </div>
    </Layout>
  );
}