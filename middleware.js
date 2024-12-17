import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { NextResponse } from "next/server";

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  //setting params
  const searchParams = req.nextUrl.searchParams;
  const params = new URLSearchParams(searchParams.toString());
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("params", params.get("season") ?? "1");

  const token =
    req.cookies.get("next-auth.session-token") ||
    req.cookies.get("__Secure-next-auth.session-token");
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (token) {
      return NextResponse.redirect(
        new URL(DEFAULT_LOGIN_REDIRECT, req.nextUrl)
      );
    }
    return null;
  }

  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // return null
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
