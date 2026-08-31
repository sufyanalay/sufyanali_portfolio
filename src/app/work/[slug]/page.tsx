import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-16 bg-background">
      {/* Banner */}
      <div className="bg-[#1E2533] px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#work"
            className="text-[11px] text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to projects
          </Link>
          <h1 className="mt-3 font-heading text-2xl md:text-3xl font-medium text-white">
            {project.name}
          </h1>
          <p className="mt-1 text-[13px] text-zinc-400">{project.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14">
        {/* Quick facts */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-10">
          <div className="rounded-[14px] border border-border bg-surface p-3">
            <p className="text-[9px] text-text-gray">Role</p>
            <p className="text-[11.5px] font-medium text-text-dark">
              {project.role}
            </p>
          </div>
          <div className="rounded-[14px] border border-border bg-surface p-3">
            <p className="text-[9px] text-text-gray">Status</p>
            <p
              className={`text-[11.5px] font-medium ${
                project.status === "Live" ? "text-[#085041]" : "text-primary"
              }`}
            >
              {project.status}
            </p>
          </div>
          <div className="rounded-[14px] border border-border bg-surface p-3 col-span-2 sm:col-span-2">
            <p className="text-[9px] text-text-gray">Tech stack</p>
            <p className="text-[11.5px] font-medium text-text-dark">
              {project.tech.join(", ")}
            </p>
          </div>
        </div>

        {/* Auto-swiping gallery */}
        <ProjectGallery images={project.images} name={project.name} />

        {/* Description */}
        <div className="mt-10">
          <h2 className="font-heading text-lg font-medium text-text-dark mb-3">
            Overview
          </h2>
          <div className="space-y-3 text-[13px] leading-relaxed text-text-gray">
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-10">
          <h2 className="font-heading text-lg font-medium text-text-dark mb-3">
            Key features
          </h2>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-[13px] text-text-gray"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech chips */}
        <div className="mt-10 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#F1EFE8] px-3 py-1.5 text-[10.5px] text-[#2C2C2A]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Next project nav */}
        <div className="mt-14 flex items-center justify-between border-t border-border pt-6">
          <Link
            href="/#work"
            className="text-[11px] text-text-gray hover:text-text-dark transition-colors"
          >
            ← All projects
          </Link>
          <Link
            href={`/work/${nextProject.slug}`}
            className="text-[11px] text-text-gray hover:text-text-dark transition-colors"
          >
            {nextProject.name} →
          </Link>
        </div>
      </div>
    </div>
  );
}