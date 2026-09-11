import type { Metadata } from "next";

import { HushhCaseStudy } from "@/components/hushh-case-study";

export const metadata: Metadata = {
  title: "Hushh Wallet: Finding the MVP for a Start-Up — Maithily Ashtankar",
  description:
    "A UX design case study about shaping the MVP for Hushh Wallet, a luxury-tech consumer app built around QR-based preference sharing.",
};

export default function HushhWalletPage() {
  return <HushhCaseStudy />;
}
