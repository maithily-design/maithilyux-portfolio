import type { Metadata } from "next";

import { CraigslistCaseStudy } from "@/components/craigslist-case-study";

export const metadata: Metadata = {
  title: "Reimagining Craigslist in Today's Era — Maithily Ashtankar",
  description:
    "A UX design and research case study revamping the Craigslist webpage with a user-friendly strategy that solved 90% of the platform's UX problems.",
};

export default function CraigslistRedesignPage() {
  return <CraigslistCaseStudy />;
}
