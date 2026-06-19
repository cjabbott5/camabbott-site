// pages/Legal/TermsOfUse.jsx
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

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-12 text-ink">
        {/* Draft notice — remove once a lawyer has reviewed */}
        <div className="mb-8 rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-muted">
          These terms are a working draft and not legal advice. Have an attorney
          review them before launch, especially the license, disclaimer, and
          liability sections.
        </div>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-accent">Terms of Use</h1>
          <p className="mt-2 text-sm text-muted">Last updated: {LAST_UPDATED}</p>
          <p className="mt-4 text-muted leading-relaxed">
            By using The Lost Records or submitting to it, you agree to these
            terms. They're written to protect you and the people in your story as
            much as the project.
          </p>
        </header>

        <div className="space-y-10">
          <Section title="Who can contribute">
            <p>
              You must be 18 or older to submit. By contributing, you confirm
              that you are. You may share your own experience, an experience you
              had as a minor (recounted now, as an adult), your child's
              experience if you are their parent or legal guardian, or an
              experience from your work as a provider.
            </p>
          </Section>

          <Section title="What this is — and isn't">
            <p>
              The Lost Records is an archive and advocacy project. It is{' '}
              <span className="font-medium text-ink">not</span> medical advice, a
              diagnosis, a treatment provider, a crisis service, or legal
              counsel, and nothing here should be relied on as any of those.
            </p>
            <p>
              If you're in crisis, please reach out for support — call or text{' '}
              <a href="tel:988" className="font-medium text-accent hover:text-accent-soft">
                988
              </a>
              , or call 911 if you're in immediate danger.
            </p>
          </Section>

          <Section title="Submitting responsibly">
            <p>Please make sure your submission is:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <span className="font-medium text-ink">True to your experience.</span>{' '}
                Share what actually happened, to the best of your memory.
              </li>
              <li>
                <span className="font-medium text-ink">Yours to share.</span>{' '}
                Don't submit someone else's story as your own, or post another
                person's private health information.
              </li>
              <li>
                <span className="font-medium text-ink">Free of named individuals.</span>{' '}
                Don't name or otherwise identify specific people — clinicians,
                staff, or other patients. Describe roles and settings instead.
                This protects you from disputes over what was said and protects
                others' privacy.
              </li>
              <li>
                <span className="font-medium text-ink">Focused.</span> Stories
                work best under 500 words with at least one relevant tag.
              </li>
            </ul>
            <p>
              Don't submit content that is unlawful, harassing, or that
              knowingly makes false accusations against an identifiable person.
            </p>
          </Section>

          <Section title="Permission you give us">
            <p>
              You keep ownership of what you write. By submitting, you grant The
              Lost Records a non-exclusive, royalty-free, worldwide permission to
              publish, display, excerpt, store, and analyze your submission —
              including in aggregated or anonymized form, and in reports,
              educational materials, and advocacy — as part of this archive and
              its mission. You can ask us to remove your submission at any time
              (see the Privacy Policy for how, and its limits).
            </p>
          </Section>

          <Section title="Moderation and editing">
            <p>
              To keep the archive trustworthy, we may review submissions before
              or after they appear. We may redact identifying details, lightly
              edit for length or clarity, decline a submission, or remove one
              later. We don't guarantee that any particular submission will be
              published.
            </p>
          </Section>

          <Section title="Using the site">
            <p>
              Please don't attempt to disrupt the site, scrape it at scale,
              misuse submitted content to identify or harm contributors, or use
              it for any unlawful purpose.
            </p>
          </Section>

          <Section title="Disclaimers and liability">
            <p>
              The site and its content are provided "as is," without warranties
              of any kind. To the fullest extent allowed by law, The Lost
              Records and the people behind it are not liable for damages arising
              from your use of the site or reliance on its content. Some
              jurisdictions don't allow certain limitations, so parts of this may
              not apply to you.
            </p>
          </Section>

          <Section title="Changes to these terms">
            <p>
              We may update these terms as the project grows. We'll revise the
              "last updated" date above, and continued use after a change means
              you accept the updated terms.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms:{' '}
              <a
                href="mailto:hello@example.com"
                className="font-medium text-accent hover:text-accent-soft"
              >
                hello@example.com
              </a>
              . {/* TODO: replace with your real contact address */}
            </p>
          </Section>
        </div>

        <div className="mt-12 border-t border-hairline pt-6 text-sm">
          <Link to="/privacy" className="text-accent hover:text-accent-soft font-medium">
            Read the Privacy Policy →
          </Link>
        </div>
      </div>
    </Layout>
  );
}