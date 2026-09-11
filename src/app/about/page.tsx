import type { Metadata } from "next";

import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "About — Maithily Ashtankar",
  description:
    "How I stumbled into design, where I've worked, and a few classic Leo moments outside of work.",
};

export default function About() {
  return <AboutPage />;
}
