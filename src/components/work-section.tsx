"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import caseStudies from "@/data/case-studies.json";
import siteData from "@/data/site-data.json";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  thumbnail: string;
  metadata: Partial<Record<string, string>>;
};

type ProjectGroup = "UX Design" | "UX Research";

const projectGroups: Record<ProjectGroup, Project[]> = {
  "UX Design": caseStudies.uxDesign as Project[],
  "UX Research": caseStudies.uxResearch as Project[],
};

function videoSrc(thumbnail: string) {
  return `/videos/${thumbnail.split("/").pop()}`;
}

function isCraigslistProject(project: Project) {
  return project.thumbnail.includes("craigslist-thumb.mp4");
}

export function WorkSection() {
  const [activeTab, setActiveTab] = useState<ProjectGroup>("UX Design");
  const reduceMotion = useReducedMotion();
  const projects = projectGroups[activeTab];

  return (
    <section id="work" className="bg-dots scroll-mt-24 px-4 pb-24 sm:px-6">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-mono text-mono-label uppercase text-brand">
            {siteData.workToggle.label}
          </p>

          <div
            role="tablist"
            aria-label={siteData.workToggle.label}
            className="flex items-center rounded-full bg-canvas p-1"
          >
            {siteData.workToggle.tabs.map((tab) => {
              const typedTab = tab as ProjectGroup;
              const active = typedTab === activeTab;

              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(typedTab)}
                  className={
                    "rounded-full px-5 py-2.5 text-button transition-all " +
                    (active
                      ? "bg-white text-ink shadow-small"
                      : "text-ink-secondary hover:text-ink")
                  }
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={
            "flex w-full max-w-[1052px] flex-col " +
            (activeTab === "UX Research" ? "gap-8 pb-[42vh]" : "gap-12")
          }
        >
          {projects.map((project, index) => (
            <CaseStudyCard
              key={project.slug}
              project={project}
              index={index}
              stack={activeTab === "UX Research"}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  project,
  index,
  stack,
}: {
  project: Project;
  index: number;
  stack?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const craigslist = isCraigslistProject(project);
  const enableStack = Boolean(stack && !reduceMotion);

  return (
    <motion.article
      initial={enableStack ? { opacity: 0, scale: 0.96, y: 72 } : undefined}
      whileInView={enableStack ? { opacity: 1, scale: 1, y: 0 } : undefined}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.65, delay: index * 0.05, ease: "easeOut" }}
      style={enableStack ? { zIndex: index + 1 } : undefined}
      className={
        "grid overflow-hidden rounded-[16px] bg-blue-0 p-2.5 shadow-[0px_4px_8px_rgba(0,0,0,0.04)] lg:min-h-[572px] lg:grid-cols-[490px_1fr] " +
        (enableStack ? "sticky top-28" : "")
      }
    >
      <div className="flex min-h-[420px] flex-col justify-center gap-8 rounded-t-[14px] bg-white px-6 py-9 lg:min-h-[552px] lg:rounded-l-[14px] lg:rounded-r-none">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-0 px-3 py-1 font-mono text-mono-tag uppercase text-brand"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="max-w-[458px] text-[32px] font-bold leading-[1.1] tracking-[-0.005em] text-blue-900 sm:text-[40px] sm:leading-[48px]">
            {project.title}
          </h3>
          <p className="max-w-[466px] text-[16px] font-semibold leading-6 tracking-[-0.005em] text-ink-secondary">
            {project.subtitle}
          </p>
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex w-fit rotate-[0.37deg] items-center justify-center rounded-[6px] border-2 border-white bg-blue-500 px-6 py-3 font-mono text-[12px] font-medium uppercase leading-4 tracking-[0.06em] text-white shadow-[0px_2px_4px_#e0edff] transition hover:-translate-y-0.5 hover:bg-blue-600"
        >
          View Case Study
        </Link>
      </div>

      <div
        className={
          "flex min-h-[320px] items-center justify-center overflow-hidden rounded-b-[14px] lg:min-h-[552px] lg:rounded-l-none lg:rounded-r-[14px] " +
          (craigslist ? "bg-[#ffd7fb]" : "bg-white")
        }
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className={
            craigslist
              ? "w-[86%] max-w-[448px] rounded-xl object-contain sm:w-[83%]"
              : "h-full w-full rounded-xl object-cover"
          }
        >
          <source src={videoSrc(project.thumbnail)} type="video/mp4" />
        </video>
      </div>
    </motion.article>
  );
}
