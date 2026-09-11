"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "user-story", label: "User Story" },
  { id: "primary-research", label: "Primary Research" },
  { id: "user-research", label: "User Research" },
  { id: "challenges", label: "Challenges" },
  { id: "target-users", label: "Target Users" },
  { id: "ideation", label: "Ideation" },
  { id: "features", label: "Features" },
  { id: "learnings", label: "Learnings" },
];

const metadata = [
  ["ROLE", "UX Designer", ""],
  ["TIMELINE", "3 Weeks", ""],
  ["INDUSTRY", "FemTech", "Healthcare"],
  ["CONTEXT", "Protothon 2023", "Design Challenge"],
];

const userStory = [
  "Emma welcoming her new born child — thrilled and hopeful about this new chapter.",
  "She is on a roller coaster of emotions — joy one moment, sadness and anxiety the next.",
  "Emma is comparing her current physical appearance to her body before she was pregnant.",
  "Starts blaming herself about her motherhood — questioning every decision she makes.",
  "She feels lonely and overthinks if this is normal — isolation creeps in.",
  "She is surfing through the internet to understand about this phase — looking for answers.",
];

const researchMetrics = [
  { stat: "60,000+", detail: "Women in the US affected annually" },
  { stat: "90,000+", detail: "Miscarried women experiencing PPD" },
  { stat: "1 in 7", detail: "First-time mothers diagnosed" },
  { stat: "8%", detail: "Adoptive parents also affected" },
];

const surveyFindings = [
  "100% never want to go back to that phase.",
  "80% were unaware about their emotions during postpartum.",
  "60% were diagnosed with postpartum blues.",
  "40% were severely sleep deprived.",
];

const learnings = [
  {
    title: "Goals",
    detail:
      "Users like Rani are seeking effective ways to balance their new roles as mothers with their professional lives, striving for a seamless integration of child care into their daily routines.",
  },
  {
    title: "Frustrations",
    detail:
      "Users expressed frustration over the lack of sleep they get and the overwhelming amount of general information available, which often does not address their unique needs and questions in the postpartum period.",
  },
  {
    title: "Insights from Interviews",
    detail:
      "Interviews with users underscored a common desire for a supportive community and tools that can provide quick, actionable advice tailored to their specific circumstances and daily challenges.",
  },
  {
    title: "Insights from Empathy Map",
    detail:
      "The empathy map revealed that new mothers frequently experience a spectrum of emotions, from joy to overwhelming stress, highlighting the need for emotional support and reliable information.",
  },
];

const features = [
  {
    title: "🤝 Addressing Mood Disorders",
    detail:
      "By tracking their mood regularly, women can detect any persistent or worsening symptoms early on, enabling them to seek timely professional help and intervention.",
    src: "/case-studies/blossom/mood-disorders.png",
    alt: "Mood tracking feature — app screens",
    caption: "Fig 9. Mood tracking feature — app screens",
    width: 1400,
    height: 926,
  },
  {
    title: "🛌 Helping Build a Healthy Sleep Schedule",
    detail:
      "By tracking their sleep, women can gain a better understanding of their sleep deficits and make informed decisions about managing their sleep routines.",
    src: "/case-studies/blossom/sleep-schedule.png",
    alt: "Sleep tracking feature — app screens",
    caption: "Fig 10. Sleep tracking feature — app screens",
    width: 1400,
    height: 847,
  },
  {
    title: "❤️‍🩹 Achieving a Healthy Lifestyle",
    detail:
      "Based on the data input by the user regarding their mood, sleep and integrating wearables like Fitbit and Apple Watch, the app will provide detailed data and suggestions to help them overcome these challenges.",
    src: "/case-studies/blossom/healthy-lifestyle.png",
    alt: "Health dashboard and wearable integration — app screens",
    caption: "Fig 11. Health dashboard and wearable integration — app screens",
    width: 1400,
    height: 847,
  },
  {
    title: "💪🏻 Combating Social Isolation and Loneliness",
    detail:
      "Connecting mothers with each other through community features, group activities, and shared experiences to combat the isolation that often accompanies the postpartum period.",
    src: "/case-studies/blossom/social-isolation.png",
    alt: "Community and connection features — app screens",
    caption: "Fig 12. Community and connection features — app screens",
    width: 1007,
    height: 1400,
  },
  {
    title: "👆🏻 A Culminated Space for Guidance",
    detail:
      "The resources feature offers a wide range of educational materials, articles, and guides that provide women with essential information about postpartum recovery. Events are a great way to connect with mothers and share their experiences.",
    src: "/case-studies/blossom/culminated-guidance.png",
    alt: "Resources and events feature — app screens",
    caption: "Fig 13. Resources and events feature — app screens",
    width: 1400,
    height: 1285,
  },
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

export function BlossomCaseStudy() {
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
            <Link
              href="/#work"
              className="text-button text-brand transition hover:opacity-70"
            >
              ← Back to all projects
            </Link>

            <h1 className="mt-12 max-w-[760px] text-[42px] font-bold leading-[1.12] tracking-[-0.015em] text-ink sm:text-[56px] sm:leading-[64px]">
              Blossom: A Postpartum
              <span className="block">Friend</span>
            </h1>

            <p className="mt-4 max-w-[800px] text-body-lg text-ink-tertiary">
              Fem-Tech, a rising industry, has one of the most unseen problem
              statements. I explored the nuances in delivering features and
              designed a scalable application for women to help them in their
              postpartum journey.
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metadata.map(([label, lineOne, lineTwo]) => (
                <div key={label} className="flex flex-col gap-2">
                  <dt className="font-mono text-mono-tag uppercase text-brand">
                    {label}
                  </dt>
                  <dd className="text-body-sm font-medium text-ink-secondary">
                    <span className="block">{lineOne}</span>
                    {lineTwo ? <span className="block">{lineTwo}</span> : null}
                  </dd>
                </div>
              ))}
            </dl>

            <figure className="mt-8 flex flex-col gap-2">
              <div className="case-study-cover-frame overflow-hidden rounded-xl border border-hairline bg-blue-0 shadow-small">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/blossom-thumb.mp4" type="video/mp4" />
                </video>
              </div>
              <figcaption className="font-mono text-mono-caption text-gray-400">
                Fig 1. Blossom app — cover walkthrough
              </figcaption>
            </figure>
          </header>

          <Section id="overview" eyebrow="01 — Overview" title="What is Blossom?">
            <p className="text-body text-ink-secondary">
              Blossom is a platform to provide a holistic approach to
              postpartum care, promoting self-care, connection and empowerment
              for women during this transformative phase of motherhood. This
              was one of the problem statements for Protothon 2023 conducted
              by Dubstech, and this personal project served as a successful
              design challenge for the interview process for my internship.
            </p>

            <Figure
              src="/case-studies/blossom/blossom-product-overview.png"
              alt="Blossom product overview — app screens"
              width={1400}
              height={1128}
              caption="Fig 2. Blossom product overview — app screens"
            />
          </Section>

          <Section
            id="user-story"
            eyebrow="02 — User Story"
            title="What is Postpartum Depression?"
          >
            <p className="text-body text-ink-secondary">
              Meet Emma, a new mother who is thrilled to start her parental
              journey. But the reality of postpartum hits differently than
              expected:
            </p>

            <NumberedList items={userStory} />

            <Figure
              src="/case-studies/blossom/blossom-storytelling.png"
              alt="Emma's postpartum journey — illustrated storyboard"
              width={1400}
              height={970}
              caption="Fig 3. Emma's postpartum journey — illustrated storyboard"
            />
          </Section>

          <Section
            id="primary-research"
            eyebrow="03 — Primary Research"
            title="Primary Research"
          >
            <blockquote className="border-l-[3px] border-brand px-6 py-5 text-[18px] font-medium leading-6 tracking-[-0.005em] text-ink">
              Sadly, it&apos;s believed that postpartum depression is much
              more common than the data reveals.
            </blockquote>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {researchMetrics.map((metric) => (
                <div
                  key={metric.stat}
                  className="rounded-xl bg-blue-0 px-5 py-6"
                >
                  <p className="text-[28px] font-bold leading-9 tracking-[-0.005em] text-brand">
                    {metric.stat}
                  </p>
                  <p className="mt-2 text-caption text-ink-secondary">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="user-research"
            eyebrow="04 — User Research"
            title="User Research"
          >
            <p className="text-body text-ink-secondary">
              I conducted a short survey of 21 participants and 4 user
              interviews to understand their experiences during the postpartum
              period. Key findings from the survey:
            </p>

            <NumberedList items={surveyFindings} />
          </Section>

          <Section
            id="challenges"
            eyebrow="05 — Challenges"
            title="Let's Look at the Challenges"
          >
            <p className="text-body text-ink-secondary">
              Upon talking to users, these were the common feelings that made
              the postnatal phase difficult:
            </p>

            <Figure
              src="/case-studies/blossom/physical-challenges.png"
              alt="Physical recovery challenges illustration"
              width={1400}
              height={668}
              caption="Fig 4. Physical recovery challenges illustration"
            />

            <blockquote className="border-l-[3px] border-brand px-6 py-5 text-[18px] font-medium leading-6 tracking-[-0.005em] text-ink">
              &ldquo;I had some baby blues but not depression. I got very sad
              in the evening and cried but in the morning I was happy and
              ready to mum again.&rdquo; — Working Mother, Age 35, Research
              Participant
            </blockquote>
          </Section>

          <Section
            id="target-users"
            eyebrow="06 — Target Users"
            title="Understanding Our Target Users"
          >
            <p className="text-body text-ink-secondary">
              Women often feel guilty and stuck — they are consumed by taking
              care of their baby and their health is often unnoticed. By
              building an empathy map, I could understand the emotional
              landscape of motherhood.
            </p>

            <Figure
              src="/case-studies/blossom/empathy-map.png"
              alt="Empathy map — understanding the emotional landscape of new mothers"
              width={1400}
              height={1359}
              caption="Fig 5. Empathy map — understanding the emotional landscape of new mothers"
            />

            <div>
              <h3 className="text-h4 text-ink">Who Would Be an Ideal User?</h3>
              <p className="mt-3 text-body text-ink-secondary">
                Women often feel guilty and stuck, they are consumed by taking
                care of their baby and their health is often unnoticed. With
                building an empathy map I could understand the emotional
                landscape of motherhood.
              </p>
            </div>

            <Figure
              src="/case-studies/blossom/user-persona.png"
              alt="User persona — ideal target user profile"
              width={1400}
              height={1117}
              caption="Fig 6. User persona — ideal target user profile"
            />

            <div>
              <h3 className="text-h4 text-ink">Current Competitors</h3>
              <p className="mt-3 text-body text-ink-secondary">
                I looked at the existing apps in the market solving similar
                problems. This was a crucial step to adapt from them and fill
                the voids. I was able to understand the flow and base the
                product environment around this concept.
              </p>
            </div>

            <Figure
              src="/case-studies/blossom/competitor-analysis.png"
              alt="Competitive analysis — existing postpartum apps in market"
              width={1400}
              height={1311}
              caption="Fig 7. Competitive analysis — existing postpartum apps in market"
            />
          </Section>

          <Section
            id="ideation"
            eyebrow="07 — Synthesis"
            title="What Did We Learn So Far?"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {learnings.map((learning) => (
                <div
                  key={learning.title}
                  className="rounded-xl bg-canvas p-6 shadow-small"
                >
                  <h3 className="text-[18px] font-semibold leading-6 tracking-[-0.005em] text-ink">
                    {learning.title}
                  </h3>
                  <p className="mt-3 text-body-sm text-ink-secondary">
                    {learning.detail}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-[3px] border-brand px-6 py-5 text-[18px] font-medium leading-6 tracking-[-0.005em] text-ink">
              How might we help mothers overcome the challenges and provide
              guidance for new mothers to make the journey less overwhelming?
            </blockquote>
          </Section>

          <Section
            id="features"
            eyebrow="08 — Features"
            title="The Blossom Solution"
          >
            <p className="text-body text-ink-secondary">
              Empowering new mothers with personalized support and tools to
              navigate postpartum challenges confidently and healthily.
            </p>

            <Figure
              src="/case-studies/blossom/ideation-process.png"
              alt="Blossom ideation process — FigJam file"
              width={1400}
              height={1144}
              caption="Fig 8. Blossom ideation process — FigJam file"
            />

            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-6">
                <div>
                  <h3 className="text-h4 text-ink">{feature.title}</h3>
                  <p className="mt-3 text-body text-ink-secondary">
                    {feature.detail}
                  </p>
                </div>
                <Figure
                  src={feature.src}
                  alt={feature.alt}
                  caption={feature.caption}
                  width={feature.width}
                  height={feature.height}
                />
              </div>
            ))}
          </Section>

          <Section id="learnings" eyebrow="09 — Learnings" title="Key Takeaways">
            <p className="text-body text-ink-secondary">
              This project pushed me to design for an emotionally sensitive,
              underserved audience under a tight three-week timeline. It
              sharpened how I translate research into features that feel
              supportive rather than clinical — and it went on to serve as a
              successful design challenge for my internship interview process.
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
