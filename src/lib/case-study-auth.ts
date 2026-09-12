export const CASE_STUDY_AUTH_COOKIE = "maithily_case_study_access";

export const PROTECTED_CASE_STUDY_SLUGS = [
  "battery-life-perception",
  "cx-unify-baseline",
  "lenovo-my-hub",
];

const protectedSlugSet = new Set(PROTECTED_CASE_STUDY_SLUGS);

export function isProtectedCaseStudySlug(slug: string) {
  return protectedSlugSet.has(slug);
}

export function isProtectedCaseStudyPath(pathname: string) {
  const match = pathname.match(/^\/work\/([^/]+)\/?$/);

  return match ? isProtectedCaseStudySlug(match[1]) : false;
}

export function sanitizeNextPath(value: FormDataEntryValue | string | null) {
  const nextPath = typeof value === "string" ? value : "";

  if (!nextPath.startsWith("/") || nextPath.startsWith("//")) {
    return "/#work";
  }

  return nextPath;
}

export async function createCaseStudyAuthToken(password: string) {
  const payload = new TextEncoder().encode(
    `maithily-lenovo-case-studies:${password}`,
  );
  const digest = await crypto.subtle.digest("SHA-256", payload);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}
