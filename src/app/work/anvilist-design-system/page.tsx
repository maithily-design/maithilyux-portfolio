import type { Metadata } from "next";

import { AnvilistCaseStudy } from "@/components/anvilist-case-study";

export const metadata: Metadata = {
  title: "Crafting the Anvilist Design System — Maithily Ashtankar",
  description:
    "A UX design case study about building a scalable design system for Anvilist, a SaaS platform for early-stage startup professionals.",
};

export default function AnvilistDesignSystemPage() {
  return <AnvilistCaseStudy />;
}
