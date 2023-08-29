import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req, res) {
  redirect("/");
  // {
  //   const authorizationHeader = req.headers.authorization;

  //   if (!authorizationHeader) {
  //     return ;
  //   }

  //   const token = authorizationHeader.replace("Bearer ", "");

  //   return NextResponse.next({
  //     ...res,
  //     headers: {
  //       ...res.headers,
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // }
}
