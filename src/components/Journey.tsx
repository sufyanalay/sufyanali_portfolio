type Milestone = {
  year: string;
  title: string;
  description: string;
  current?: boolean;
};

const MILESTONES: Milestone[] = [
  {
    year: "2021",
    title: "Started Computer Science",
    description: "Began the degree and fell for building software.",
  },
  {
    year: "2025",
    title: "Enterprise ASP.NET",
    description: "Delivered four enterprise systems at NS Solutions.",
  },
  {
    year: "Now",
    title: "Backend Engineer",
    description: "Building scalable backend systems at Berry Boost Software Solutions.",
    current: true,
  },
];

const STATS = [
  { value: "10+", label: "Production projects shipped" },
  { value: "2", label: "Companies delivered for" },
  { value: "4", label: "Enterprise systems delivered" },
  { value: "1+", label: "Years of experience" },
];

export default function Journey() {
  return (
    <section id="journey" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-28">
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-text-dark mb-14">
          From first commit to production systems
        </h2>

        {/* Horizontal roadmap */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4 mb-12">
          <div className="absolute left-2 top-2 hidden h-px w-[calc(100%-1rem)] bg-[#FDD9B8] sm:block" />

          {MILESTONES.map((m) => (
            <div key={m.year} className="relative">
              <span
                className={`relative z-10 inline-block h-4 w-4 rounded-full border-2 ${
                  m.current
                    ? "border-primary bg-primary"
                    : "border-primary bg-background"
                }`}
              />
              <p className="mt-2.5 font-heading text-sm font-medium text-primary">
                {m.year}
              </p>
              <p className="mt-1 text-[11.5px] font-medium text-text-dark">
                {m.title}
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-text-gray max-w-[200px]">
                {m.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats card */}
        <div className="grid grid-cols-2 gap-6 rounded-[20px] bg-surface p-6 shadow-sm sm:grid-cols-4 md:p-8">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl font-medium text-text-dark md:text-[26px]">
                {stat.value}
              </p>
              <p className="mt-1 text-[10.5px] text-text-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}