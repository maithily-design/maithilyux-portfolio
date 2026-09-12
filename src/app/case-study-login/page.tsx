import type { Metadata } from "next";
import Link from "next/link";
import { Lock } from "lucide-react";

import { SiteNav } from "@/components/site-nav";
import { sanitizeNextPath } from "@/lib/case-study-auth";

export const metadata: Metadata = {
  title: "Protected Case Study — Maithily Ashtankar",
  description:
    "Enter the case study password to view protected Lenovo research work.",
};

type CaseStudyLoginPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function getSingleParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function CaseStudyLoginPage({
  searchParams,
}: CaseStudyLoginPageProps) {
  const params = (await searchParams) ?? {};
  const nextPath = sanitizeNextPath(getSingleParam(params.next) ?? null);
  const hasError = getSingleParam(params.error) === "1";

  return (
    <main className="min-h-screen bg-dots text-ink">
      <SiteNav />

      <section className="flex min-h-screen items-center justify-center px-4 py-28">
        <div className="w-full max-w-[480px] rounded-[24px] border border-blue-100 bg-white/90 p-8 shadow-large backdrop-blur-sm">
          <div className="flex size-12 items-center justify-center rounded-full bg-blue-0 text-brand">
            <Lock aria-hidden className="size-5" />
          </div>

          <p className="mt-6 font-mono text-mono-label uppercase text-brand">
            Protected case study
          </p>
          <p className="mt-4 text-body text-ink-secondary">
            Enter the password to view this case study. If you do not have it,
            please reach out to me directly.
          </p>

          <form
            action="/api/case-study-login"
            method="post"
            className="mt-8 flex flex-col gap-4"
          >
            <input type="hidden" name="next" value={nextPath} />

            <label className="flex flex-col gap-2 text-body-sm font-semibold text-ink">
              Password
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="h-12 rounded-xl border border-hairline bg-white px-4 text-body text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-blue-100"
                placeholder="Enter password"
              />
            </label>

            {hasError ? (
              <p className="rounded-xl bg-red-0 px-4 py-3 text-caption text-red-500">
                That password did not work. Please try again.
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-2 inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-blue-500 px-6 text-button text-white transition hover:bg-blue-600"
            >
              Unlock case study
            </button>
          </form>

          <Link
            href="/#work"
            className="mt-6 inline-flex text-button text-brand transition hover:opacity-70"
          >
            ← Back to all projects
          </Link>
        </div>
      </section>
    </main>
  );
}
