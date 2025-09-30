import { NextResponse } from "next/server";

export async function POST() {
  // Hapus cookie "token"
  const response = NextResponse.json({ message: "Logout berhasil" });
  response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

  return response;
}
