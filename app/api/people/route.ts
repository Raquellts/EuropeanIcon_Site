import { NextResponse } from "next/server";
import { getPeople } from "@/src/services/people";

export async function GET() {
  const people = await getPeople();
  return NextResponse.json(people);
}
