import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.title || !body.description || !body.longDescription || !body.imageUrl) {
      return NextResponse.json({ error: "Title, description, longDescription, and imageUrl are required." }, { status: 400 });
    }

    const project = await prisma.project.create({
      data: {
        title: String(body.title),
        description: String(body.description),
        longDescription: String(body.longDescription),
        techStack: Array.isArray(body.techStack) ? body.techStack : [],
        githubUrl: body.githubUrl ? String(body.githubUrl) : null,
        liveUrl: body.liveUrl ? String(body.liveUrl) : null,
        imageUrl: String(body.imageUrl),
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project." }, { status: 500 });
  }
}
