import { NextRequest, NextResponse } from "next/server";

import {
  CASE_STUDY_AUTH_COOKIE,
  createCaseStudyAuthToken,
  sanitizeNextPath,
} from "@/lib/case-study-auth";

function redirectToLogin(request: NextRequest, nextPath: string) {
  const url = new URL("/case-study-login", request.url);
  url.searchParams.set("error", "1");
  url.searchParams.set("next", nextPath);

  return NextResponse.redirect(url);
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const submittedPassword = String(formData.get("password") ?? "");
  const nextPath = sanitizeNextPath(formData.get("next"));
  const password = process.env.CASE_STUDY_PASSWORD;

  if (!password || submittedPassword !== password) {
    return redirectToLogin(request, nextPath);
  }

  const token = await createCaseStudyAuthToken(password);
  const response = NextResponse.redirect(new URL(nextPath, request.url));

  response.cookies.set({
    name: CASE_STUDY_AUTH_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
