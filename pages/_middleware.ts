import { NextRequest, NextResponse } from "next/server";
const signedinApis = [
  "/createusereee"
];
export default function middleware(req: NextRequest) {
  if (signedinApis.includes(req.nextUrl.pathname)) {
    const token = req.cookies.EMPLOYEE_MANAGER;
    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
