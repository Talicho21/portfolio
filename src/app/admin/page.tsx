import Link from "next/link";
import { prisma } from "@/lib/db";
import { projects as fallbackProjects } from "@/data/projects";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  let projects = fallbackProjects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    techStack: project.techStack,
    updatedAt: new Date().toISOString(),
  }));

  try {
    const dbProjects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (dbProjects.length > 0) {
      projects = dbProjects.map((project) => ({
        id: project.id,
        title: project.title,
        description: project.description,
        techStack: project.techStack,
        updatedAt: project.updatedAt.toISOString(),
      }));
    }
  } catch (error) {
    console.warn("Admin page falling back to local project data:", error);
  }

  return (
    <main className="min-h-screen px-4 py-12 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Portfolio dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-slate-300">
              Manage your featured projects and keep your public portfolio up to
              date.
            </p>
          </div>
          <Link
            href="/admin/new"
            className="rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            New project
          </Link>
        </header>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/30">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm text-slate-200">
              <thead className="bg-slate-950/70 text-slate-200">
                <tr>
                  <th className="px-6 py-4 font-semibold">Project</th>
                  <th className="px-6 py-4 font-semibold">Tech</th>
                  <th className="px-6 py-4 font-semibold">Updated</th>
                  <th className="px-6 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-800/60">
                    <td className="px-6 py-5">
                      <p className="font-semibold text-white">
                        {project.title}
                      </p>
                      <p className="mt-1 text-slate-300">
                        {project.description}
                      </p>
                    </td>
                    <td className="px-6 py-5 text-slate-300">
                      {project.techStack.join(", ")}
                    </td>
                    <td className="px-6 py-5 text-slate-300">
                      {new Date(project.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-2">
                        <button className="rounded-full border border-slate-700 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-100 hover:border-sky-400 hover:bg-slate-800">
                          Edit
                        </button>
                        <button className="rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-rose-100 hover:bg-rose-400/20">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
