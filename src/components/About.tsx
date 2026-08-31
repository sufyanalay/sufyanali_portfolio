const CATEGORIES = [
  {
    label: "Healthcare",
    desc: "Provider directories, appointments",
  },
  {
    label: "Gaming",
    desc: "Wallets, transaction integrity",
  },
  {
    label: "Enterprise",
    desc: "Leasing, POS, distribution",
  },
  {
    label: "AI",
    desc: "Assistants in real workflows",
  },
  {
    label: "Automation",
    desc: "Replacing manual registers",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
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
            My first professional year was spent in the browser shipping
            React interfaces. Then I moved deeper into the stack: enterprise
            ASP.NET systems where a rounding error is a financial incident.
            From there I built full stack products end to end — an
            influencer marketplace, a realtime casino platform with an
            airtight wallet ledger, and a subscription SaaS with Stripe
            billing.
          </p>
          <p>
            Today I engineer the backend of Meditour Global, a medical
            tourism platform connecting patients with doctors and hospitals
            worldwide.
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