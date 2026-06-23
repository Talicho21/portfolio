"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  // Infinite sliding marquee background text track
  const marqueeString =
    "YONATAN SHITAYE  •  SOFTWARE ENGINEER  •  DEVELOPER  •  ";

  // Array of dynamic client-attracting skills
  const skills = [
    "Full-Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "AI Integration Specialist",
  ];

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20 bg-transparent">
      {/* INLINE CSS FOR TRUE WATERFLOW LOOPING */}
      <style jsx global>{`
        @keyframes skillFlow {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-skillflow {
          animation: skillFlow 18s linear infinite;
        }
      `}</style>

      {/* Background Marquee Layer - Adaptive Opacity and Shading */}
      <div className="absolute inset-0 top-[30%] w-full h-fit pointer-events-none select-none z-0 opacity-[0.04] dark:opacity-[0.03]">
        <div className="animate-marquee-infinite text-[11vw] font-black tracking-tighter text-slate-900 dark:text-white uppercase whitespace-nowrap">
          <span>{marqueeString.repeat(5)}</span>
          <span>{marqueeString.repeat(5)}</span>
        </div>
      </div>

      {/* Main Foreground Interface Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center">
        {/* Left Column: Avatar Profile & Heading Content */}
        <div className="flex flex-col items-start gap-6 lg:w-1/2">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            {/* Professional Circular Avatar Container */}
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-sky-400/30 bg-slate-100 dark:bg-slate-900 shadow-xl ring-4 ring-slate-200/40 dark:ring-slate-950/40 sm:h-40 sm:w-40">
              <Image
                src="/MyImage.png"
                alt="Yonatan Shitaye"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Profile Context Headings */}
            <div className="space-y-1.5 overflow-hidden">
              {/* ENLARGED: Changed from text-xs to text-sm */}
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
                Software Engineering Student
              </p>

              <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-3xl uppercase leading-none">
                Yonatan Shitaye
              </h1>

              {/* ==================== MINIMIZED WATERFLOW SKILLS MARQUEE ==================== */}
              {/* ENLARGED: Adjusted h-5 to h-6 to accommodate slightly bigger text */}
              <div className="relative flex overflow-hidden max-w-[280px] sm:max-w-[320px] [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] select-none h-6">
                <div className="flex whitespace-nowrap gap-4 animate-skillflow py-0.5">
                  {/* Track 1 - ENLARGED: Changed text-sm to text-base */}
                  <div className="flex gap-4 text-base font-bold tracking-wide text-sky-600 dark:text-sky-300 uppercase">
                    {skills.map((skill, index) => (
                      <span
                        key={`track1-${index}`}
                        className="flex items-center gap-4"
                      >
                        <span>{skill}</span>
                        <span className="text-purple-500/60">•</span>
                      </span>
                    ))}
                  </div>

                  {/* Track 2 - ENLARGED: Changed text-sm to text-base */}
                  <div
                    className="flex gap-4 text-base font-bold tracking-wide text-sky-600 dark:text-sky-300 uppercase"
                    aria-hidden="true"
                  >
                    {skills.map((skill, index) => (
                      <span
                        key={`track2-${index}`}
                        className="flex items-center gap-4"
                      >
                        <span>{skill}</span>
                        <span className="text-purple-500/60">•</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ENLARGED: Short introduction blurb changed from text-base to text-lg md:text-xl */}
          <p className="max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mt-3">
            Building responsive, full-stack web applications using Next.js,
            TypeScript, Prisma, and Supabase. Focused on writing clean,
            dependable backend architectures and smooth user interfaces.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#contact"
              className="rounded-full bg-sky-500 dark:bg-sky-400 px-6 py-3 text-sm font-semibold text-white dark:text-slate-950 transition hover:bg-sky-600 dark:hover:bg-sky-300 shadow-md shadow-sky-500/10"
            >
              Let’s Talk
            </Link>
            <a
              href="/MyCV (3).pdf"
              className="rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-100 transition hover:border-sky-500 dark:hover:border-sky-400 hover:bg-slate-50 dark:hover:bg-slate-900"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* ==================== PROFESSIONAL BENTO GRID LAYOUT ==================== */}
        <div className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2 lg:w-1/2">
          {/* Card 1: Frontend Engineering */}
          <div className="group rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-800 dark:bg-slate-900/60 p-6 shadow-2xl transition-all duration-300 hover:border-sky-400/50">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                Frontend Engineering
              </p>
            </div>
            {/* ENLARGED: Changed text-sm to text-base */}
            <p className="text-base text-slate-200 dark:text-slate-300 leading-relaxed">
              Engineering interactive, scalable web applications utilizing{" "}
              <strong className="font-bold text-white">React</strong> and{" "}
              <strong className="font-bold text-white">Next.js</strong>, built
              on a strong foundation of modern{" "}
              <strong className="font-bold text-white">JavaScript</strong>,{" "}
              <strong className="font-bold text-white">HTML5</strong>,{" "}
              <strong className="font-bold text-white">CSS</strong>, and{" "}
              <strong className="font-bold text-white">Tailwind CSS</strong>.
            </p>
          </div>

          {/* Card 2: Backend Architectures */}
          <div className="group rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-800 dark:bg-slate-900/60 p-6 shadow-2xl transition-all duration-300 hover:border-purple-400/50">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 dark:text-purple-400">
                Backend Services
              </p>
            </div>
            {/* ENLARGED: Changed text-sm to text-base */}
            <p className="text-base text-slate-200 dark:text-slate-300 leading-relaxed">
              Designing high-performance, secure server logic and robust,
              production-ready REST APIs powered by{" "}
              <strong className="font-bold text-white">Node.js</strong> and{" "}
              <strong className="font-bold text-white">Express</strong>.
            </p>
          </div>

          {/* Card 3: Database Mastery */}
          <div className="group rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-800 dark:bg-slate-900/60 p-6 shadow-2xl transition-all duration-300 hover:border-emerald-400/50">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Database Solutions
              </p>
            </div>
            {/* ENLARGED: Changed text-sm to text-base */}
            <p className="text-base text-slate-200 dark:text-slate-300 leading-relaxed">
              Architecting secure data layers across relational systems like{" "}
              <strong className="font-bold text-white">MySQL</strong> and{" "}
              <strong className="font-bold text-white">PostgreSQL</strong>,
              alongside real-time serverless workflows via{" "}
              <strong className="font-bold text-white">Supabase</strong>.
            </p>
          </div>

          {/* Card 4: UI/UX & Responsive Design */}
          <div className="group rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-800 dark:bg-slate-900/60 p-6 shadow-2xl transition-all duration-300 hover:border-pink-500/50">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-400">
                UI/UX Design Plus
              </p>
            </div>
            {/* ENLARGED: Changed text-sm to text-base */}
            <p className="text-base text-slate-200 dark:text-slate-300 leading-relaxed">
              Crafting smooth user journeys, interactive wireframes, and
              responsive layout spacing that bridge the gap between clean code
              and beautiful interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
