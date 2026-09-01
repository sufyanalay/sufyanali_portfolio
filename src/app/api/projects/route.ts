import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { verifyAdminToken } from "@/lib/auth";

// GET — sab projects list karo
export async function GET() {
  await connectDB();

  const projects = await Project.find().sort({
    order: 1,
    createdAt: -1,
  });

  return NextResponse.json({
    success: true,
    projects,
  });
}

// POST — naya project banao (sirf admin)
export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  const isValid = token ? await verifyAdminToken(token) : false;

  if (!isValid) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  try {
    await connectDB();

    const body = await request.json();

    const project = await Project.create(body);

    return NextResponse.json(
      {
        success: true,
        project,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("CREATE PROJECT ERROR:", error);

    // Duplicate slug
    if (error?.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: "A project with this slug already exists.",
        },
        { status: 409 }
      );
    }

    // Mongoose validation error
    if (error?.name === "ValidationError") {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to create project",
      },
      { status: 500 }
    );
  }
}