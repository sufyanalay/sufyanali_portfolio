type Category = {
  label: string;
  items: string[];
};

const CATEGORIES: Category[] = [
  { label: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
  { label: "Backend", items: ["Node.js", "Express", "Socket.io"] },
 { label: ".NET", items: ["ASP.NET", "C#", "Entity Framework"] },
  { label: "Database", items: ["MongoDB", "SQL Server"] },
  { label: "Tools", items: ["Git", "Postman", "Figma"] },
  { label: "Cloud & Deploy", items: ["Vercel", "Render", "Cloudinary"] },
];

export default function Stack() {
  return (
    <section id="stack" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-28">
        <p className="text-[11px] font-medium tracking-[0.08em] text-primary mb-2">
          TECH STACK
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-text-dark mb-10">
          What I build with
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="rounded-[16px] border border-border bg-surface p-4 transition-colors hover:border-primary"
            >
              <p className="mb-2 text-[10px] uppercase tracking-[0.04em] text-text-gray">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-[10px] bg-[#F1EFE8] px-2.5 py-1 text-[10.5px] text-[#2C2C2A]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}