import { NextResponse, type NextRequest } from "next/server";

import {
  CASE_STUDY_AUTH_COOKIE,
  createCaseStudyAuthToken,
  isProtectedCaseStudyPath,
} from "@/lib/case-study-auth";

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (!isProtectedCaseStudyPath(pathname)) {
    return NextResponse.next();
  }

  const password = process.env.CASE_STUDY_PASSWORD;

  if (password) {
    const expectedToken = await createCaseStudyAuthToken(password);
    const token = request.cookies.get(CASE_STUDY_AUTH_COOKIE)?.value;

    if (token === expectedToken) {
      return NextResponse.next();
    }
  }

  const loginUrl = new URL("/case-study-login", request.url);
  loginUrl.searchParams.set("next", `${pathname}${search}`);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/work/:path*"],
};
