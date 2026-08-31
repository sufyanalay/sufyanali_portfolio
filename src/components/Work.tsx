import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-28">
        <p className="text-[11px] font-medium tracking-[0.08em] text-primary mb-2">
          FEATURED PROJECTS
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-text-dark mb-2">
          Eleven products, shipped.
        </h2>
        <p className="text-[12px] text-text-gray mb-10">
          Click a project to see the full case study — tech stack, role and results.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative overflow-hidden rounded-[20px] border border-border bg-surface"
            >
              <div className="relative h-44 w-full bg-zinc-800">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className={`absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[9px] ${
                    project.status === "Live"
                      ? "bg-[#E1F5EE] text-[#085041]"
                      : "bg-[#FAECE7] text-[#4A1B0C]"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-4">
                <p className="text-[13px] font-medium text-text-dark">
                  {project.name}
                </p>
                <p className="mt-1 text-[11px] text-text-gray">
                  {project.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#F1EFE8] px-2 py-0.5 text-[9px] text-[#444441]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}