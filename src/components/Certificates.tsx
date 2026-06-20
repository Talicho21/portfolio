"use client";

import React from "react";
import Image from "next/image"; // Added for production-grade optimized asset rendering

export default function Certificates() {
  // 1. Added imagePath key targeting local public image assets
  const certifications = [
    { 
      id: 1, 
      issuer: "FUTURE INTERNS", 
      title: "FULL STACK WEB DEVELOPMENT", 
      imagePath: "/Fullstack.png", // Path inside your public/ folder
      pdfUrl: "/Full Stack Web Development.pdf" 
    },
    { 
      id: 2, 
      issuer: "AYNU LABS", 
      title: "PROMPT ENGINEERING MASTERY", 
      imagePath: "/prompt.png", 
      pdfUrl: "/Prompt Engineering Mastery.pdf" 
    },
    { 
      id: 3, 
      issuer: "FREECODECAMP", 
      title: "RESPONSIVE WEB DESIGN", 
      imagePath: "/responsive.png", 
      pdfUrl: "/Responsive Web Design.pdf" 
    },
    { 
      id: 4, 
      issuer: "UDACITY", 
      title: "PROGRAMMING FUNDAMENTALS", 
      imagePath: "/programming.png", 
      pdfUrl: "/Programming Fundamentals.pdf" 
    },
  ];

  const focusAreas = [
    { 
      title: "ADVANCED MERN STACK ARCHITECTURE", 
      description: "Mastering complex backend states, scalable API endpoints, and production-ready MongoDB structures.", 
      progress: 85 
    },
    { 
      title: "ARTIFICIAL INTELLIGENCE ENGINEERING", 
      description: "Deepening knowledge in large language model (LLM) fine-tuning, neural patterns, and cognitive system models.", 
      progress: 45 
    },
    { 
      title: "AI WORKFLOW AUTOMATION", 
      description: "Designing autonomous agent flows, prompt execution pipelines, and automated multi-tool integrations.", 
      progress: 60 
    },
    { 
      title: "CROSS-PLATFORM MOBILE APPLICATIONS", 
      description: "Engineering fluid mobile interfaces and adaptive native device layers with high performance metrics.", 
      progress: 30 
    },
  ];

  return (
    <section id="certificates" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden bg-transparent">
      {/* Ambience Backlight Blur */}
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[320px] w-[500px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl space-y-28">
        
        {/* ==================== SUB-SECTION 1: VERIFIED SKILLS ==================== */}
        <div>
          <div className="text-center mb-16 space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-purple-500 dark:text-purple-400">
              CREDENTIALS
            </p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase sm:text-6xl">
              Verified <span className="text-purple-500 dark:text-purple-400">Skills</span>
            </h2>
          </div>

          {/* Premium Grid Deck */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/20 hover:border-slate-300 dark:hover:border-slate-700/60 flex flex-col justify-between h-[340px]"
              >
                {/* Image Showcase Zone with Hover Actions Overlay */}
                <div className="relative flex h-44 w-full items-center justify-center bg-slate-950/40 overflow-hidden border-b border-slate-100 dark:border-slate-800/40">
                  {cert.imagePath ? (
                    <Image
                      src={cert.imagePath}
                      alt={`${cert.title} Certificate Preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-102"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-950 flex items-center justify-center text-slate-400">
                      No Preview
                    </div>
                  )}

                  {/* Interactive Trigger Mask */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100 z-10">
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-2xl bg-purple-600 px-5 py-3 text-xs font-bold tracking-widest text-white shadow-lg shadow-purple-900/30 transition duration-200 hover:bg-purple-500 hover:scale-105 active:scale-95"
                    >
                      VIEW PDF →
                    </a>
                  </div>
                </div>

                {/* Details Content Container */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-white dark:bg-transparent">
                  <div className="space-y-1.5">
                    <p className="text-[10px] font-bold tracking-widest text-purple-500 dark:text-purple-400 uppercase">
                      {cert.issuer}
                    </p>
                    <h3 className="text-sm font-black tracking-tight text-slate-800 dark:text-white uppercase leading-snug line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Operational Footer Badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      DIGITAL_CREDENTIAL
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== SUB-SECTION 2: CURRENT FOCUS & LEARNING ==================== */}
        <div className="relative pt-4">
          <div className="mb-12 text-center lg:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
              CURRENT FOCUS & LEARNING
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="group relative rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/20 hover:border-slate-300 dark:hover:border-slate-700/60"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="space-y-1.5">
                    <h4 className="text-base font-black tracking-tight text-slate-900 dark:text-white uppercase group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-200">
                      {area.title}
                    </h4>
                    <p className="text-xs italic tracking-wide text-slate-500 dark:text-slate-400">
                      {area.description}
                    </p>
                  </div>
                  <span className="text-xs font-bold tracking-wider text-purple-500 dark:text-purple-400">
                    {area.progress}%
                  </span>
                </div>

                <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-950 overflow-hidden p-[0.5px] border border-slate-200/30 dark:border-slate-800/50">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 dark:from-sky-400 dark:via-indigo-400 dark:to-purple-500 transition-all duration-1000 group-hover:brightness-110"
                    style={{ width: `${area.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-20 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500/60 max-w-2xl mx-auto leading-relaxed">
            "EDUCATION IS NOT THE LEARNING OF FACTS, BUT THE TRAINING OF THE MIND TO THINK."
          </p>
        </div>

      </div>
    </section>
  );
}