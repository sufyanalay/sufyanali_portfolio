import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import ProjectForm from "@/components/admin/ProjectForm";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  await connectDB();
  const project = await Project.findById(id).lean();

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1 className="font-heading text-xl font-medium text-text-dark mb-1">
        Edit project
      </h1>
      <p className="text-[13px] text-text-gray mb-6">{project.name}</p>
      <ProjectForm
        mode="edit"
        projectId={id}
        initialData={{
          slug: project.slug,
          name: project.name,
          tagline: project.tagline,
          status: project.status,
          role: project.role,
          tech: project.tech?.join(", "),
          description: project.description?.join("\n"),
          features: project.features?.join("\n"),
          images: project.images,
          liveUrl: project.liveUrl,
          githubUrl: project.githubUrl,
        }}
      />
    </div>
  );
}