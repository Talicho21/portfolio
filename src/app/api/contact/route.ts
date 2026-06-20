import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await prisma.message.create({
      data: {
        name: String(body.name),
        email: String(body.email),
        message: String(body.message),
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save message." }, { status: 500 });
  }
}
