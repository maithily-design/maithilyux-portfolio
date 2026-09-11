import type { Metadata } from "next";

import { BatteryCaseStudy } from "@/components/battery-case-study";

export const metadata: Metadata = {
  title: "Battery Life Perception — Maithily Ashtankar",
  description:
    "A UX research case study at Lenovo on how users define, experience, and respond to battery-related friction — and why all-day battery means more than hours.",
};

export default function BatteryLifePerceptionPage() {
  return <BatteryCaseStudy />;
}
