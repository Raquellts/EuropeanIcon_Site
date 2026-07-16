import { NextResponse } from "next/server";
import { getEdition } from "@/src/services/eventos";

export async function GET(
  _request: Request,
  { params }: { params: { serieSlug: string; edicaoSlug: string } },
) {
  const edition = await getEdition(params.serieSlug, params.edicaoSlug);
  if (!edition) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(edition);
}

export async function PUT() {
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}

export async function DELETE() {
  return NextResponse.json({ message: "Not implemented" }, { status: 501 });
}
