import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {
  return NextResponse.json(
    {
      message: "Welcome to our API!",
      version: "1.0",
    },
    {
      status: 200,
      headers: {
        "Set-Cookie": "theme=dark; path=/;",
      },
    }
  );
}
