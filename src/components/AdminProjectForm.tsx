"use client";

import { FormEvent, useState } from "react";

export default function AdminProjectForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    longDescription: "",
    techStack: "",
    githubUrl: "",
    liveUrl: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          techStack: form.techStack
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to create project.");
      }

      setStatus({ type: "success", message: "Project created successfully." });
      setForm({
        title: "",
        description: "",
        longDescription: "",
        techStack: "",
        githubUrl: "",
        liveUrl: "",
        imageUrl: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">
            Admin
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Create a new project
          </h2>
        </div>
        <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-100">
          Dashboard
        </span>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 lg:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-100">
          Title
          <input
            value={form.title}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, title: e.target.value }))
            }
            required
            className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-100">
          Image URL
          <input
            value={form.imageUrl}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, imageUrl: e.target.value }))
            }
            required
            className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-100 lg:col-span-2">
          Short Description
          <textarea
            value={form.description}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, description: e.target.value }))
            }
            required
            rows={3}
            className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-100 lg:col-span-2">
          Long Description
          <textarea
            value={form.longDescription}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, longDescription: e.target.value }))
            }
            required
            rows={4}
            className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-100">
          Tech Stack (comma separated)
          <input
            value={form.techStack}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, techStack: e.target.value }))
            }
            required
            className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-100">
          GitHub URL
          <input
            value={form.githubUrl}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, githubUrl: e.target.value }))
            }
            className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-100">
          Live URL
          <input
            value={form.liveUrl}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, liveUrl: e.target.value }))
            }
            className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
          />
        </label>

        <div className="lg:col-span-2 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Saving..." : "Save project"}
          </button>
          {status && (
            <p
              className={`rounded-full border px-4 py-2 text-sm ${status.type === "success" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100" : "border-rose-400/30 bg-rose-400/10 text-rose-100"}`}
            >
              {status.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
