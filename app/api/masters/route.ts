import { NextResponse } from "next/server";
import { getMasters } from "@/src/services/masters";

export async function GET() {
  const masters = await getMasters();
  return NextResponse.json(masters);
}
