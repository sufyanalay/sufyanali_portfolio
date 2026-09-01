import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  await connectDB();
  const projects = await Project.find().sort({ order: 1, createdAt: -1 }).lean();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-xl font-medium text-text-dark">
            Projects
          </h1>
          <p className="text-[13px] text-text-gray">
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          href="/admin/projects/new"
          className="rounded-full bg-primary px-5 py-2.5 text-[13px] font-medium text-white hover:opacity-90 transition-opacity"
        >
          + Add project
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-[16px] border border-dashed border-border p-10 text-center">
          <p className="text-[13px] text-text-gray">
            No projects yet. Add your first one.
          </p>
        </div>
      ) : (
        <div className="rounded-[16px] border border-border bg-surface overflow-hidden">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-border text-[11px] text-text-gray">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium hidden sm:table-cell">
                  Tech
                </th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={String(project._id)}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-text-dark">
                      {project.name}
                    </p>
                    <p className="text-[11px] text-text-gray">
                      {project.tagline}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] ${
                        project.status === "Live"
                          ? "bg-[#E1F5EE] text-[#085041]"
                          : "bg-[#FAECE7] text-[#4A1B0C]"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell text-text-gray text-[11.5px]">
                    {project.tech?.slice(0, 3).join(", ")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/projects/${project._id}/edit`}
                        className="text-[12px] text-secondary hover:underline"
                      >
                        Edit
                      </Link>
                      <DeleteProjectButton id={String(project._id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}