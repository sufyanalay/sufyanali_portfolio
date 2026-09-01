"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ProjectFormData = {
  slug: string;
  name: string;
  tagline: string;
  status: "Live" | "In progress";
  role: string;
  tech: string;
  description: string;
  features: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
};

type Props = {
  mode: "create" | "edit";
  projectId?: string;
  initialData?: Partial<ProjectFormData>;
};

export default function ProjectForm({ mode, projectId, initialData }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<ProjectFormData>({
    slug: initialData?.slug ?? "",
    name: initialData?.name ?? "",
    tagline: initialData?.tagline ?? "",
    status: initialData?.status ?? "Live",
    role: initialData?.role ?? "",
    tech: initialData?.tech ?? "",
    description: initialData?.description ?? "",
    features: initialData?.features ?? "",
    images: initialData?.images ?? [],
    liveUrl: initialData?.liveUrl ?? "",
    githubUrl: initialData?.githubUrl ?? "",
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof ProjectFormData>(key: K, value: ProjectFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function slugify(text: string) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError("");

    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (data.success) {
        uploadedUrls.push(data.url);
      } else {
        setError(`Failed to upload ${file.name}`);
      }
    }

    update("images", [...form.images, ...uploadedUrls]);
    setUploading(false);
    e.target.value = "";
  }

  function removeImage(index: number) {
    update(
      "images",
      form.images.filter((_, i) => i !== index)
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      slug: form.slug || slugify(form.name),
      name: form.name,
      tagline: form.tagline,
      status: form.status,
      role: form.role,
      tech: form.tech.split(",").map((t) => t.trim()).filter(Boolean),
      description: form.description.split("\n").map((d) => d.trim()).filter(Boolean),
      features: form.features.split("\n").map((f) => f.trim()).filter(Boolean),
      images: form.images,
      liveUrl: form.liveUrl || undefined,
      githubUrl: form.githubUrl || undefined,
    };

    const url = mode === "create" ? "/api/projects" : `/api/projects/${projectId}`;
    const method = mode === "create" ? "POST" : "PUT";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setSaving(false);

    if (!data.success) {
      setError(data.message || "Something went wrong");
      return;
    }

    router.push("/admin/projects");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      {error && (
        <p className="rounded-[10px] bg-red-50 px-4 py-2.5 text-[12.5px] text-red-700">
          {error}
        </p>
      )}

      <div>
        <label className="block text-[12px] font-medium text-text-dark mb-1.5">
          Project name
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="e.g. Casino Gaming Platform"
          className="w-full rounded-[12px] border border-border bg-surface px-4 py-2.5 text-[13px] text-text-dark focus:outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-[12px] font-medium text-text-dark mb-1.5">
          Slug (URL) — leave blank to auto-generate from name
        </label>
        <input
          type="text"
          value={form.slug}
          onChange={(e) => update("slug", e.target.value)}
          placeholder="e.g. casino-gaming-platform"
          className="w-full rounded-[12px] border border-border bg-surface px-4 py-2.5 text-[13px] text-text-dark focus:outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-[12px] font-medium text-text-dark mb-1.5">
          Tagline
        </label>
        <input
          type="text"
          required
          value={form.tagline}
          onChange={(e) => update("tagline", e.target.value)}
          placeholder="e.g. Realtime multi-game platform"
          className="w-full rounded-[12px] border border-border bg-surface px-4 py-2.5 text-[13px] text-text-dark focus:outline-none focus:border-primary"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[12px] font-medium text-text-dark mb-1.5">
            Status
          </label>
          <select
            value={form.status}
            onChange={(e) => update("status", e.target.value as "Live" | "In progress")}
            className="w-full rounded-[12px] border border-border bg-surface px-4 py-2.5 text-[13px] text-text-dark focus:outline-none focus:border-primary"
          >
            <option value="Live">Live</option>
            <option value="In progress">In progress</option>
          </select>
        </div>
        <div>
          <label className="block text-[12px] font-medium text-text-dark mb-1.5">
            Role
          </label>
          <input
            type="text"
            required
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            placeholder="e.g. Full stack (solo)"
            className="w-full rounded-[12px] border border-border bg-surface px-4 py-2.5 text-[13px] text-text-dark focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-[12px] font-medium text-text-dark mb-1.5">
          Tech stack (comma separated)
        </label>
        <input
          type="text"
          value={form.tech}
          onChange={(e) => update("tech", e.target.value)}
          placeholder="React, Node.js, MongoDB, Socket.io"
          className="w-full rounded-[12px] border border-border bg-surface px-4 py-2.5 text-[13px] text-text-dark focus:outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-[12px] font-medium text-text-dark mb-1.5">
          Description (one paragraph per line)
        </label>
        <textarea
          rows={4}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          placeholder="First paragraph...&#10;Second paragraph..."
          className="w-full resize-none rounded-[12px] border border-border bg-surface px-4 py-2.5 text-[13px] text-text-dark focus:outline-none focus:border-primary"
        />
      </div>

      <div>
        <label className="block text-[12px] font-medium text-text-dark mb-1.5">
          Key features (one per line)
        </label>
        <textarea
          rows={3}
          value={form.features}
          onChange={(e) => update("features", e.target.value)}
          placeholder="Realtime game state engine&#10;Wallet ledger with transaction integrity"
          className="w-full resize-none rounded-[12px] border border-border bg-surface px-4 py-2.5 text-[13px] text-text-dark focus:outline-none focus:border-primary"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[12px] font-medium text-text-dark mb-1.5">
            Live URL (optional)
          </label>
          <input
            type="url"
            value={form.liveUrl}
            onChange={(e) => update("liveUrl", e.target.value)}
            placeholder="https://..."
            className="w-full rounded-[12px] border border-border bg-surface px-4 py-2.5 text-[13px] text-text-dark focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-[12px] font-medium text-text-dark mb-1.5">
            GitHub URL (optional)
          </label>
          <input
            type="url"
            value={form.githubUrl}
            onChange={(e) => update("githubUrl", e.target.value)}
            placeholder="https://github.com/..."
            className="w-full rounded-[12px] border border-border bg-surface px-4 py-2.5 text-[13px] text-text-dark focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Images */}
      <div>
        <label className="block text-[12px] font-medium text-text-dark mb-1.5">
          Images (upload as many as you want, 4–5 recommended)
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          disabled={uploading}
          className="block w-full text-[12px] text-text-gray file:mr-3 file:rounded-full file:border-0 file:bg-[#F1EFE8] file:px-4 file:py-2 file:text-[12px] file:font-medium file:text-text-dark"
        />
        {uploading && (
          <p className="mt-2 text-[11.5px] text-text-gray">Uploading...</p>
        )}

        {form.images.length > 0 && (
          <div className="mt-3 grid grid-cols-4 gap-2">
            {form.images.map((url, i) => (
              <div key={url} className="relative h-20 rounded-[10px] overflow-hidden group">
                <Image src={url} alt={`Image ${i + 1}`} fill sizes="100px" className="object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 h-5 w-5 rounded-full bg-black/60 text-white text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving || uploading}
          className="rounded-full bg-primary px-6 py-2.5 text-[13px] font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {saving ? "Saving..." : mode === "create" ? "Create project" : "Save changes"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/projects")}
          className="text-[13px] text-text-gray hover:text-text-dark transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}