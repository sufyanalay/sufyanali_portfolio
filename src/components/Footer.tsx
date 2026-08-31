import Link from "next/link";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/engsufyanali",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/engsufyanali",
  },
  {
    label: "Email",
    href: "mailto:engsufyanali@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row md:px-8">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-white">
            S
          </span>

          <div>
            <h3 className="text-sm font-semibold text-text-dark">
              Sufyan Ali
            </h3>
            <p className="text-xs text-text-gray">
              Full Stack Software Engineer
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-gray">
          {QUICK_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-text-dark"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <ul className="flex items-center gap-6 text-sm text-text-gray">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="transition-colors hover:text-primary"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-text-gray sm:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} Sufyan Ali. All rights reserved.
          </p>

          <p>
            Designed &amp; Developed by{" "}
            <span className="font-medium text-text-dark">
              Sufyan Ali
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}