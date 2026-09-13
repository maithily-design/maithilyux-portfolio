"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import siteData from "@/data/site-data.json";

const navLinks = siteData.navigation.links;

function hrefFor(link: string) {
  if (link === "Home") return "/";
  if (link === "About") return "/about";
  return `#${link.toLowerCase()}`;
}

export function SiteNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-white/90 px-4 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-[764px] items-center justify-between py-3 sm:hidden">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="font-mono text-mono-label uppercase tracking-[0.08em] text-[#032a47]"
        >
          Maithily
        </Link>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-full border border-hairline bg-white text-[#032a47] shadow-small"
        >
          {mobileMenuOpen ? (
            <X aria-hidden className="size-5" />
          ) : (
            <Menu aria-hidden className="size-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="absolute left-4 right-4 top-[58px] rounded-[24px] border border-hairline bg-white p-3 shadow-large sm:hidden">
          <ul className="flex flex-col gap-1 text-[18px] font-semibold tracking-[-0.09px]">
            {navLinks.map((link) => {
              const href = hrefFor(link);
              const active = href === pathname;

              return (
                <li key={link}>
                  <a
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={
                      "flex rounded-2xl px-4 py-3 leading-6 transition-colors " +
                      (active
                        ? "bg-blue-0 text-brand"
                        : "text-[#032a47] hover:bg-canvas")
                    }
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <ul className="mx-auto hidden max-w-[764px] flex-wrap items-center justify-between gap-x-10 gap-y-2 py-4 text-[18px] font-medium tracking-[-0.09px] sm:flex sm:justify-center sm:gap-x-[clamp(28px,7vw,120px)]">
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
