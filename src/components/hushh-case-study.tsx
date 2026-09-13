"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { AutoPlayVideo } from "@/components/autoplay-video";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "primary-research", label: "Primary Research" },
  { id: "objectives", label: "Objectives" },
  { id: "process-research", label: "Process & Research" },
  { id: "ideation", label: "Ideation" },
  { id: "core-feature", label: "Core Feature" },
  { id: "usability-testing", label: "Usability Testing" },
  { id: "key-takeaways", label: "Key Takeaways" },
];

const metadata = [
  ["ROLE", "UX Designer", "Intern"],
  ["TIMELINE", "5 Months", "Summer 2023"],
  ["INDUSTRY", "Luxury-Tech", "Consumer App"],
  ["METHODS", "Field Studies, Interviews", "Usability Testing, MVP"],
];

const businessObjectives = [
  "Identify the highest-value MVP flows for a privacy-first wallet experience.",
  "Reduce onboarding friction while clearly communicating what user data is being shared.",
  "Create a payment and rewards flow that could be tested in real retail contexts.",
  "Balance business expectations, technical constraints, and user trust while moving quickly.",
];

const ideationPrinciples = [
  {
    title: "Make trust visible",
    detail:
      "Users needed to understand what was being shared, when it was being shared, and why it benefited them.",
  },
  {
    title: "Keep the QR moment simple",
    detail:
      "The payment moment had to be fast enough for a checkout line, so the QR code became the most direct interaction.",
  },
  {
    title: "Design for real contexts",
    detail:
      "The flow needed to work in coffee shops, retail environments, and other moments where speed and clarity matter.",
  },
];

const usabilityMetrics = [
  {
    label: "TASK COMPLETION",
    stat: "4/5",
    detail: "Users completed the coffee purchase flow without assistance.",
    color: "green",
  },
  {
    label: "AVG TASK TIME",
    stat: "~45s",
    detail: "From opening app to completed QR scan at checkout.",
    color: "blue",
  },
  {
    label: "TRUST SCORE",
    stat: "3/5",
    detail: "Users felt comfortable sharing preferences with a merchant.",
    color: "purple",
  },
];

const findings = [
  {
    badge: "VALIDATED",
    tone: "blue",
    title: "QR Codes Were Reliable",
    detail:
      "Scanning worked consistently across devices and lighting conditions. However, users suggested making the QR code larger for quicker scanning at checkout.",
  },
  {
    badge: "KEY WIN",
    tone: "blue",
    title: "Automatic Discounts Delighted",
    detail:
      "The most praised feature — users loved that discounts applied automatically without needing to search for codes or ask staff.",
  },
  {
    badge: "NEEDS WORK",
    tone: "red",
    title: "Payment Confirmation Unclear",
    detail:
      "Users wanted a more obvious visual or haptic confirmation after a successful transaction. The current feedback was too subtle and caused a moment of doubt.",
  },
  {
    badge: "SCALABLE",
    tone: "blue",
    title: "Flow Adapted Across Contexts",
    detail:
      "The transaction pattern worked beyond coffee — users could see it applying to other retail and dining scenarios.",
  },
];

const takeaways = [
  "I learned to pivot quickly and propose effective solutions. When faced with stakeholder management challenges, I established regular check-ins and presented user testing data to guide discussions, ensuring every decision was grounded in user needs and project goals.",
  "Clear and persuasive communication emerged as one of my key strengths. I often mediated between stakeholders with conflicting priorities. By articulating trade-offs and potential impacts of design choices, I was able to build consensus and keep the project aligned with MVP objectives.",
  "Resource constraints taught me to be resourceful. I leveraged existing tools and processes to maximize efficiency — using prototyping tools to quickly iterate designs and gather feedback, which facilitated faster decision-making.",
  "This internship was a profound journey of professional growth. It challenged me to step out of my comfort zone, especially when leading discussions with senior stakeholders, and equipped me with a robust set of skills I will carry forward into my career.",
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

function badgeClass(tone: string) {
  if (tone === "red") {
    return "bg-red-0 text-red-500";
  }

  return "bg-blue-0 text-brand";
}

function metricClass(color: string) {
  if (color === "green") {
    return "bg-green-0 text-green-500";
  }

  if (color === "purple") {
    return "bg-purple-0 text-purple-500";
  }

  return "bg-blue-0 text-brand";
}

export function HushhCaseStudy() {
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

            <div className="mt-12 rounded-lg bg-red-0 px-5 py-3.5 text-caption text-red-500">
              ⚠ Due to the NDA, adding specific images or details of unreleased
              features is prohibited. This document contains some of the major
              features worked on that have been released.
            </div>

            <h1 className="mt-10 max-w-[820px] text-[42px] font-bold leading-[1.12] tracking-[-0.015em] text-ink sm:text-[56px] sm:leading-[64px]">
              Hushh Wallet
              <span className="block">Finding the MVP for a Start-Up</span>
            </h1>

            <p className="mt-4 max-w-[800px] text-body-lg text-ink-tertiary">
              As a UX Design Intern at Hushh, I played a pivotal role in
              establishing the MVP. I contributed to the One-Click QR Code Wallet
              App, working closely with stakeholders to plan, execute and test
              the product.
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
              <div className="case-study-cover-frame overflow-hidden rounded-xl border border-hairline bg-blue-0 shadow-small">
                <AutoPlayVideo
                  src="/videos/hushh-thumb.mp4"
                  className="h-full w-full object-contain"
                />
              </div>
              <figcaption className="font-mono text-mono-caption text-gray-400">
                Fig 1. Hushh Wallet MVP prototype
              </figcaption>
            </figure>
          </header>

          <Section id="overview" eyebrow="01 — Overview" title="What is Hushh Wallet?">
            <p className="text-body text-ink-secondary">
              Hushh Wallet is a consumer app that helps users store preference
              and loyalty information in one place, then share it through a QR
              code during checkout. The goal was to make personalized shopping
              feel faster, more transparent, and easier to test as an MVP.
            </p>

            <Figure
              src="/case-studies/hushh/product-overview.png"
              alt="Hushh Wallet product overview"
              width={2048}
              height={1499}
              caption="Fig 2. Product overview — Hushh Wallet and QR-based preference sharing"
            />
          </Section>

          <Section
            id="primary-research"
            eyebrow="02 — Primary Research"
            title="Why was research important?"
          >
            <p className="text-body text-ink-secondary">
              Because Hushh was still shaping its MVP, research helped us make
              decisions with more confidence. We used field observations,
              stakeholder conversations, and usability tests to understand how
              people responded to sharing preferences and using a QR code at the
              point of purchase.
            </p>

            <blockquote className="border-l-[3px] border-brand px-6 py-5 text-[18px] font-medium leading-6 tracking-[-0.005em] text-ink">
              The biggest design challenge was not just making the QR flow work —
              it was making the moment feel trustworthy enough for users to try.
            </blockquote>
          </Section>

          <Section id="objectives" eyebrow="03 — Objectives" title="Business Objectives">
            <NumberedList items={businessObjectives} />

            <Figure
              src="/case-studies/hushh/business-objectives.png"
              alt="Hushh Wallet business objective cards"
              width={2048}
              height={903}
              caption="Fig 3. Business objectives — MVP priorities and product direction"
            />
          </Section>

          <Section
            id="process-research"
            eyebrow="04 — Process & Research"
            title="How we moved from ambiguity to an MVP"
          >
            <p className="text-body text-ink-secondary">
              The process moved from understanding the product vision to mapping
              user flows, synthesizing research, and prioritizing the screens
              that mattered most for the first usable version of the wallet.
            </p>

            <Figure
              src="/case-studies/hushh/process-map.png"
              alt="Hushh Wallet design and research process map"
              width={2048}
              height={998}
              caption="Fig 4. Process map — research, synthesis, design, and testing"
            />

            <Figure
              src="/case-studies/hushh/research-synthesis.png"
              alt="Hushh Wallet research synthesis board"
              width={3000}
              height={2260}
              caption="Fig 5. Research synthesis — translating insights into product decisions"
            />
          </Section>

          <Section id="ideation" eyebrow="05 — Ideation" title="From insights to experience principles">
            <p className="text-body text-ink-secondary">
              Ideation focused on turning research into clear interaction rules.
              The MVP needed to communicate value quickly, reduce friction during
              onboarding, and make preference sharing feel intentional.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {ideationPrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-xl bg-canvas p-5 shadow-small"
                >
                  <h3 className="text-[18px] font-semibold leading-6 tracking-[-0.005em] text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-body-sm text-ink-secondary">
                    {principle.detail}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="core-feature"
            eyebrow="06 — Core Feature"
            title="Core Feature: The Hushh QR Code"
          >
            <div>
              <h3 className="text-h4 text-ink">
                How did we reduce friction while onboarding?
              </h3>
              <p className="mt-3 text-body text-ink-secondary">
                The QR code became the centerpiece of the experience — a single
                scan lets merchants access a customer&apos;s preferences and
                loyalty cards. We designed the onboarding flow to minimize steps
                while maximizing trust, ensuring users understood exactly what
                data they were sharing and with whom.
              </p>
            </div>

            <Figure
              src="/case-studies/hushh/qr-code-core-feature.png"
              alt="Hushh QR code wallet core feature"
              width={2048}
              height={1125}
              caption="Fig 6. QR code wallet — core interaction design"
            />

            <Figure
              src="/case-studies/hushh/onboarding-feature.png"
              alt="Hushh onboarding flow screens"
              width={1024}
              height={795}
              caption="Fig 7. Onboarding flow — reducing friction in preference sharing"
            />
          </Section>

          <Section id="usability-testing" eyebrow="07 — Usability Testing" title="Usability Testing">
            <div>
              <h3 className="text-h4 text-ink">Use Case: Buying a Coffee ☕</h3>
              <p className="mt-3 text-body text-ink-secondary">
                We tested the app&apos;s ability to handle coffee shop
                transactions. This included setting user coffee preferences,
                generating QR codes for payment, and applying discounts and
                rewards through the app.
              </p>
            </div>

            <div>
              <h3 className="text-h4 text-ink">Why did we test?</h3>
              <p className="mt-3 text-body text-ink-secondary">
                We wanted to understand if the flow was adaptable and whether
                users would trust sharing their preferences. We also tested adding
                preference cards for payment and applying discounts through the
                app.
              </p>
            </div>

            <div>
              <h3 className="text-h4 text-ink">Results</h3>
              <p className="mt-3 text-body text-ink-secondary">
                The QR codes were reliable but could be sized larger for quicker
                scanning. Customers found the app convenient, particularly the
                automatic discount application, but suggested clearer visual
                confirmation of successful payments. These results informed
                refinements to enhance usability and transaction efficiency.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {usabilityMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`rounded-2xl px-6 py-7 ${metricClass(metric.color)}`}
                >
                  <p className="font-mono text-[10px] font-medium uppercase leading-[14px] tracking-[0.08em]">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-[40px] font-bold leading-[48px] tracking-[-0.005em] text-ink">
                    {metric.stat}
                  </p>
                  <p className="mt-3 text-caption text-ink-secondary">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {findings.map((finding) => (
                <div
                  key={finding.title}
                  className="rounded-xl bg-canvas p-6 shadow-small"
                >
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 font-mono text-[10px] font-medium uppercase leading-[14px] tracking-[0.08em] ${badgeClass(finding.tone)}`}
                  >
                    {finding.badge}
                  </span>
                  <h3 className="mt-3 text-[18px] font-semibold leading-6 tracking-[-0.005em] text-ink">
                    {finding.title}
                  </h3>
                  <p className="mt-3 text-body-sm text-ink-secondary">
                    {finding.detail}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="rounded-2xl bg-ink p-8 text-white">
              <p className="text-h4 text-white">
                “The QR code worked great — I just wished the app told me more
                clearly that it went through. I stood there for a second
                wondering if I should scan again.”
              </p>
              <footer className="mt-5 font-mono text-mono-caption text-ink-tertiary">
                — Usability test participant, coffee shop scenario
              </footer>
            </blockquote>
          </Section>

          <Section id="key-takeaways" eyebrow="08 — Key Takeaways" title="Key Takeaways">
            <NumberedList items={takeaways} />

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
