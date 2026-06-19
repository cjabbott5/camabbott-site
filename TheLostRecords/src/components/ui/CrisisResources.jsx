// components/ui/CrisisResources.jsx
//
// Trauma-informed support component. Drop it near the top of any page where
// people read or write about harm (Contribute, Share Your Story, Narratives).
//
// Usage:
//   <CrisisResources />                      // full box (default)
//   <CrisisResources variant="compact" />    // single-line content note + link row
//
// US resources only for now. If/when you serve other regions, pass a
// `resources` prop or branch on locale.

const US_RESOURCES = [
  {
    label: '988 Suicide & Crisis Lifeline',
    detail: 'Call or text 988',
    href: 'tel:988',
  },
  {
    label: 'Crisis Text Line',
    detail: 'Text HOME to 741741',
    href: 'sms:741741?&body=HOME',
  },
  {
    label: 'Emergency',
    detail: 'Call 911 if you or someone else is in immediate danger',
    href: 'tel:911',
  },
];

export default function CrisisResources({ variant = 'full' }) {
  if (variant === 'compact') {
    return (
      <div className="rounded-xl border border-hairline bg-surface px-4 py-3 text-sm text-muted">
        <span className="font-medium text-ink">A note before you read:</span>{' '}
        these stories describe harm in mental healthcare and may be hard to
        sit with. If you need support now, call or text{' '}
        <a href="tel:988" className="font-medium text-accent hover:text-accent-soft">
          988
        </a>
        .
      </div>
    );
  }

  return (
    <aside
      role="complementary"
      aria-label="Support resources"
      className="rounded-2xl border border-hairline bg-surface p-6"
    >
      <p className="text-ink leading-relaxed">
        <span className="font-semibold">Before you begin.</span> The
        experiences shared here describe harm, distress, and time spent in
        mental healthcare. It's okay to step away at any point. You're never
        obligated to finish.
      </p>

      <p className="mt-3 text-muted leading-relaxed">
        If you're struggling right now, support is available 24/7 and free:
      </p>

      <ul className="mt-4 space-y-2">
        {US_RESOURCES.map((r) => (
          <li key={r.label} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
            <a
              href={r.href}
              className="font-medium text-accent hover:text-accent-soft transition-colors"
            >
              {r.label}
            </a>
            <span className="text-sm text-muted">— {r.detail}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-muted">
        The Lost Records is an archive and advocacy project. It is not a crisis
        service, a treatment provider, or a substitute for professional care.
      </p>
    </aside>
  );
}