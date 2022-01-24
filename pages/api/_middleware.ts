import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
const signedinApis = ["/api/createuser"];
export function middleware(req: NextRequest) {
  let user = false;
console.log("req.nextUrl",  req.nextUrl);

  if (signedinApis.includes(req.nextUrl.pathname)) {
    if (user) {
      return NextResponse.next();
    }
    return new Response("Unauthorized", {
      status: 401,
      // headers: {
      //   "WWW-Authenticate": 'Basic realm="Login Required"',
      // },
    });
  }
}
