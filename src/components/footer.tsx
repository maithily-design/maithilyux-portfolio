import { ArrowUp, ExternalLink, Mail } from "lucide-react";

import siteData from "@/data/site-data.json";

function socialIcon(label: string) {
  if (label.toLowerCase() === "email") {
    return <Mail aria-hidden className="size-4" />;
  }

  return <ExternalLink aria-hidden className="size-4" />;
}

type FooterProps = {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
};

export function Footer({
  eyebrow = "Maithily Ashtankar",
  heading = siteData.footer.signoff,
  subtext = siteData.footer.subtext,
}: FooterProps = {}) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-blue-0 px-4 py-12 text-blue-700 sm:px-6"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,140,233,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(12,140,233,0.12) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative mx-auto flex w-full max-w-[1800px] flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="font-mono text-mono-label uppercase text-blue-700">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-[14ch] text-h2 text-blue-700">
              {heading}
            </h2>
            <p className="mt-4 max-w-[54ch] text-body text-blue-700/80">
              {subtext}
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={siteData.footer.socials.find((social) => social.label === "Email")?.url}
              className="inline-flex h-11 w-[148px] items-center justify-center rounded-full bg-blue-500 px-5 text-button text-white transition hover:bg-blue-600"
            >
              {siteData.footer.cta}
            </a>
            <a
              href="#top"
              className="inline-flex h-11 w-[148px] items-center justify-center gap-2 rounded-full border border-blue-700/25 px-5 text-button text-blue-700 transition hover:bg-blue-100/70"
            >
              Back to top
              <ArrowUp aria-hidden className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-blue-700/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            {siteData.footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="inline-flex items-center gap-2 rounded-full border border-blue-700/25 px-4 py-2 text-caption text-blue-700 transition hover:bg-blue-100/70 hover:text-blue-500"
              >
                {socialIcon(social.label)}
                {social.label}
              </a>
            ))}
          </div>

          <p className="text-caption text-blue-700/80">{siteData.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
