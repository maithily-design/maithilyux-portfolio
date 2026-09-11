"use client";

import { usePathname } from "next/navigation";

import siteData from "@/data/site-data.json";

const navLinks = siteData.navigation.links;

function hrefFor(link: string) {
  if (link === "Home") return "/";
  if (link === "About") return "/about";
  return `#${link.toLowerCase()}`;
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-white/90 px-6 backdrop-blur-sm">
      <ul className="mx-auto flex max-w-[764px] flex-wrap items-center justify-between gap-x-10 gap-y-2 py-4 text-[18px] font-medium tracking-[-0.09px] sm:justify-center sm:gap-x-[clamp(28px,7vw,120px)]">
        {navLinks.map((link) => {
          const href = hrefFor(link);
          const active = href === pathname;

          return (
            <li key={link}>
              <a
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  "leading-6 transition-opacity hover:opacity-60 " +
                  (active ? "text-brand" : "text-[#032a47]")
                }
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
