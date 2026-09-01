import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import { verifyAdminToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  // Sirf logged-in admin hi upload kar sake
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  const isValid = token ? await verifyAdminToken(token) : false;

  if (!isValid) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ success: false, message: "No file provided" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "portfolio-projects" },
      (error, result) => {
        if (error || !result) return reject(error);
        resolve(result as { secure_url: string });
      }
    );
    uploadStream.end(buffer);
  });

  return NextResponse.json({ success: true, url: result.secure_url });
}