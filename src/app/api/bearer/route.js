import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  let headerList = headers();
  let token = headerList.get("Bearer");

  return NextResponse.json({ msg: token });
}
