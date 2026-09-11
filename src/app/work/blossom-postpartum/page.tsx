import type { Metadata } from "next";

import { BlossomCaseStudy } from "@/components/blossom-case-study";

export const metadata: Metadata = {
  title: "Blossom: A Postpartum Friend — Maithily Ashtankar",
  description:
    "A UX design case study exploring FemTech's unseen problem space — a scalable postpartum support app designed for Protothon 2023.",
};

export default function BlossomPostpartumPage() {
  return <BlossomCaseStudy />;
}
