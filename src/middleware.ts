import { NextRequest, NextResponse } from "next/server";

type Path = {
  [key: string]: boolean;
};

const publicOnlyPaths: Path = {
  "/login": true,
};

const privateOnlyPaths: Path = {
  "/posts/create": true,
};

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get(process.env.TOKEN_COOKIE_NAME)?.value;
  console.log("hi: ", token);

  if (token) {
    if (publicOnlyPaths[request.nextUrl.pathname]) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (privateOnlyPaths[request.nextUrl.pathname]) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
};

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
