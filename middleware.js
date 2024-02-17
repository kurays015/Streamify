import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const token = await getToken({ req });

  if (
    (!token && req.nextUrl.pathname.startsWith("/movie-series")) ||
    req.nextUrl.pathname.startsWith("/info")
  ) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (token && req.nextUrl.pathname.startsWith("/signin")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
