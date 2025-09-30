import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Daftar route yang butuh login
const protectedRoutes = ["/"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Jika user belum login dan mencoba akses halaman protected
  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Jika user sudah login tapi coba buka /login → redirect ke home
  if (request.nextUrl.pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Tentukan route mana yang dipantau middleware
export const config = {
  matcher: ["/", "/login"],
};
