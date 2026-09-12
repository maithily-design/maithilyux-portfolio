"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "problems", label: "Problems" },
  { id: "objectives", label: "Objectives" },
  { id: "strategy", label: "Strategy" },
  { id: "heuristic-evaluation", label: "Heuristic Evaluation" },
  { id: "user-research", label: "User Research" },
  { id: "usability-testing", label: "Usability Testing" },
  { id: "ideation", label: "Ideation" },
  { id: "final-design", label: "Final Design" },
  { id: "reflections", label: "Reflections" },
];

const metadata = [
  ["ROLE", "UX Designer", "UX Researcher"],
  ["TIMELINE", "12 Weeks", ""],
  ["DELIVERABLES", "User Research, Usability", "Testing, High-Fi Designs"],
  ["TYPE", "E-Commerce", "Website Redesign"],
];

const problems = [
  "The website's navigation is clunky and inefficient, frustrating users who want to buy or sell items easily.",
  "Limited security features and a lack of control over ad reach can hinder successful transactions.",
  "The text-heavy design overwhelms users with information and makes it difficult to find vital details like prices, contact information, and item descriptions.",
  "Craigslist lacks a verification system, making it difficult for users to trust sellers and avoid scams.",
];

const objectives = [
  "Learning the root cause of mistrust from users via user interviews.",
  "Enhance website navigation to streamline buying, selling, and browsing for all users.",
  "Strengthen security features and offer more control over ad reach to improve the safety and effectiveness of listings.",
  "Create a user-friendly interface with a clear information hierarchy to reduce clutter and improve readability.",
];

const strategy = [
  "Started by reading online about Craigslist from Reddit and Quora to understand real user sentiment.",
  "Conducted a heuristic evaluation of the website to identify usability violations.",
  "Built the foundation for drafting effective user surveys and user interviews.",
  "Planned usability tests by writing down scenarios and tasks.",
  "Narrowed down the scope of problems uncovered by users to focus on during ideation.",
  "Drew sketches and iterations, then completed the high-fidelity designs.",
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

export function CraigslistCaseStudy() {
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
        <aside className="hidden w-[220px] shrink-0 lg:block" aria-hidden={false}>
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
              Reimagining Craigslist
              <span className="block">in Today&apos;s Era</span>
            </h1>

            <p className="mt-4 max-w-[800px] text-body-lg text-ink-tertiary">
              This case analysis explores revamping the Craigslist webpage,
              emphasizing a user-friendly strategy that solved 90% of the
              platform&apos;s user experience problems.
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
                  className="h-full w-full object-contain"
                >
                  <source src="/videos/craigslist-thumb.mp4" type="video/mp4" />
                </video>
              </div>
              <figcaption className="font-mono text-mono-caption text-gray-400">
                Fig 1. Craigslist redesign — cover walkthrough
              </figcaption>
            </figure>
          </header>

          <Section id="overview" eyebrow="01 — Overview" title="Overview">
            <p className="text-body text-ink-secondary">
              Craigslist is a popular online platform that provides classified
              advertisements and forums for various categories, including jobs,
              housing, personals, and items for sale. It serves two primary user
              groups: sellers seeking an efficient platform to list and sell
              items, and buyers looking for specific items, good deals, and
              trustworthy sellers.
            </p>
          </Section>

          <Section
            id="problems"
            eyebrow="02 — Problems"
            title="Problems Encountered"
          >
            <NumberedList items={problems} />
          </Section>

          <Section
            id="objectives"
            eyebrow="03 — Objectives"
            title="Defining the Main Objectives"
          >
            <NumberedList items={objectives} />
          </Section>

          <Section id="strategy" eyebrow="04 — Strategy" title="My Strategy">
            <NumberedList items={strategy} />

            <Figure
              src="/case-studies/craigslist/design-process-overview.png"
              alt="Craigslist redesign process overview timeline"
              width={1400}
              height={201}
              caption="Fig 2. Design process — from research to final design"
            />
          </Section>

          <Section
            id="heuristic-evaluation"
            eyebrow="05 — Heuristic Evaluation"
            title="Heuristic Evaluation"
          >
            <div>
              <h3 className="text-h4 text-ink">Website Analysis</h3>
              <p className="mt-3 text-body text-ink-secondary">
                The heuristic evaluation revealed critical usability issues
                across navigation, visual hierarchy, and trust signals. The
                analysis covered three key areas of the existing Craigslist
                interface.
              </p>
            </div>

            <Figure
              src="/case-studies/craigslist/heuristic-evaluation-1.png"
              alt="Heuristic evaluation of Craigslist navigation and layout"
              width={1400}
              height={814}
              caption="Fig 3. Heuristic evaluation — navigation and layout issues"
            />
            <Figure
              src="/case-studies/craigslist/heuristic-evaluation-2.png"
              alt="Heuristic evaluation of Craigslist visual hierarchy"
              width={1400}
              height={754}
              caption="Fig 4. Heuristic evaluation — visual hierarchy problems"
            />
            <Figure
              src="/case-studies/craigslist/heuristic-evaluation-3.png"
              alt="Heuristic evaluation of Craigslist trust and security gaps"
              width={1400}
              height={808}
              caption="Fig 5. Heuristic evaluation — trust and security gaps"
            />
          </Section>

          <Section
            id="user-research"
            eyebrow="06 — User Research"
            title="User Research Results"
          >
            <p className="text-body text-ink-secondary">
              The following data is summarized after user surveys and user
              interviews. User likes included: all services in one place, lots
              of options in a budget, fast website speed, simple and functional
              design, easy access to seller contact, and easy surfing for any
              age group. User pain points included: not aesthetic with lacking
              functionalities, hard to navigate, no proper segregation of
              listings, overwhelming text-heavy layout, no motivation to browse,
              and concerns about security and seller verification.
            </p>

            <Figure
              src="/case-studies/craigslist/user-research-insights.png"
              alt="User research insights — likes versus pain points"
              width={1400}
              height={750}
              caption="Fig 6. User research insights — likes vs pain points synthesis"
            />
          </Section>

          <Section
            id="usability-testing"
            eyebrow="07 — Usability Testing"
            title="Usability Testing"
          >
            <p className="text-body text-ink-secondary">
              The usability test helped narrow the user problems and define the
              scope during the ideation phase. Tasks were designed around core
              user journeys: finding a listing, contacting a seller, and posting
              an ad.
            </p>

            <Figure
              src="/case-studies/craigslist/usability-testing.png"
              alt="Usability testing results and task completion rates"
              width={1400}
              height={1246}
              caption="Fig 7. Usability testing results — task completion rates and findings"
            />
          </Section>

          <Section
            id="ideation"
            eyebrow="08 — Ideation"
            title="Ideation & New Features"
          >
            <p className="text-body text-ink-secondary">
              Craigslist&apos;s user journey was smooth, but its layout hindered
              efficient navigation by obscuring key elements. After uncovering
              the core issues, I decided to introduce new features for the
              website.
            </p>

            <div>
              <h3 className="text-h4 text-ink">
                Feature 1: Efficient Ad Tracking
              </h3>
              <p className="mt-3 text-body text-ink-secondary">
                Sellers had no way to figure out how their ad was performing. I
                designed a dashboard that shows metrics like listing ranking
                within the category, average time spent by users on the
                listing, and total views received — helping sellers optimize
                and sell out listings faster.
              </p>
            </div>

            <Figure
              src="/case-studies/craigslist/user-flow-posting-ad.png"
              alt="User flow for posting an ad with performance tracking"
              width={1400}
              height={672}
              caption="Fig 8. User flow for posting an ad with tracking"
            />

            <div>
              <h3 className="text-h4 text-ink">
                Feature 2: Connecting Buyer &amp; Seller Online
              </h3>
              <p className="mt-3 text-body text-ink-secondary">
                The chat feature reduces the communication barrier and
                overcomes multiple problems. Buyers can directly communicate
                with sellers and address issues promptly. A responsive seller
                makes users feel more comfortable and confident about a
                listing, providing authenticity. It also relieves sellers from
                revealing sensitive contact information publicly.
              </p>
            </div>

            <Figure
              src="/case-studies/craigslist/user-flow-connect-seller.png"
              alt="User flow for connecting with the seller"
              width={1400}
              height={685}
              caption="Fig 9. User flow for connecting with the seller"
            />
          </Section>

          <Section
            id="final-design"
            eyebrow="09 — Final Design"
            title="The Final Design"
          >
            <div>
              <h3 className="text-h4 text-ink">Reimagining the Homepage</h3>
              <p className="mt-3 text-body text-ink-secondary">
                My approach was to design the homepage to make new users feel
                welcome. With a modern look, users would feel like browsing
                further and exploring more. This is a necessary step to reduce
                the bounce rate. There is a tendency among users to browse more
                by making the website inquisitive with an interesting tagline.
                I also focused on easy navigation because the content for this
                website is enormous, and it can be easy for a user to lose
                sight.
              </p>
            </div>

            <Figure
              src="/case-studies/craigslist/craigslist-home-page.png"
              alt="Redesigned Craigslist homepage"
              width={739}
              height={1400}
              caption="Fig 10. Homepage redesign — modern, welcoming layout"
            />

            <div>
              <h3 className="text-h4 text-ink">Introducing Relevant Filters</h3>
              <p className="mt-3 text-body text-ink-secondary">
                The content for this website is huge. I redesigned the filter
                feature to sort listings by vicinity, duration of postings, and
                price range. This allows users to refine a large set of data to
                display only items meeting their specific criteria, greatly
                enhancing the user experience.
              </p>
            </div>

            <Figure
              src="/case-studies/craigslist/filter-redesign.png"
              alt="Filter redesign — location, duration, and price filters"
              width={1400}
              height={874}
              caption="Fig 11. Filter redesign — location, duration, and price filters"
            />

            <div>
              <h3 className="text-h4 text-ink">Making Ad Posting Informative</h3>
              <p className="mt-3 text-body text-ink-secondary">
                I made the ad posting task easier and gave sellers the freedom
                to choose what details to showcase. Sellers can check their
                listing performance with metrics like category ranking, average
                time spent by users on the listing, and total views received.
              </p>
            </div>

            <Figure
              src="/case-studies/craigslist/post-an-ad.png"
              alt="Ad posting flow with performance metrics dashboard"
              width={1400}
              height={911}
              caption="Fig 12. Ad posting flow with performance metrics dashboard"
            />

            <div>
              <h3 className="text-h4 text-ink">
                Building Trust with In-App Chat
              </h3>
              <p className="mt-3 text-body text-ink-secondary">
                The chat feature reduces the communication barrier. Buyers can
                directly communicate with sellers and address issues promptly.
                A responsive and helpful seller makes users feel more
                comfortable and confident about the listing, which provides
                authenticity. It also ensures sellers&apos; privacy by not
                requiring them to reveal sensitive information publicly.
              </p>
            </div>

            <Figure
              src="/case-studies/craigslist/in-app-chat-feature.png"
              alt="In-app chat feature for buyer-seller communication"
              width={1400}
              height={911}
              caption="Fig 13. In-app chat feature — buyer-seller communication"
            />
          </Section>

          <Section id="reflections" eyebrow="10 — Reflections" title="Reflections">
            <div>
              <h3 className="text-h4 text-ink">Recruit the Right Participants</h3>
              <p className="mt-3 text-body text-ink-secondary">
                The foundation of user research should be solid and correct. I
                started with a heuristic evaluation — something new I learned in
                my course — which gave the right direction for effective
                surveys. When I interviewed users from the UX field, they gave
                suggestions to improve the design rather than sharing problems
                they encountered. I then decided to filter users unrelated to
                the design field, which made me empathize with them more as I
                could understand their issues closely.
              </p>
            </div>

            <div>
              <h3 className="text-h4 text-ink">Assumption vs. Actual Design</h3>
              <p className="mt-3 text-body text-ink-secondary">
                Incorporating the user into the development process is
                crucial, as even the most meticulously planned designs remain
                mere conjectures until subjected to real-world testing. This
                project helped me understand how to bridge stakeholders&apos;
                requirements with user requirements through thorough research.
                It is often the subtle remarks and observations from users that
                hold the key to significant breakthroughs.
              </p>
            </div>

            <blockquote className="border-l-[3px] border-brand px-6 py-5 text-[18px] font-medium leading-6 tracking-[-0.005em] text-ink">
              This case study solved 90% of the platform&apos;s user experience
              problems through a systematic, research-driven redesign approach.
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
