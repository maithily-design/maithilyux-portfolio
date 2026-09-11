import type { Metadata } from "next";

import { CxUnifyCaseStudy } from "@/components/cx-unify-case-study";

export const metadata: Metadata = {
  title: "CX Unify: Baseline Usability Research — Maithily Ashtankar",
  description:
    "A UX research case study at Lenovo baselining internal CX tools — where they work, where they break, and what should be fixed first.",
};

export default function CxUnifyBaselinePage() {
  return <CxUnifyCaseStudy />;
}
