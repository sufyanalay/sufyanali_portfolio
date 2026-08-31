"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Invalid email or password");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-[20px] border border-border bg-surface p-8"
      >
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-heading font-medium text-sm">
            S
          </span>
          <span className="text-sm font-medium text-text-dark">
            Admin login
          </span>
        </div>

        <div className="space-y-3">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-[12px] border border-border bg-background px-4 py-3 text-[13px] text-text-dark placeholder:text-text-gray focus:outline-none focus:border-primary"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-[12px] border border-border bg-background px-4 py-3 text-[13px] text-text-dark placeholder:text-text-gray focus:outline-none focus:border-primary"
          />
        </div>

        {error && (
          <p className="mt-3 text-[12px] text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-5 w-full rounded-full bg-primary px-5 py-3 text-[13px] font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}