"use client";

import React from "react";

export default function TechStack() {
  const frontendStack = [
    { name: "Next.js", style: "border-sky-500/20 text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/20" },
    { name: "React", style: "border-sky-500/20 text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/20" },
    { name: "TypeScript", style: "border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20" },
    { name: "Tailwind", style: "border-sky-500/20 text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/20" },
    { name: "JavaScript", style: "border-amber-500/20 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20" },
  ];

  const backendStack = [
    { name: "Node.js", style: "border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20" },
    { name: "Express", style: "border-slate-500/20 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950/20" },
    { name: "PostgreSQL", style: "border-sky-500/20 text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/20" },
    { name: "MySQL", style: "border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20" },
    { name: "MongoDB", style: "border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20" },
    { name: "Prisma ORM", style: "border-purple-500/20 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20" },
    { name: "Supabase", style: "border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20" },
    { name: "Java", style: "border-amber-500/20 text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/20" },
    { name: "C++", style: "border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/20" },
  ];

  const workflowTools = [
    { name: "GitHub", style: "border-slate-500/20 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950/20" },
    { name: "Vercel / Render", style: "border-slate-500/20 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950/20" },
    { name: "VS Code", style: "border-sky-500/20 text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/20" },
    { name: "Ngrok", style: "border-amber-500/20 text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/20" },
  ];

  return (
    <section id="tech" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden bg-slate-50 dark:bg-transparent">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-3 mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-sky-500 dark:text-sky-400">
            Stack Architecture
          </p>
          <h2 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl uppercase">
            Tech <span className="text-purple-500 dark:text-purple-400">Stack</span>
          </h2>
          <p className="text-xs font-medium tracking-[0.3em] text-slate-500 dark:text-slate-400 uppercase font-serif">
            The tools I use to build the future
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl backdrop-blur-xl transition duration-300 dark:border-slate-800 dark:bg-slate-900/20 hover:border-slate-300 dark:hover:border-slate-700/60">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xl">🌐</span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-white">
                Web Foundation
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {frontendStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition hover:scale-105 ${tech.style}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl backdrop-blur-xl transition duration-300 dark:border-slate-800 dark:bg-slate-900/20 hover:border-slate-300 dark:hover:border-slate-700/60">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xl">⚙️</span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-white">
                Backend & Data
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {backendStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition hover:scale-105 ${tech.style}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl backdrop-blur-xl transition duration-300 dark:border-slate-800 dark:bg-slate-900/20 hover:border-slate-300 dark:hover:border-slate-700/60 md:col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xl">🎨</span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-white">
                DevOps & Workflow
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {workflowTools.map((tech) => (
                <span
                  key={tech.name}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition hover:scale-105 ${tech.style}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}