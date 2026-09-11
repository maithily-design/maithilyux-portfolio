import Image from "next/image";
import { Paperclip } from "lucide-react";

import { Footer } from "@/components/footer";
import { SiteNav } from "@/components/site-nav";

const experience = [
  {
    company: "Lenovo",
    description:
      "Leading UX research initiatives across enterprise and consumer product lines.",
    period: "2025 — Present",
    role: "UX Researcher",
  },
  {
    company: "Anvilist",
    description:
      "Solo designer — built the design system and redesigned core product pages for a SaaS startup.",
    period: "June 2024 – Feb 2025",
    role: "UX Designer",
  },
  {
    company: "Hushh AI",
    description:
      "Established the MVP for a luxury-tech consumer app. Field studies, interviews, and usability testing.",
    period: "June 2023 – Dec 2023",
    role: "UX Design Intern",
  },
];

const stamps: Array<{
  src: string;
  alt: string;
  caption: string;
  tag: string;
  rotate: string;
  captionFirst?: boolean;
  tagMuted?: boolean;
}> = [
  {
    src: "/about/stamp-nyc.jpg",
    alt: "Standing on a New York City street corner",
    caption: "BEST CITY. DON'T ARGUE WITH A LEO",
    tag: "NYC",
    rotate: "rotate-3",
  },
  {
    src: "/about/stamp-desk.jpg",
    alt: "At the Friends Experience exhibit with a friend",
    caption: "THE ONE WITH MY SISTER",
    tag: "F.R.I.E.N.D.S EXPERIENCE",
    rotate: "-rotate-3",
  },
  {
    src: "/about/stamp-home-kitchen.jpg",
    alt: "A slice of cinnamon toast on a plate",
    caption: "COOKS FOR THE COMPLIMENTS",
    tag: "HOME KITCHEN",
    rotate: "rotate-2",
  },
  {
    src: "/about/stamp-vibes.jpg",
    alt: "Sitting among red flowers in a garden",
    caption: "BLAMES MERCURY, NEVER HERSELF",
    tag: "A SUCKER FOR EXPLORING GARDENS",
    rotate: "rotate-5",
  },
  {
    src: "/about/stamp-arizona.jpg",
    alt: "Arms raised in Antelope Canyon, Arizona",
    caption: "SURVIVED 2 YEARS OF AZ HEAT",
    tag: "ARIZONA",
    rotate: "-rotate-5",
  },
  {
    src: "/about/stamp-cafe.jpg",
    alt: "A latte with latte art on a cafe table",
    caption: "JUDGES CAFES BY THEIR OATMILK",
    tag: "CAFE LIFE",
    rotate: "-rotate-2",
  },
];

function Stamp({
  src,
  alt,
  caption,
  tag,
  rotate,
  captionFirst,
  tagMuted,
}: (typeof stamps)[number]) {
  const label = (
    <p className="font-mono text-mono-stamp uppercase tracking-[0.08em] text-ink-secondary">
      {caption}
    </p>
  );

  return (
    <figure
      className={`flex w-[280px] max-w-full flex-col gap-2 rounded-[2px] border-[1.5px] border-dashed border-gray-300 bg-white p-4 shadow-[0px_4px_20px_0px_rgba(102,165,255,0.12)] ${rotate} transition-transform hover:rotate-0`}
    >
      {captionFirst ? label : null}
      <div className="relative aspect-[288/320] w-full overflow-hidden rounded-[2px] bg-canvas">
        <Image src={src} alt={alt} fill sizes="288px" className="object-cover" />
      </div>
      {captionFirst ? null : label}
      <figcaption
        className={
          "font-mono text-mono-stamp uppercase tracking-[0.08em] " +
          (tagMuted ? "text-ink-secondary" : "text-brand")
        }
      >
        {tag}
      </figcaption>
    </figure>
  );
}

export function AboutPage() {
  return (
    <main className="bg-white text-ink">
      <SiteNav />

      {/* Origin story */}
      <section className="bg-dots relative overflow-hidden px-lg pb-6xl pt-28 sm:px-6 md:pb-24">
        <div className="relative mx-auto max-w-[1272px]">
          <p className="font-mono text-mono-label uppercase text-brand">
            About me
          </p>
          <h1 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.005em] text-ink sm:text-[40px] sm:leading-[48px]">
            How I stumbled into design
          </h1>

          <div className="mt-16 grid max-w-[1080px] gap-x-16 gap-y-16 lg:grid-cols-[663fr_379fr] lg:gap-x-[110px] lg:items-start">
            {/* Paper letter — exported directly from Figma as one image */}
            <div className="relative">
              {/* Paperclip, pinned ~76% across the top edge of the letter */}
              <Paperclip
                aria-hidden
                strokeWidth={2.5}
                className="absolute -top-3 left-[76%] z-10 h-12 w-12 -translate-x-1/2 rotate-[15deg] text-gray-500"
              />
              <Image
                src="/about/letter.png"
                alt="It started with code, not design. As a computer science student, I was always drawn to the front end — the part people actually see and touch. I spent hours in HTML, CSS, and JavaScript, but somewhere between debugging layouts and pixel-pushing buttons, I realized I wasn't just writing code. I was making decisions about how things should look, feel, and work. The real turning point was a math teaching website for dyslexic students. For the first time, I wasn't building to ship — I was solving a real problem for real people. That changed everything. I taught myself UX from there. Not because it was a career move, but because I couldn't stop. The storytelling, the problem-solving, the feeling that design could genuinely help someone. That's how I stumbled into this world. And I'm still here because it still feels exactly like that."
                width={696}
                height={735}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 663px, calc(100vw - 32px)"
                priority
              />
            </div>

            {/* Photo stamp */}
            <div className="flex justify-center lg:justify-start">
              <figure className="flex w-[280px] max-w-full rotate-2 flex-col items-center gap-4 rounded-[2px] border-[1.5px] border-dashed border-gray-300 bg-white p-4 shadow-medium transition-transform hover:rotate-0">
                <div className="relative aspect-[373.85/460.102] w-full overflow-hidden rounded-[2px] bg-canvas">
                  <Image
                    src="/about/origin-photo.jpg"
                    alt="Maithily dressed up, smiling"
                    fill
                    sizes="288px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="font-mono text-mono-stamp uppercase tracking-[0.08em] text-ink-tertiary">
                  Always playing dress up
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Work experience */}
      <section className="px-lg py-6xl sm:px-6 md:py-24">
        <div className="mx-auto max-w-[1272px]">
          <p className="font-mono text-mono-label uppercase text-brand">
            Experience
          </p>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.005em] text-ink sm:text-[40px] sm:leading-[48px]">
            Where I&apos;ve worked
          </h2>

          <div className="mt-10 flex flex-col border-t border-hairline">
            {experience.map((job) => (
              <div
                key={job.company}
                className="flex flex-col gap-2 border-b border-hairline py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex flex-col gap-1.5">
                  <p className="text-h4 text-ink">{job.company}</p>
                  <p className="text-body-sm text-ink-tertiary">
                    {job.description}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-1 sm:items-end">
                  <p className="font-mono text-mono-tag uppercase text-brand">
                    {job.period}
                  </p>
                  <p className="font-mono text-mono-caption text-ink-tertiary">
                    {job.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outside of work / Leo stamps */}
      <section className="bg-dots relative overflow-hidden px-lg py-6xl sm:px-6 md:py-24">
        <div className="relative mx-auto max-w-[1272px]">
          <p className="font-mono text-mono-label uppercase text-brand">
            Outside of work
          </p>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.005em] text-blue-800 sm:text-[40px] sm:leading-[48px]">
            Classic Leo Behavior ♌
          </h2>

          <div className="mt-14 grid grid-cols-1 place-items-center gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {stamps.map((stamp) => (
              <Stamp key={stamp.tag} {...stamp} />
            ))}
          </div>
        </div>
      </section>

      <Footer
        eyebrow="That's a little about me"
        heading="Still collecting stories and solving for people."
        subtext="The best part of this page is that it will keep changing."
      />
    </main>
  );
}
