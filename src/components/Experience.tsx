type Role = {
  company: string;
  role: string;
  duration: string;
  current?: boolean;
  dotColor: string;
  description: string;
  highlights?: string;
};

const ROLES: Role[] = [
  {
    company: "Berry Boost Software Solutions, Lahore",
    role: "MERN Stack Backend Engineer",
    duration: "2026 – Present",
    current: true,
    dotColor: "bg-primary",
    description:
      "Currently building scalable backend systems using Node.js, Express.js, TypeScript and MongoDB. Developing enterprise applications, REST APIs, authentication systems and ERP modules with a strong focus on performance, scalability and clean architecture.",
    highlights:
      "Node.js • Express.js • TypeScript • MongoDB • REST APIs • JWT Authentication • ERP Development",
  },
  {
    company: "NS Solutions, Sialkot",
    role: "ASP.NET Developer",
    duration: "2025 – 2026",
    dotColor: "bg-secondary",
    description:
      "Developed enterprise ERP applications using ASP.NET, C#, SQL Server and Entity Framework. Worked on leasing, distribution and business management systems while building secure backend modules and database-driven applications.",
    highlights:
      "ASP.NET • C# • SQL Server • Entity Framework • ERP Systems • Enterprise Applications",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        {/* Section Heading */}
        <p className="mb-2 text-[11px] font-medium tracking-[0.08em] text-primary">
          EXPERIENCE
        </p>

        <h2 className="mb-2 font-heading text-3xl font-medium text-text-dark md:text-4xl">
          Professional Journey
        </h2>

        <p className="mb-12 max-w-2xl text-sm leading-7 text-text-gray">
          My journey started with enterprise .NET development and has evolved
          into building scalable backend applications using the MERN Stack,
          modern APIs and cloud-ready architectures.
        </p>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl pl-8">
          {/* Vertical Line */}
          <div className="absolute left-[12px] top-2 bottom-2 w-[2px] rounded-full bg-border" />

          <div className="space-y-8">
            {ROLES.map((role) => (
              <div key={role.company} className="relative">
                {/* Timeline Dot */}
                <span
                  className={`absolute -left-8 top-2 h-5 w-5 rounded-full border-4 border-background ${role.dotColor}`}
                />

                {/* Card */}
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-text-dark">
                        {role.role}
                      </h3>

                      <p className="mt-1 text-sm text-primary">
                        {role.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-text-gray">
                        {role.duration}
                      </span>

                      {role.current && (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-medium text-green-700">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-text-gray">
                    {role.description}
                  </p>

                  {role.highlights && (
                    <div className="mt-5 rounded-xl bg-background p-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        Technologies
                      </p>

                      <p className="mt-2 text-sm leading-6 text-text-gray">
                        {role.highlights}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}