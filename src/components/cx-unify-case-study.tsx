"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "the-problem", label: "The Problem" },
  { id: "research-design", label: "Research Design" },
  { id: "headline-finding", label: "Headline Finding" },
  { id: "six-findings", label: "Six Findings" },
  { id: "sus-score", label: "SUS Score" },
  { id: "recommendations", label: "Recommendations" },
  { id: "impact", label: "Impact" },
];

const metadata = [
  ["ROLE", "Sole UX Researcher", "Internal Tools / LXG"],
  ["PARTICIPANTS", "12 Expert Users", "3 Role Types, 6 Regions"],
  ["SCOPE", "6 Task Scenarios", "Current Toolset Baseline"],
  ["METHODS", "Moderated Usability Test", "SUS, Time-on-Task"],
];

const costCards = [
  {
    icon: "⇄",
    title: "Constant tool-switching",
    detail: "Re-orienting every time the context changes",
  },
  {
    icon: "≠",
    title: "Numbers that don't agree",
    detail: "One question, different answers in different tools",
  },
  {
    icon: "↻",
    title: "Manual, repeated work",
    detail: "Significance, themes & decks rebuilt by hand each cycle",
  },
];

const participantCards = [
  {
    count: "6",
    title: "Regional CX Consultants",
    tag: "LAS · AP · EU · EMEA · NA · BR",
    bg: "bg-blue-0",
  },
  {
    count: "3",
    title: "Leadership & Program",
    tag: "WW COMMERCIAL · GOVERNANCE · CX KPI",
    bg: "bg-green-0",
  },
  {
    count: "3",
    title: "Analysts & Admins",
    tag: "SURVEY OPS · ANALYTICS · SERVICES",
    bg: "bg-purple-0",
  },
];

const scenarios = [
  { title: "Find the score", quote: "“What's our NPS — and why did it move?”" },
  {
    title: "Check follow-ups",
    quote: "“Are we acting on unhappy customers?”",
  },
  {
    title: "Review open cases",
    quote: "“What's still open for my region?”",
  },
  {
    title: "Understand themes",
    quote: "“What are customers actually telling us?”",
  },
  {
    title: "Check participation",
    quote: "“Are enough customers responding?”",
  },
  {
    title: "Compare regions",
    quote: "“What are other regions prioritizing?”",
  },
];

const throughline = [
  {
    label: "FIND",
    labelColor: "text-green-500",
    stat: "11/12",
    title: "Pull the number",
    status: "Works well",
    statusColor: "text-green-500",
    bg: "bg-green-0",
  },
  {
    label: "EXPLAIN",
    labelColor: "text-brand",
    stat: "10/12",
    title: "Say why it moved",
    status: "Manual workarounds",
    statusColor: "text-brand",
    bg: "bg-blue-0",
  },
  {
    label: "INTERPRET",
    labelColor: "text-red-500",
    stat: "4/12",
    title: "Read the themes",
    status: "Trust breaks",
    statusColor: "text-red-500",
    bg: "bg-red-0",
  },
  {
    label: "COMPARE",
    labelColor: "text-red-500",
    stat: "3/12",
    title: "Across regions",
    status: "Barely possible",
    statusColor: "text-red-500",
    bg: "bg-red-0",
  },
];

const findings = [
  {
    label: "FINDING 01 · THE FOUNDATION",
    labelColor: "text-green-500",
    title: "Finding a Number? They've Got It.",
    bg: "bg-green-0",
    stats: [
      "11/12 completed NPS task",
      "12/12 confident the score was correct",
      "11/12 found participation data easily",
    ],
    body: "This is the bar to protect. Whatever Unify changes, the easy things must stay easy.",
  },
  {
    label: "FINDING 02",
    labelColor: "text-brand",
    title: "Finding It Is Easy. Explaining It Isn't.",
    bg: "bg-blue-0",
    bullets: [
      "6 people run significance by hand",
      "2/12 felt no confidence explaining change",
      "+1 step — every readout needs work outside the tool",
    ],
    quote: "“Getting the information is a lot easier than telling the story around it.”",
    attribution: "— Leadership user",
  },
  {
    label: "FINDING 03",
    labelColor: "text-red-500",
    title: "Reading Themes Is Where Trust Breaks.",
    bg: "bg-red-0",
    bullets: [
      "4/12 completed the theme task",
      "1/12 fully confident in theme summary",
      "2 tools distrusted — Forsta vs. warmer CX Genie",
    ],
    quote: "“I can get it 95% accurate with my own brain — versus 80% on the AI.”",
    attribution: "— Regional consultant",
  },
  {
    label: "FINDING 04",
    labelColor: "text-purple-500",
    title: "Comparing Across Regions Barely Worked.",
    bg: "bg-purple-0",
    bullets: [
      "3/12 completed cross-region comparison",
      "No native way to compare side-by-side",
      "Actions buried in the menu",
    ],
    quote: "“I would welcome an additional column for priority.”",
    attribution: "— EMEA consultant",
  },
  {
    label: "FINDING 05",
    labelColor: "text-brand",
    title: "Tool-Hopping Has Become Invisible.",
    bg: "bg-blue-0",
    bullets: [
      "3-4 tools touched per question",
      "All 12 switched tools mid-task",
      "“One place” — raised unprompted, again and again",
    ],
    quote: "“If only there were just a one-stop shop for everything.”",
    attribution: "— North America consultant",
  },
  {
    label: "FINDING 06",
    labelColor: "text-ink-secondary",
    title: "Nothing Comes Out Presentation-Ready.",
    bg: "bg-canvas",
    bullets: [
      "Every readout reformatted by hand",
      "Screenshots — how charts reach a deck",
      "PPT-ready — the most-requested missing export",
    ],
    quote: "“I can't drag and drop any of this — I have to rebuild it for a PowerPoint.”",
    attribution: "— Regional consultant",
  },
];

const susDetails = [
  { label: "GRADE", value: "C−" },
  { label: "PERCENTILE", value: "35–40th" },
  { label: "ADJECTIVE", value: "OK" },
  { label: "ACCEPTABILITY", value: "Marginal" },
];

const recommendations = [
  {
    number: 1,
    numberBg: "bg-brand",
    title: "One workspace, role-aware defaults",
    detail:
      "End the tool-hopping. Open each role straight into the view they actually need.",
    badge: "FINDING 05",
  },
  {
    number: 2,
    numberBg: "bg-brand",
    title: "An explanation layer",
    detail:
      "Significance and business context sitting next to every number — no side files.",
    badge: "FINDING 02",
  },
  {
    number: 3,
    numberBg: "bg-red-500",
    title: "Theming people can trust",
    detail: "Accurate categories, traceable counts, and one agreed source of truth.",
    badge: "FINDING 03",
  },
  {
    number: 4,
    numberBg: "bg-purple-500",
    title: "Native cross-region comparison",
    detail:
      "Compare priorities and initiatives across geographies without rebuilding it.",
    badge: "FINDING 04",
  },
  {
    number: 5,
    numberBg: "bg-ink-secondary",
    title: "Presentation-ready output",
    detail: "Clean, on-brand export that lands in a deck without the manual rebuild.",
    badge: "FINDING 06",
  },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-hairline pt-12">
      <p className="font-mono text-mono-label uppercase text-brand">{eyebrow}</p>
      <h2 className="mt-4 text-[28px] font-bold leading-9 tracking-[-0.005em] text-ink">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-6">{children}</div>
    </section>
  );
}

function DarkQuote({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <blockquote className="rounded-2xl bg-ink p-10">
      <p className="text-h4 text-white">{quote}</p>
      <footer className="mt-5 font-mono text-mono-caption text-ink-tertiary">
        {attribution}
      </footer>
    </blockquote>
  );
}

function Placeholder({ height, caption }: { height: number; caption: string }) {
  return (
    <figure className="flex flex-col gap-2">
      <div
        className="flex w-full items-center justify-center rounded-xl bg-canvas"
        style={{ height }}
      >
        <span className="font-mono text-mono-caption uppercase tracking-[0.08em] text-gray-400">
          Figure redacted — confidential Lenovo research asset
        </span>
      </div>
      <figcaption className="font-mono text-mono-caption text-gray-400">
        {caption}
      </figcaption>
    </figure>
  );
}

export function CxUnifyCaseStudy() {
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -65% 0px",
        threshold: [0.12, 0.24, 0.36, 0.48],
      },
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    // The observer's bottom rootMargin means a short trailing section can
    // never cross the "active" band — force the last item on once the page
    // is scrolled to (or near) the bottom.
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveSection(navItems[navItems.length - 1].id);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-white text-ink">
      <div className="mx-auto flex w-full max-w-[1280px] gap-10 px-4 pb-24 pt-24 sm:px-6 lg:px-10 lg:pt-20">
        {/* Side nav: fixed in the viewport, not scroll-sticky */}
        <aside className="hidden w-[220px] shrink-0 lg:block">
          <nav
            className="fixed top-28 z-20 max-h-[calc(100vh-8rem)] w-[220px] overflow-y-auto"
            style={{ left: "max(2.5rem, calc((100vw - 1280px) / 2 + 2.5rem))" }}
          >
            <p className="font-mono text-[10px] font-medium uppercase leading-[14px] tracking-[0.08em] text-gray-500">
              On this page
            </p>
            <div className="mt-4 border-t border-hairline">
              {navItems.map((item) => {
                const active = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={active ? "true" : undefined}
                    className={
                      "block border-l-2 px-3 py-2.5 text-caption transition " +
                      (active
                        ? "border-brand text-brand"
                        : "border-transparent text-ink-tertiary hover:border-blue-100 hover:text-ink")
                    }
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>
        </aside>

        <article className="mx-auto flex w-full max-w-[828px] flex-col gap-12">
          <header>
            <div className="rounded-lg bg-blue-0 px-5 py-3.5 text-caption text-brand">
              🔒 This case study summarizes internal research at Lenovo. Tool
              interfaces, participant identities, and proprietary data have
              been omitted. The research methodology, analysis, and strategic
              framing are my own.
            </div>

            <Link
              href="/#work"
              className="mt-10 block w-fit text-button text-brand transition hover:opacity-70"
            >
              ← Back to all projects
            </Link>

            <h1 className="mt-12 max-w-[760px] text-[42px] font-bold leading-[1.12] tracking-[-0.015em] text-ink sm:text-[56px] sm:leading-[64px]">
              CX Unify: Baseline
              <span className="block">Usability Research</span>
            </h1>

            <p className="mt-2 max-w-[700px] text-h4 font-semibold text-ink-tertiary">
              Where Today&apos;s CX Tools Work, Where They Break, and What
              Should Be Fixed First
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metadata.map(([label, lineOne, lineTwo]) => (
                <div key={label} className="flex flex-col gap-2">
                  <dt className="font-mono text-mono-tag uppercase text-brand">
                    {label}
                  </dt>
                  <dd className="text-body-sm font-medium text-ink-secondary">
                    <span className="block">{lineOne}</span>
                    <span className="block">{lineTwo}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <Placeholder
                height={420}
                caption="Fig 1. CX Unify baseline study — presentation cover slide"
              />
            </div>
          </header>

          <Section
            id="the-problem"
            eyebrow="01 — The Problem"
            title="The Fragmented Toolset"
          >
            <p className="text-body text-ink-secondary">
              To answer even one customer question today, Lenovo&apos;s CX
              team works across seven tools — CEA, Vocal, Forsta, CX Genie,
              Copilot, Power BI, and Excel for the manual stitching that
              holds it all together. Each tool was added to solve one
              problem. Over time, the result was a fragmented workflow where
              the team spends more energy navigating between tools than
              actually acting on insight.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {costCards.map((cost) => (
                <div key={cost.title} className="rounded-xl bg-red-0 p-6">
                  <p className="text-h4 text-red-500">{cost.icon}</p>
                  <p className="mt-3 text-[16px] font-semibold leading-6 tracking-[-0.005em] text-ink">
                    {cost.title}
                  </p>
                  <p className="mt-2 text-caption text-ink-secondary">
                    {cost.detail}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="research-design"
            eyebrow="02 — Research Design"
            title="Who We Talked To & What We Asked"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {participantCards.map((part) => (
                <div
                  key={part.title}
                  className={`flex flex-col gap-3 rounded-2xl px-6 py-7 ${part.bg}`}
                >
                  <p className="text-[40px] font-bold leading-[48px] tracking-[-0.005em] text-ink">
                    {part.count}
                  </p>
                  <p className="text-[16px] font-semibold leading-6 tracking-[-0.005em] text-ink">
                    {part.title}
                  </p>
                  <p className="font-mono text-mono-stamp uppercase tracking-[0.08em] text-ink-tertiary">
                    {part.tag}
                  </p>
                </div>
              ))}
            </div>

            <DarkQuote
              quote="“Every participant is an expert daily user. If a task was hard for them, it will be harder for a newcomer — so this is a generous read.”"
              attribution="— Study design rationale"
            />

            <div>
              <h3 className="text-h4 text-ink">Six Everyday CX Scenarios</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {scenarios.map((scenario, index) => (
                  <div
                    key={scenario.title}
                    className="flex flex-col gap-2 rounded-xl bg-canvas p-5"
                  >
                    <p className="font-mono text-mono-stamp uppercase tracking-[0.08em] text-brand">
                      Scenario {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="text-[16px] font-semibold leading-6 tracking-[-0.005em] text-ink">
                      {scenario.title}
                    </p>
                    <p className="text-caption text-ink-secondary">
                      {scenario.quote}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section
            id="headline-finding"
            eyebrow="03 — The Headline Finding"
            title="The Single Throughline"
          >
            <DarkQuote
              quote="“Our team can find the numbers. The work breaks down when they have to explain them, compare them, and act on them — across too many tools.”"
              attribution="— Executive summary"
            />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {throughline.map((step) => (
                <div key={step.label} className={`rounded-xl px-5 py-6 ${step.bg}`}>
                  <p
                    className={`font-mono text-mono-tag uppercase ${step.labelColor}`}
                  >
                    {step.label}
                  </p>
                  <p className="mt-2 text-[28px] font-bold leading-9 tracking-[-0.005em] text-ink">
                    {step.stat}
                  </p>
                  <p className="mt-1 text-body-sm font-semibold text-ink">
                    {step.title}
                  </p>
                  <p className={`mt-1 text-caption ${step.statusColor}`}>
                    {step.status}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="six-findings" eyebrow="04 — The Six Findings" title="What We Found">
            {findings.map((finding) => (
              <div
                key={finding.label}
                className={`flex flex-col gap-4 rounded-2xl p-8 ${finding.bg}`}
              >
                <p className={`font-mono text-mono-tag uppercase ${finding.labelColor}`}>
                  {finding.label}
                </p>
                <p className="text-h4 text-ink">{finding.title}</p>

                {finding.stats ? (
                  <div className="flex flex-wrap gap-6 text-body-sm font-medium text-ink">
                    {finding.stats.map((stat) => (
                      <p key={stat}>{stat}</p>
                    ))}
                  </div>
                ) : null}

                {finding.bullets ? (
                  <div className="flex flex-col gap-2">
                    {finding.bullets.map((bullet) => (
                      <p key={bullet} className="text-body-sm font-medium text-ink">
                        → {bullet}
                      </p>
                    ))}
                  </div>
                ) : null}

                {finding.body ? (
                  <p className="text-body-sm text-ink-secondary">{finding.body}</p>
                ) : null}

                {finding.quote ? (
                  <div className="rounded-[10px] bg-ink px-5 py-4">
                    <p className="text-body-sm text-gray-300">{finding.quote}</p>
                    <p className="mt-2 font-mono text-mono-tag uppercase text-ink-tertiary">
                      {finding.attribution}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </Section>

          <Section id="sus-score" eyebrow="05 — System Usability Scale" title="The Usability Score">
            <div className="flex flex-wrap items-center gap-10 rounded-[20px] bg-brand p-10 sm:p-12">
              <div>
                <p className="text-h1 text-white">64.58</p>
                <p className="font-mono text-mono-label uppercase text-white/60">
                  System Usability Scale
                </p>
              </div>
              <div className="flex flex-wrap gap-8">
                {susDetails.map((detail) => (
                  <div key={detail.label}>
                    <p className="font-mono text-mono-stamp uppercase text-white/50">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-h4 text-white">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-body text-ink-secondary">
              For context, this is expert daily users rating their own
              primary tools. A marginal score from people who&apos;ve adapted
              to the system tells you the system hasn&apos;t adapted to them.
            </p>
          </Section>

          <Section
            id="recommendations"
            eyebrow="06 — Recommendations"
            title="Five Opportunities, in Priority Order"
          >
            <p className="text-body text-ink-secondary">
              Each maps directly to a finding — and to where the current
              tools let the team down most.
            </p>

            <div className="flex flex-col gap-2">
              {recommendations.map((rec) => (
                <div
                  key={rec.number}
                  className="flex items-center gap-5 rounded-xl bg-canvas px-7 py-6"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[18px] font-semibold text-white ${rec.numberBg}`}
                  >
                    {rec.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[18px] font-semibold leading-6 tracking-[-0.005em] text-ink">
                      {rec.title}
                    </p>
                    <p className="mt-1 text-body-sm text-ink-secondary">
                      {rec.detail}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-blue-0 px-2.5 py-1 font-mono text-mono-stamp uppercase text-brand">
                    {rec.badge}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section id="impact" eyebrow="07 — Impact & North Star" title="Impact">
            <div className="flex flex-col gap-6 rounded-[20px] bg-brand p-10 sm:p-12">
              <p className="font-mono text-mono-label uppercase text-white/60">
                The North Star
              </p>
              <p className="text-[28px] font-bold leading-9 tracking-[-0.005em] text-white">
                Take the team from finding numbers to making decisions — in
                one trusted place.
              </p>
              <p className="font-mono text-mono-caption text-white/70">
                NEXT → Pretest the new CX Unify designs in Figma against this
                baseline, on the same six tasks, to measure how far each
                intervention moves the numbers.
              </p>
            </div>

            <p className="text-body text-ink-secondary">
              This baseline established the yardstick for CX Unify. The five
              prioritized recommendations gave the product team a clear,
              evidence-backed roadmap — not a list of feature requests, but
              a hierarchy of user needs mapped directly to where the current
              tools fail.
            </p>

            <p className="text-body text-ink-secondary">
              The opportunity for CX Unify isn&apos;t another place to find
              numbers — it&apos;s to carry the work the rest of the way:
              explain, interpret, compare, and present, in one trusted place.
            </p>

            <div className="flex flex-col gap-3 pt-6">
              <Link
                href="/#work"
                className="w-fit text-button text-brand transition hover:opacity-70"
              >
                ← Back to all projects
              </Link>
              <p className="text-h4 text-ink-tertiary">
                Thank you for reading this case study!
              </p>
            </div>
          </Section>
        </article>
      </div>
    </main>
  );
}
