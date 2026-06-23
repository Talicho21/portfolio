"use client";

import React from "react";
import Image from "next/image";

export default function Testimony() {
  const testimonials = [
    {
      id: 1,
      name: "Behailu Gezaw",
      role: "Operations Manager",
      company: "Little App - Ethiopia",
      quote:
        "Yonatan is an exceptional developer who attacks full-stack engineering problems with a structured mindset. His work on automation engines and modern system architectures is always scalable and exceptionally clean.",
      image: "/Behayilu.png",
    },
   
   {
      id: 2,
      name: "ESERAEL Mohammed",
      role: "FOUNDER & MANAGER",
      company: "EXPRESS PHARMACEUTICAL WHOLESALE",
      quote:
        "Yonatan engineered a highly efficient pharmaceutical stock management system for us. His ability to blend fluid user interfaces with secure backend states and precision invoice layouts makes him an asset to any development squad.",
      image: "/Eserus.jpg",
    },
     {
      id: 3,
      name: "Asimamawu Admasu",
      role: "FULL-STACK DEVELOPER & TEAMMATE",
      company: "ENGINEERING COLLABORATOR",
      quote:
        "Working on complex systems alongside Yonatan was a breeze. He handles architecture layout under pressure, brings creative problem-solving to database tracking, and keeps the code clean.",
      image: "/Asme.jpg",
    },
  ];

  return (
    <section id="testimony" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden bg-transparent">
      {/* Background Ambience Spotlights */}
      <div className="absolute top-1/3 left-1/2 -z-10 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-2">
          <div className="h-1 w-12 bg-purple-500 mx-auto rounded-full mb-4" />
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase sm:text-6xl">
            Testimonials
          </h2>
        </div>

        {/* Flexible 3-Column Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/20 hover:border-slate-300 dark:hover:border-slate-700/60 backdrop-blur-md"
            >
              <div className="space-y-6">
                {/* Profile Image Frame with Adaptive Borders */}
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group-hover:border-purple-500/50 transition duration-300">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                    sizes="64px"
                    priority
                  />
                </div>

                {/* Quote Block */}
                <p className="text-xs md:text-sm italic tracking-wide text-slate-600 dark:text-slate-400 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Informational Profile Node Area */}
              <div className="space-y-1 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60">
                <h4 className="text-base font-black tracking-tight text-slate-900 dark:text-white uppercase group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-200">
                  {item.name}
                </h4>
                <p className="text-[10px] font-bold tracking-widest text-purple-600 dark:text-purple-400/80 uppercase">
                  {item.role}
                </p>
                <p className="text-[9px] font-medium tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}