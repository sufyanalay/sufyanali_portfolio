"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO: Connect to backend API later
    setStatus("sent");
  }

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="rounded-[20px] bg-[#1E2533] p-8 md:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="mb-4 font-heading text-2xl font-medium text-white md:text-3xl">
                Let&apos;s build something amazing together
              </h2>

              <p className="mb-6 max-w-sm text-[13px] leading-relaxed text-zinc-400">
                Open to new projects, freelance work and full-time roles.
                Reach out and I&apos;ll get back to you within a day.
              </p>

              <div className="space-y-3 text-[13px] text-zinc-300">
                <p>
                  <a
                    href="mailto:engsufyanali@gmail.com"
                    className="transition-colors hover:text-white"
                  >
                    engsufyanali@gmail.com
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+923406011203"
                    className="transition-colors hover:text-white"
                  >
                    +92 340 6011203
                  </a>
                </p>

                <p className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com/in/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>

                  <span>•</span>

                  <a
                    href="https://github.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>

            {/* Right */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:border-primary focus:outline-none"
              />

              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:border-primary focus:outline-none"
              />

              <textarea
                required
                rows={5}
                placeholder="Tell me about your project"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:border-primary focus:outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-5 py-3 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
              >
                {status === "sent" ? "Message sent ✓" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}