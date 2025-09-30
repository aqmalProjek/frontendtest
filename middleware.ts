import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log('token',token);
  
  const { pathname } = request.nextUrl;

  // 🔹 Jika ke halaman login & sudah punya token → redirect ke home
  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 🔹 Jika ke halaman protected & belum ada token → redirect ke login
  if (pathname === "/" && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Tentukan route mana saja yang dipantau middleware
export const config = {
  matcher: ["/", "/login"], // bisa ditambah /dashboard, dll
};
