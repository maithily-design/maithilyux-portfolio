"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "the-paradox", label: "The Paradox" },
  { id: "business-impact", label: "Business Impact" },
  { id: "my-role", label: "My Role" },
  { id: "methods", label: "Methods" },
  { id: "key-findings", label: "Key Findings" },
  { id: "redefining-all-day", label: "Redefining All-Day" },
  { id: "recommendations", label: "Recommendations" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

const metadata = [
  ["ROLE", "Co-Lead Researcher", "Qualitative Analysis"],
  ["METHODS", "Survey (n=1,398)", "Diary Study (n=17)"],
  ["SCOPE", "4 Countries", "US, UK, DE, China"],
  ["TEAM", "Lenovo UXD", "2 Researchers"],
];

const definitions = [
  {
    label: "TIME-BASED",
    color: "text-brand",
    border: "border-t-brand",
    mentions: "175 mentions",
    quote: "“A battery that lasts from 9am to 5pm.”",
  },
  {
    label: "BEHAVIORAL",
    color: "text-green-500",
    border: "border-t-green-500",
    mentions: "122 mentions",
    quote: "“I don't have to think about charging at all.”",
  },
  {
    label: "PERFORMANCE",
    color: "text-purple-500",
    border: "border-t-purple-500",
    mentions: "40 mentions",
    quote: "“Enough power to complete all my work meetings.”",
  },
  {
    label: "CONTEXTUAL",
    color: "text-red-500",
    border: "border-t-red-500",
    mentions: "33 mentions",
    quote: "“It should last through a heavy workday with calls and multitasking.”",
  },
];

const recommendations = [
  {
    number: "RECOMMENDATION #01",
    title: "Proactive Charging Prompts",
    subtitle: "Because Users Won't Act Without a Nudge",
    body: "Structured nudges using a Fact → Solution → Outcome framework. Not a warning — coaching that builds battery literacy over time.",
    example:
      "“You've been unplugged for 3 hours and are at 44% — plug in now to ensure 2+ more hours of operation.”",
    bg: "bg-blue-0",
  },
  {
    number: "RECOMMENDATION #02",
    title: "Smart Mode",
    subtitle: "Because Context Should Drive Power, Not the User",
    body: "Context-aware battery management that adapts automatically. Three tiers: system-based triggers, context-aware responses, and behavior-informed predictions.",
    example:
      "Calendar shows 2-hour meeting → System activates Meeting Mode: dims screen, mutes notifications.",
    bg: "bg-green-0",
  },
  {
    number: "RECOMMENDATION #03",
    title: "Idle Time Report",
    subtitle: "Because You Can't Fix What You Can't See",
    body: "A weekly insight surfacing the “cost of not doing anything.” Users average ~3 hours of daily idle drain that's completely invisible to them.",
    example:
      "“Your laptop was idle but awake for 4.2 hours last week — costing an estimated 15% of your total battery.”",
    bg: "bg-purple-0",
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

function Callout({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l-[3px] border-brand px-6 py-5 text-[18px] font-medium leading-6 tracking-[-0.005em] text-ink">
      {children}
    </blockquote>
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

export function BatteryCaseStudy() {
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
              🔒 This case study presents research conducted at Lenovo.
              Specific data points and proprietary recommendations have been
              generalized to respect confidentiality. The methodology,
              research thinking, and strategic framing are my own.
            </div>

            <Link
              href="/#work"
              className="mt-10 block w-fit text-button text-brand transition hover:opacity-70"
            >
              ← Back to all projects
            </Link>

            <h1 className="mt-12 max-w-[760px] text-[42px] font-bold leading-[1.12] tracking-[-0.015em] text-ink sm:text-[56px] sm:leading-[64px]">
              Battery Life Perception
            </h1>

            <p className="mt-2 max-w-[700px] text-h4 font-semibold text-ink-tertiary">
              Why the Most Important Laptop Feature Is Also the Most
              Misunderstood
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
                caption="Fig 1. Battery Life Perception — research cover from Lenovo UXD deck"
              />
            </div>
          </header>

          <Section id="the-paradox" eyebrow="01 — The Paradox" title="The Paradox">
            <p className="text-body text-ink-secondary">
              Battery life is consistently the #1 factor in laptop purchase
              decisions. It&apos;s on every spec sheet, in every review, on
              every comparison chart. And yet, once users own the laptop,
              their relationship with battery becomes something no spec sheet
              captures: anxious, reactive, and quietly frustrating.
            </p>

            <Callout>
              Lenovo builds laptops with increasingly better battery hardware
              — but user satisfaction wasn&apos;t improving at the same rate.
              The gap wasn&apos;t in the technology. It was in the experience
              surrounding it.
            </Callout>

            <p className="text-body text-ink-secondary">
              That&apos;s why this research existed. Not to measure battery
              life, but to understand battery perception — the space between
              what a laptop can do and what a user believes it can do.
            </p>
          </Section>

          <Section
            id="business-impact"
            eyebrow="02 — Business Impact"
            title="Why This Mattered to the Business"
          >
            <p className="text-body text-ink-secondary">
              Battery complaints don&apos;t show up as a single support
              ticket or a product return. They show up as a quiet erosion of
              trust. A user who feels their battery &ldquo;never lasts&rdquo;
              won&apos;t file a bug report — they&apos;ll carry a charger
              everywhere, lower their brightness to a squint, close tabs
              they&apos;re still using, and eventually tell a friend
              &ldquo;don&apos;t get this brand.&rdquo;
            </p>

            <DarkQuote
              quote="“What if the problem isn't battery life — it's battery literacy?”"
              attribution="— The core research question"
            />

            <p className="text-body text-ink-secondary">
              The laptop gives users a percentage and a low-battery warning.
              That&apos;s it. No context, no coaching, no visibility into
              what&apos;s draining power or when to act. Users were left to
              figure out battery management through trial and error, and
              unsurprisingly, most of them just didn&apos;t.
            </p>
          </Section>

          {/* No dedicated header in the source design — bridges the "My Role" nav
              anchor to real content using the metadata already established above. */}
          <div id="my-role" className="scroll-mt-28 flex flex-col gap-3">
            <h3 className="text-h4 text-ink">My Role</h3>
            <p className="text-body text-ink-secondary">
              I co-led this study with one other researcher on the Lenovo UXD
              team, owning the qualitative side end-to-end — diary study
              design, participant interviews, and thematic synthesis — while
              partnering closely on the survey instrument and quantitative
              read-out that anchor the findings below.
            </p>
          </div>

          <Section id="methods" eyebrow="03 — Methods" title="The Approach">
            <p className="text-body text-ink-secondary">
              We designed a two-pronged study to capture both the what and
              the why:
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-4 rounded-2xl bg-blue-0 p-8">
                <p className="font-mono text-mono-tag uppercase text-brand">
                  Quantitative
                </p>
                <p className="text-h4 text-ink">Online Survey</p>
                <p className="text-[40px] font-bold leading-[48px] tracking-[-0.005em] text-brand">
                  n = 1,398
                </p>
                <p className="text-body-sm text-ink-secondary">
                  US, UK, Germany, China
                  <br />
                  <br />
                  Usage hours, charging frequency, PSA adoption, battery
                  perception
                </p>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl bg-green-0 p-8">
                <p className="font-mono text-mono-tag uppercase text-green-500">
                  Qualitative
                </p>
                <p className="text-h4 text-ink">Diary Study + Interviews</p>
                <p className="text-[40px] font-bold leading-[48px] tracking-[-0.005em] text-green-500">
                  n = 17
                </p>
                <p className="text-body-sm text-ink-secondary">
                  US-based participants
                  <br />
                  Hybrid, On-site, Remote
                  <br />
                  <br />
                  Multi-day diary entries + in-depth follow-up interviews
                </p>
              </div>
            </div>

            <DarkQuote
              quote="“Surveys tell you what people say they do. Diaries show you what they actually do — and the gap between those two things is where the most important insights live.”"
              attribution="— Research rationale"
            />
          </Section>

          <Section id="key-findings" eyebrow="04 — Key Findings" title="What We Found">
            <div>
              <h3 className="text-h4 text-ink">
                Finding 1: Everyone Uses Their Laptop ~9 Hours a Day
              </h3>
              <p className="mt-3 text-body text-ink-secondary">
                Hybrid, remote, on-site — the number barely moved. But buried
                inside those 9 hours was significant idle time. Laptops were
                &ldquo;on&rdquo; but not actively used, silently draining
                battery with no signal to the user.
              </p>
            </div>

            <Placeholder
              height={380}
              caption="Fig 2. Actual laptop usage hours by work arrangement and user type"
            />

            <div>
              <h3 className="text-h4 text-ink">
                Finding 2: Charging Is a Panic Response, Not a Decision
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl bg-red-0 px-6 py-7">
                <p className="text-[40px] font-bold leading-[48px] tracking-[-0.005em] text-ink">
                  46%
                </p>
                <p className="mt-2 text-body-sm font-medium text-ink-secondary">
                  charge with no fixed routine
                </p>
              </div>
              <div className="rounded-2xl bg-blue-0 px-6 py-7">
                <p className="text-[40px] font-bold leading-[48px] tracking-[-0.005em] text-ink">
                  0
                </p>
                <p className="mt-2 text-body-sm font-medium text-ink-secondary">
                  correlation between usage time &amp; charging
                </p>
              </div>
              <div className="rounded-2xl bg-purple-0 px-6 py-7">
                <p className="text-[40px] font-bold leading-[48px] tracking-[-0.005em] text-ink">
                  80%
                </p>
                <p className="mt-2 text-body-sm font-medium text-ink-secondary">
                  charge only once per day
                </p>
              </div>
            </div>

            <DarkQuote
              quote="“If I am near a charger, I might top it off, or I wait until it tells me to.”"
              attribution="— Teacher, on-site, typical user"
            />

            <div>
              <h3 className="text-h4 text-ink">
                Finding 3: Users Know What Saves Battery. They Just
                Don&apos;t Do It.
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-ink p-8">
                <p className="font-mono text-mono-tag uppercase text-brand">
                  Awareness
                </p>
                <p className="mt-3 text-h1 text-white">74%</p>
                <p className="mt-3 text-body text-gray-300">
                  believe brightness drains battery
                </p>
              </div>
              <div className="rounded-2xl bg-ink p-8">
                <p className="font-mono text-mono-tag uppercase text-red-500">
                  Action
                </p>
                <p className="mt-3 text-h1 text-white">48%</p>
                <p className="mt-3 text-body text-gray-300">
                  actually reduce brightness to save battery
                </p>
              </div>
            </div>

            <p className="text-body text-ink-secondary">
              The knowledge exists. The behavior doesn&apos;t follow.
              Awareness does not always lead to action — users know what
              drains battery but don&apos;t act on it consistently.
            </p>

            <div>
              <h3 className="text-h4 text-ink">
                Finding 4: &ldquo;All-Day Battery&rdquo; Doesn&apos;t Mean
                What the Industry Thinks
              </h3>
              <p className="mt-3 text-body text-ink-secondary">
                We asked 1,398 people to define it in their own words. Four
                distinct framings emerged:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {definitions.map((def) => (
                <div
                  key={def.label}
                  className={`rounded-xl border-t-[3px] bg-canvas p-6 ${def.border}`}
                >
                  <p className={`font-mono text-mono-tag uppercase ${def.color}`}>
                    {def.label}
                  </p>
                  <p className="mt-3 text-h4 text-ink">{def.mentions}</p>
                  <p className="mt-3 text-body-sm text-ink-secondary">
                    {def.quote}
                  </p>
                </div>
              ))}
            </div>

            <DarkQuote
              quote="“The common thread across all four framings isn't a number of hours. It's confidence. Users want to stop thinking about battery. They want to trust that it'll just work — and right now, they don't.”"
              attribution="— Synthesis"
            />
          </Section>

          <Section
            id="redefining-all-day"
            eyebrow="05 — Redefining All-Day Battery"
            title="The New Definition"
          >
            <div className="flex flex-col gap-6 rounded-[20px] bg-brand p-10 sm:p-12">
              <p className="font-mono text-mono-label uppercase text-white/60">
                All-Day Battery =
              </p>
              <p className="text-[40px] font-bold leading-[48px] tracking-[-0.005em] text-white">
                Coverage + Reliability
              </p>
              <div className="flex flex-wrap gap-10">
                <div>
                  <p className="text-h1 text-white">14</p>
                  <p className="text-body-sm text-white/70">hours active use</p>
                </div>
                <div>
                  <p className="text-h1 text-white">~3</p>
                  <p className="text-body-sm text-white/70">hours sleep/idle</p>
                </div>
                <div>
                  <p className="text-h1 text-white">17</p>
                  <p className="text-body-sm text-white/70">
                    total hours expected
                  </p>
                </div>
              </div>
            </div>

            <p className="text-body text-ink-secondary">
              This wasn&apos;t pulled from a spec sheet. It emerged from
              cross-referencing survey expectations with diary-study
              behavior, removing outliers, and weighting by the categories
              users themselves used. It gave the hardware and software teams
              a shared benchmark grounded in user behavior rather than
              engineering specs.
            </p>
          </Section>

          <Section
            id="recommendations"
            eyebrow="06 — Recommendations"
            title="Turning Findings Into Action"
          >
            <p className="text-body text-ink-secondary">
              Three strategic recommendations, each designed to address a
              specific behavioral gap:
            </p>

            {recommendations.map((rec) => (
              <div
                key={rec.number}
                className={`flex flex-col gap-4 rounded-2xl p-8 ${rec.bg}`}
              >
                <p className="font-mono text-mono-tag uppercase text-brand">
                  {rec.number}
                </p>
                <p className="text-h4 text-ink">{rec.title}</p>
                <p className="text-body font-medium text-ink-secondary">
                  {rec.subtitle}
                </p>
                <p className="text-body-sm text-ink-secondary">{rec.body}</p>
                <div className="rounded-[10px] bg-ink px-5 py-4">
                  <p className="text-caption text-gray-300">{rec.example}</p>
                </div>
              </div>
            ))}

            <Placeholder
              height={340}
              caption="Fig 3. Summary of all recommendations — proactive prompts, smart mode, idle time report"
            />
          </Section>

          <Section id="impact" eyebrow="07 — Impact" title="Impact">
            <Callout>
              Battery perception is a UX problem, not just a specs problem —
              and the solutions are software-layer interventions that
              don&apos;t require a single hardware change.
            </Callout>

            <p className="text-body text-ink-secondary">
              This research reframed an internal hardware conversation into a
              user experience opportunity. The reframed definition of
              &ldquo;all-day battery&rdquo; gave the hardware and software
              teams a shared benchmark grounded in user behavior rather than
              engineering specs — shifting the conversation from &ldquo;how
              many hours can we promise&rdquo; to &ldquo;how confident can we
              make the user feel.&rdquo;
            </p>

            <p className="text-body text-ink-secondary">
              The three recommendations moved into the product team&apos;s
              prioritization pipeline, with proactive charging prompts
              entering the design exploration phase.
            </p>
          </Section>

          <Section
            id="reflection"
            eyebrow="08 — Reflection"
            title="What I'd Do Differently"
          >
            <p className="text-body text-ink-secondary">
              I&apos;d restructure participant segmentation from the start.
              Our initial Typical vs. Heavy user split didn&apos;t reveal
              strong behavioral differences — the more meaningful axis turned
              out to be work arrangement (hybrid vs. on-site vs. remote),
              which we discovered mid-analysis. Starting with that frame
              would have sharpened both the survey instrument and the
              qualitative protocol.
            </p>

            <p className="text-body text-ink-secondary">
              I&apos;d also push for a longitudinal follow-up. This study
              captured a snapshot of behavior. To validate whether the
              proposed interventions actually shift charging habits and
              satisfaction, we&apos;d need to track the same users over 4-6
              weeks post-implementation. That&apos;s the next conversation.
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
