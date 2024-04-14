import { NextRequest, NextResponse } from "next/server";
import { getToken } from "./lib/token";

type Path = {
  [key: string]: boolean;
};

const publicOnlyPaths: Path = {
  "/login": true,
};

const privateOnlyPaths: Path = {
  "/posts/create": true,
  "/logout": true,
};

export const middleware = async (request: NextRequest) => {
  const token = getToken();
  console.log("token: ", token);

  if (token) {
    if (publicOnlyPaths[request.nextUrl.pathname]) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (privateOnlyPaths[request.nextUrl.pathname]) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
