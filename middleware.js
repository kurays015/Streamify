import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const token = await getToken({ req });
  const protectedRoutes =
    req.nextUrl.pathname.startsWith("/movie-series") ||
    req.nextUrl.pathname.startsWith("/info") ||
    req.nextUrl.pathname.startsWith("/watch");

  const signInRoute = req.nextUrl.pathname.startsWith("/signin");

  if (!token && protectedRoutes) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (token && signInRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
