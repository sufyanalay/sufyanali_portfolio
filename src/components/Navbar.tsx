"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-white/70 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-heading font-medium text-sm">
            S
          </span>
          <span className="hidden sm:inline text-sm font-medium text-text-dark">
            Sufyan Ali
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7 text-[13px] text-text-gray">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-text-dark transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Hire Me Button */}
          <Link
            href="#contact"
            className="hidden sm:inline-flex text-[13px] font-medium text-white bg-primary hover:opacity-90 transition-opacity px-5 py-2.5 rounded-full"
          >
            Hire me
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-text-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className="sr-only">Toggle menu</span>

            <div className="w-4 space-y-1">
              <span
                className={`block h-[1.5px] bg-current transition-transform ${
                  menuOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-transform ${
                  menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-5 text-sm text-text-gray bg-white/90 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-text-dark transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li className="pt-3">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-primary text-white rounded-full py-2.5 font-medium"
            >
              Hire me
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}