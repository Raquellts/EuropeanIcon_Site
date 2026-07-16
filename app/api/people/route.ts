import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "People API - Not implemented" }, { status: 501 });
}
