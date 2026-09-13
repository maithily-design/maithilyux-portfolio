"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { AutoPlayVideo } from "@/components/autoplay-video";
import caseStudies from "@/data/case-studies.json";

const project = caseStudies.uxDesign.find(
  (caseStudy) => caseStudy.slug === "anvilist-design-system",
);

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "why-design-system", label: "Why a Design System?" },
  { id: "documentation", label: "Documentation" },
  { id: "goals", label: "Goals" },
  { id: "approach", label: "My Approach" },
  { id: "components", label: "Components" },
  { id: "grid-spacing", label: "Grid & Spacing" },
  { id: "results", label: "Results" },
  { id: "learnings", label: "Learnings" },
];

const metadata = [
  ["ROLE", "Solo Designer", "UX & Visual Design"],
  ["RESPONSIBILITIES", "Page Redesign, IA", "User Flow, Prototyping"],
  ["DELIVERABLES", "Brand Guidelines", "Components, Documentation"],
  ["TYPE", "Design System", "SaaS · B2B"],
];

const goals = [
  "Establish a consistent visual language that could support the product as it scaled.",
  "Create reusable components so screens could be designed faster and handed off with fewer errors.",
  "Document usage rules clearly enough for developers and future designers to understand intent.",
  "Keep the system lean for the current stage of the product instead of over-building every possible component.",
];

const approachSteps = [
  "Meeting with the product team — I wanted to fully understand the product and what role I had to play in shaping the user experience.",
  "Conducting a UX audit of the current product — this gave me an idea of what elements we would need in our designs.",
  "Making a list of elements needed in the design system — I built this in FigJam. With a tight deadline, I derived the list from the user flow, which helped enormously.",
  "Creating foundations (Atoms) — a core set of design elements: colors, typography, and spacing to maintain consistency throughout.",
  "Prioritizing components (Molecules) — combining atoms into functional, reusable interface patterns.",
];

const componentImages = [
  {
    src: "/case-studies/anvilist/colors.png",
    alt: "Anvilist color palette design system board",
    caption: "Fig 6. Color palette — primary, secondary, and neutral scales",
    width: 828,
    height: 822,
  },
  {
    src: "/case-studies/anvilist/phosphor-icons.png",
    alt: "Anvilist icon library design system board",
    caption: "Fig 7. Icon library — system and navigation icons",
    width: 828,
    height: 890,
  },
  {
    src: "/case-studies/anvilist/input-fields.png",
    alt: "Anvilist input fields and states design system board",
    caption: "Fig 8. Input fields — states: default, focus, error, disabled",
    width: 828,
    height: 822,
  },
  {
    src: "/case-studies/anvilist/alerts.png",
    alt: "Anvilist alert components design system board",
    caption: "Fig 9. Alert components — success, warning, error, info",
    width: 828,
    height: 822,
  },
  {
    src: "/case-studies/anvilist/buttons.png",
    alt: "Anvilist button system design system board",
    caption: "Fig 10. Button system — primary, secondary, ghost with all states",
    width: 828,
    height: 822,
  },
];

const results = [
  {
    stat: "50%",
    detail:
      "More screens produced — pre-built components let me focus on higher-level design problems rather than building from scratch.",
  },
  {
    stat: "25–30%",
    detail:
      "Decrease in design-to-development handoff errors, thanks to clear specs and component libraries developers could directly implement.",
  },
  {
    stat: "70%",
    detail:
      "Reduction in design inconsistencies, leading to improved brand identity and a more seamless user experience.",
  },
];

const learnings = [
  "I had worked on design systems before, but this was the first time as a solo designer with full freedom — and the confusion of whether I was doing it correctly. I made mistakes, but I learned so much from them.",
  "I understood the flow of setting up a design system: the brand colors and mood were a hack to get me going toward what I wanted to visually achieve. It also worked out with proper feedback from the product managers and their vision.",
  "I kept it simple. With the user flow and information architecture I had, I knew what components would be needed — but I also kept scalability in mind to accommodate future changes.",
  "Design systems are vast and can be complicated, but the stage at which the product was, we didn't require every possible component. My idea of keeping it simple while thinking about scalability worked in my favor by getting designs out on time.",
];

function Figure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-xl border border-hairline bg-white shadow-small">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 828px, calc(100vw - 32px)"
        />
      </div>
      <figcaption className="font-mono text-mono-caption text-gray-400">
        {caption}
      </figcaption>
    </figure>
  );
}

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

function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item, index) => (
        <div key={item} className="flex gap-3 py-2">
          <span className="shrink-0 font-mono text-mono-label text-brand">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-body text-ink-secondary">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function AnvilistCaseStudy() {
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

  if (!project) {
    return null;
  }

  return (
    <main className="bg-white text-ink">
      <div className="anvilist-case-study-shell mx-auto flex w-full max-w-[1280px] gap-10 px-4 pb-24 pt-24 sm:px-6 lg:px-10 lg:pt-20">
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
            <Link
              href="/#work"
              className="text-button text-brand transition hover:opacity-70"
            >
              ← Back to all projects
            </Link>

            <h1 className="mt-12 max-w-[760px] text-[42px] font-bold leading-[1.12] tracking-[-0.015em] text-ink sm:text-[56px] sm:leading-[64px]">
              Crafting the Anvilist Design System
            </h1>

            <p className="mt-4 max-w-[760px] text-body-lg text-ink-tertiary">
              Building a scalable design system following Atomic Design
              Principles for Anvilist, a SaaS platform that helps early-stage
              startups identify and address business gaps.
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

            <figure className="mt-8 flex flex-col gap-2">
              <div className="anvilist-cover-frame overflow-hidden rounded-xl border border-hairline bg-blue-0 shadow-small">
                <AutoPlayVideo
                  src="/videos/anvilist-thumb.mp4"
                  className="h-full w-full object-contain"
                />
              </div>
              <figcaption className="font-mono text-mono-caption text-gray-400">
                Fig 1. Anvilist Design System
              </figcaption>
            </figure>
          </header>

          <Section id="overview" eyebrow="01 — Overview" title="What is the Product?">
            <p className="text-body text-ink-secondary">
              Anvilist is a SaaS platform designed to assist early-stage startup
              professionals in identifying and addressing business gaps through
              comprehensive assessments and detailed reports. The platform offers
              AI-generated reports that analyze gaps, suggest improvements, and
              connects users with professionals, freelancers, and contractors who
              can help in specific areas.
            </p>

            <div>
              <h3 className="text-h4 text-ink">Target Audience</h3>
              <p className="mt-3 text-body text-ink-secondary">
                The platform serves three key user groups: startup owners and
                small businesses looking to identify growth areas, independent
                contractors offering specialized services, and agencies providing
                comprehensive support to early-stage companies.
              </p>
            </div>

            <Figure
              src="/case-studies/anvilist/target-audience.png"
              alt="Target audience diagram for Anvilist"
              width={828}
              height={475}
              caption="Fig 2. Target audience — startup owners, contractors, and agencies"
            />
          </Section>

          <Section
            id="why-design-system"
            eyebrow="02 — Why a Design System?"
            title="Why Did I Start with a Design System?"
          >
            <blockquote className="border-l-[3px] border-brand px-6 py-5 text-[18px] font-medium leading-6 tracking-[-0.005em] text-ink">
              It&apos;s basically like meal prepping — when you get new groceries,
              store them correctly, and use them for cooking. A design system is
              the same idea applied to design.
            </blockquote>

            <p className="text-body text-ink-secondary">
              The idea was to set the standards for the website design that
              includes deciding on the color palette, typography, and layout and
              spacing — which genuinely changed my workflow. As a solo designer
              on the project, I had both the freedom and the confusion of doing
              it my own way. Setting up the system first gave me a framework to
              be consistent even without a team reviewing my work.
            </p>

            <Figure
              src="/case-studies/anvilist/design-process-overview.png"
              alt="Design process overview for the Anvilist design system"
              width={828}
              height={736}
              caption="Fig 3. Design process overview"
            />
          </Section>

          <Section
            id="documentation"
            eyebrow="03 — Documentation"
            title="The Secret Ingredient: Documentation"
          >
            <p className="text-body text-ink-secondary">
              Documenting the designs involved a simple formula: name the
              component clearly, specify when it should be used, and don&apos;t
              forget the details — for example, always mention the hex color code.
              Yes, it makes a difference when developers are implementing your
              designs.
            </p>

            <Figure
              src="/case-studies/anvilist/component-documentation.png"
              alt="Component documentation example for Anvilist"
              width={828}
              height={716}
              caption="Fig 4. Component documentation — sign-up flow example"
            />
          </Section>

          <Section id="goals" eyebrow="04 — Goals" title="Goals of the Design System">
            <NumberedList items={goals} />
          </Section>

          <Section id="approach" eyebrow="05 — My Approach" title="How I Built It">
            <p className="text-body text-ink-secondary">
              I followed a structured five-step process that moved from
              understanding the product to building the system:
            </p>

            <NumberedList items={approachSteps} />

            <Figure
              src="/case-studies/anvilist/design-system-checklist.png"
              alt="FigJam checklist for building the Anvilist design system"
              width={828}
              height={308}
              caption="Fig 5. Design system checklist in FigJam"
            />
          </Section>

          <Section id="components" eyebrow="06 — Components" title="Putting It Together">
            <p className="text-body text-ink-secondary">
              I focused on designing the components that the product needed most:
              buttons, input fields, search bars, controls, and icons. Each
              component was built with proper variants and states, documented with
              usage guidelines.
            </p>

            {componentImages.map((image) => (
              <Figure key={image.src} {...image} />
            ))}
          </Section>

          <Section id="grid-spacing" eyebrow="07 — Grid & Spacing" title="Importance of Grid">
            <p className="text-body text-ink-secondary">
              Introducing grid units at the beginning sped up the design process
              significantly. For web applications, I used a layout grid based on
              8px increments — 8px, 16px, 24px, and so on. This means 1 grid unit
              equals 8px. This approach ensures consistent spacing and scalability
              across different device sizes, while maintaining visual rhythm
              throughout the interface.
            </p>

            <Figure
              src="/case-studies/anvilist/layout-spacing.png"
              alt="Layout spacing system for Anvilist"
              width={828}
              height={866}
              caption="Fig 11. Layout spacing — 8px grid system applied across components"
            />
          </Section>

          <Section id="results" eyebrow="08 — Results" title="Results">
            <p className="text-body text-ink-secondary">
              The design system had measurable impact on both design speed and
              product quality:
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {results.map((item) => (
                <div
                  key={item.stat}
                  className="rounded-xl bg-blue-0 p-6 shadow-small"
                >
                  <p className="text-[40px] font-bold leading-[48px] tracking-[-0.005em] text-brand">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-body-sm text-ink-secondary">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="learnings" eyebrow="09 — Learnings" title="What I Learned">
            <NumberedList items={learnings} />

            <blockquote className="border-l-[3px] border-brand px-6 py-5 text-[18px] font-medium leading-6 tracking-[-0.005em] text-ink">
              Design systems are vast — but keeping it simple and thinking about
              scalability worked in my favor. The stage of the product matters
              more than having every possible component.
            </blockquote>

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
