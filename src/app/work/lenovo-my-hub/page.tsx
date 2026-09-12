import type { Metadata } from "next";
import Link from "next/link";

import { SiteNav } from "@/components/site-nav";
import caseStudies from "@/data/case-studies.json";

const project = caseStudies.uxResearch.find(
  (caseStudy) => caseStudy.slug === "lenovo-my-hub",
);

export const metadata: Metadata = {
  title: "Lenovo My Hub: Information Architecture — Maithily Ashtankar",
  description:
    "A protected Lenovo UX research case study focused on information architecture, card sorting, and tree testing.",
};

export default function LenovoMyHubPage() {
  return (
    <main className="min-h-screen bg-dots text-ink">
      <SiteNav />

      <section className="home-shell flex min-h-screen items-center py-28">
        <div className="max-w-[720px] rounded-[24px] border border-blue-100 bg-white/90 p-8 shadow-large backdrop-blur-sm sm:p-10">
          <p className="font-mono text-mono-label uppercase text-brand">
            Protected Lenovo research
          </p>
          <h1 className="mt-4 text-[40px] font-bold leading-[1.1] tracking-[-0.01em] text-blue-900 sm:text-[52px]">
            {project?.title ?? "Lenovo My Hub: Information Architecture"}
          </h1>
          <p className="mt-5 text-body-lg text-ink-secondary">
            {project?.subtitle ??
              "This case study is being prepared for the portfolio."}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {(project?.tags ?? ["CARD SORT", "TREE TEST"]).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-0 px-3 py-1 font-mono text-mono-tag uppercase text-brand"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-body text-ink-secondary">
            Full case-study content is coming soon. For now, I can walk through
            this work directly in a review or interview conversation.
          </p>

          <Link
            href="/#work"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-blue-500 px-6 text-button text-white transition hover:bg-blue-600"
          >
            Back to projects
          </Link>
        </div>
      </section>
    </main>
  );
}
