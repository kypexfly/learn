import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await db.user.findMany();

    return NextResponse.json(users);
  } catch (err) {
    console.log(err);
    return NextResponse.json(err, { status: 400 });
  }
}
