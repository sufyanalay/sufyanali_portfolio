const CATEGORIES = [
  { label: "Enterprise", desc: "Leasing, POS, distribution ERP" },
  { label: "Gaming", desc: "Wallets, transaction integrity" },
  { label: "AI", desc: "Assistants in real workflows" },
  { label: "SaaS", desc: "Subscriptions, dashboards, billing" },
  { label: "Web Platforms", desc: "Business sites, catalogs" },
];

export default function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-28">
        <p className="text-[11px] font-medium tracking-[0.08em] text-primary mb-2">
          ABOUT
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-text-dark mb-2">
          Who is Sufyan Ali?
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-[10px] bg-[#F1EFE8] text-[#444441] px-3 py-1 rounded-full">
            Lahore, Pakistan
          </span>
          <span className="text-[10px] bg-[#EEEDFE] text-[#26215C] px-3 py-1 rounded-full">
            Full stack · backend specialist
          </span>
          <span className="text-[10px] bg-[#E6F1FB] text-[#0C447C] px-3 py-1 rounded-full">
            MERN · ASP.NET · SQL Server
          </span>
        </div>

        <div className="max-w-2xl text-[13px] md:text-sm leading-loose text-text-gray space-y-4">
          <p>
            I started as a Computer Science student who wanted to understand
            how real products survive real users — and ended up building the
            systems behind them.
          </p>
          <p>
            My first professional year was spent in enterprise ASP.NET
            development at NS Solutions — designing SQL Server schemas and
            shipping leasing, POS and distribution systems where a rounding
            error is a financial incident.
          </p>
          <p>
            Today I&apos;m a Backend Engineer at Berry Boost Software
            Solutions, building scalable systems with Node.js, Express.js,
            TypeScript and MongoDB — REST APIs, authentication and ERP
            modules with a strong focus on performance and clean
            architecture.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="rounded-[16px] border border-border bg-surface p-4"
            >
              <p className="text-[11px] font-medium text-text-dark mb-1">
                {cat.label}
              </p>
              <p className="text-[9px] text-text-gray leading-snug">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}