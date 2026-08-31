const SERVICES = [
  "Web development",
  "Backend and APIs",
  "Enterprise software",
  "Healthcare platforms",
  "Admin panels",
  "Business automation",
  "Database design",
  "SaaS development",
];

export default function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-28">
        <p className="text-[11px] font-medium tracking-[0.08em] text-primary mb-2">
          SERVICES
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-text-dark mb-10">
          What I take on
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {SERVICES.map((service, i) => (
            <div
              key={service}
              className="rounded-[16px] border border-border bg-surface p-4"
            >
              <p className="text-[9px] font-medium text-zinc-300">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[11.5px] font-medium text-text-dark">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}