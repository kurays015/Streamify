import NextAuth from "next-auth";
import {
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes";

import authConfig from "@/auth.config";

import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(req => {
  const isAuthenticated = !!req.auth;
  const { pathname } = req.nextUrl;
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isAuthenticated) {
      return NextResponse.redirect(
        new URL(DEFAULT_LOGIN_REDIRECT, req.nextUrl)
      );
    }
    return null;
  }

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
