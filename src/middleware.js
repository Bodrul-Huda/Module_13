import { headers } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/bearer")) {
    const reqHeader = new Headers(req.headers);
    // const token = reqHeader.get("token");

    reqHeader.set("Bearer", "Bodrul");
    return NextResponse.next({
      request: { headers: reqHeader },
    });
  }
}
