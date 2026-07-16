import { NextResponse } from "next/server";
import { getMaster } from "@/src/services/masters";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const master = await getMaster(params.slug);
  if (!master) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(master);
}

export async function PUT() {
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

export async function DELETE() {
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
