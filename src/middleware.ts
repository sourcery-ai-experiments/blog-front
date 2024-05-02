import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";

type Path = {
  [key: string]: boolean;
};

const publicOnlyPaths: Path = {
  // "/login": true,
};

const privateOnlyPaths: Path = {
  "/posts/create": true,
  "/logout": true,
};

export const middleware = async (request: NextRequest) => {
  const session = await getSession();

  if (session.id) {
    if (publicOnlyPaths[request.nextUrl.pathname]) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (privateOnlyPaths[request.nextUrl.pathname]) {
      return NextResponse.redirect(
        new URL(`/login?next=${request.nextUrl.pathname}`, request.url),
      );
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
