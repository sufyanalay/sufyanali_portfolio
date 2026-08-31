type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sufyan turned a tangled manual process into a system our whole team now runs on.",
    name: "Client name",
    title: "Founder, company",
  },
  {
    quote:
      "Solid backend architecture, clear communication, and delivered faster than we expected.",
    name: "Client name",
    title: "CTO, company",
  },
  {
    quote:
      "Took full ownership of the feature from day one and shipped it on time without hand-holding.",
    name: "Client name",
    title: "Product manager, company",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-28">
        <p className="text-[11px] font-medium tracking-[0.08em] text-primary mb-2">
          TESTIMONIALS
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-text-dark mb-10">
          What clients say
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-[16px] border border-border bg-surface p-5"
            >
              <p className="text-2xl text-border leading-none mb-2">&ldquo;</p>
              <p className="text-[12px] leading-relaxed text-text-gray mb-4">
                {t.quote}
              </p>
              <p className="text-[11.5px] font-medium text-text-dark">
                {t.name}
              </p>
              <p className="text-[10px] text-text-gray">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}