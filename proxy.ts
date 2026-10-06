import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["eng", "ur"];
const DEFAULT_LOCALE = "eng";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already starts with a supported locale
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect root and non-localized paths to default locale
  // E.g. / -> /eng, /about -> /eng/about, /donate -> /eng/donate
  const redirectUrl = new URL(
    `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`,
    request.url
  );
  return NextResponse.redirect(redirectUrl);
}

export const middleware = proxy;

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static, _next/image
     * - favicon.ico, icon.png, apple-icon.png
     * - sitemap.xml, robots.txt
     * - static asset folders (gallery, logo, fonts, projects, team, llms)
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|sitemap.xml|robots.txt|gallery|logo|fonts|projects|team|llms.txt|llms-full.txt).*)",
  ],
};
