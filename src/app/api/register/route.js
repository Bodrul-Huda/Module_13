import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {
  let getCookie = req.cookies.get("theme")["value"];
  return NextResponse.json({ msg: getCookie });
}
