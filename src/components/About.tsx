"use client";

import React from "react";

export default function About() {
  const badges = [
    { icon: "💻", label: ".CODING", color: "text-sky-600 dark:text-sky-400" },
    { icon: "🤝", label: "COUNSELING", color: "text-purple-600 dark:text-purple-400" },
    { icon: "🌱", label: "ENVIRONMENT", color: "text-emerald-600 dark:text-emerald-400" },
    { icon: "🔨", label: "BUILDING", color: "text-amber-600 dark:text-amber-500" },
    { icon: "📚", label: "READING", color: "text-slate-600 dark:text-slate-400" },
  ];

  // Professional metric counters array matching image_a17fc8.jpg & image_a17f90.png
  const stats = [
    { value: "5+", label: "PROJECTS" },
    { value: "27+", label: "LIVE REPOS" },
    { value: "2027", label: "GRAD YEAR (GC)", highlight: true },
  ];

  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-transparent">
      <div className="mx-auto max-w-7xl flex flex-col gap-12 lg:flex-row lg:items-center">
        
        {/* Left Column: Text Content, Badges, and Metrics */}
        <div className="flex flex-col items-start gap-6 lg:w-1/2">
          
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
              BIOGRAPHY
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase sm:text-5xl">
              Coding With <span className="text-purple-600 dark:text-purple-400">Precision</span>
            </h2>
          </div>

          <p className="text-sm md:text-base font-normal leading-relaxed text-slate-600 dark:text-slate-300">
            I am a <strong className="font-bold text-slate-900 dark:text-sky-400">Software Engineering student</strong> at Arba Minch University focused entirely on building efficient, high-performance full-stack logic. Beyond software systems, I am deeply passionate about applying technology to solve real-world <strong className="font-bold text-slate-900 dark:text-emerald-400">environmental problems</strong> while actively investing time in student counseling and open-source contributions.
          </p>

          {/* Interest Badges Group */}
          <div className="flex flex-wrap gap-3 max-w-md pt-2">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-100 px-4 py-2.5 shadow-sm dark:border-white/5 dark:bg-slate-800/60"
              >
                <span className="text-sm">{badge.icon}</span>
                <span className={`text-xs font-black tracking-wider uppercase ${badge.color}`}>
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

          {/* ==================== NEW METRIC COUNTERS SECTION ==================== */}
          <div className="w-full max-w-md pt-6 mt-2 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-white/5">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1 text-left select-none">
                <div className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  {stat.highlight ? (
                    <>
                      <span className="text-purple-600 dark:text-purple-400">20</span>
                      <span>27</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className={`text-[10px] font-black tracking-widest uppercase ${stat.highlight ? "text-purple-600 dark:text-purple-400" : "text-slate-400 dark:text-slate-500"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Academic Stats Card */}
        <div className="w-full max-w-xl lg:w-1/2">
          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-800 p-8 shadow-2xl dark:border-white/10 dark:bg-slate-900/60">
            
            <div className="mb-12 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300 dark:text-slate-400">
                  ACADEMIC LOG / ACTIVE
                </p>
              </div>
              <p className="text-[10px] font-bold tracking-wider text-purple-400">
                Feb 2023 - June 2027
              </p>
            </div>

            <div className="mb-12 space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                DEVELOPMENT & SOFTWARE ENGINEERING
              </p>
              <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                Bridging complex backend logic with smooth user experiences.
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-slate-300 dark:text-slate-400 uppercase">
                <span>DEGREE PROGRESS</span>
                <span className="text-purple-400">90%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700 dark:bg-slate-950">
                <div className="h-full rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 w-[95%]" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}