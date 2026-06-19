import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-5 sm:px-6 py-24 text-center">
        <p className="text-sm font-medium tracking-wide text-accent">Page not found</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-ink">
          This record isn’t here.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
          The page may have moved, or the link may be incomplete. Let’s get you back to
          something solid.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center">
          <Link
            to="/home"
            className="inline-flex justify-center rounded-xl bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:bg-accent-soft hover:text-accent-ink hover:no-underline"
          >
            Go home
          </Link>
          <Link
            to="/responses"
            className="inline-flex justify-center rounded-xl border border-hairline px-6 py-3 font-semibold text-ink transition hover:border-accent hover:text-ink hover:no-underline"
          >
            Explore the records
          </Link>
        </div>
      </div>
    </Layout>
  );
}