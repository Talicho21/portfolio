"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navLinks = [
    { id: "home", label: "HOME", href: "#" },
    { id: "about", label: "ABOUT", href: "#about" },
    { id: "tech", label: "TECH", href: "#tech" },
    { id: "certificates", label: "CERTS", href: "#certificates" },
    { id: "testimony", label: "TESTIMONY", href: "#testimony" },
    { id: "projects", label: "PROJECT", href: "#projects" },
    { id: "contact", label: "CONTACT", href: "#contact" },
  ];

  // Synchronize theme changes to the document root element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [isDarkMode]);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      
      {/* INLINE CSS INJECTION */}
      <style jsx global>{`
        @keyframes waterflow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-waterflow {
          animation: waterflow 2s linear infinite; 
        }
      `}</style>

      <div className="mx-auto max-w-7xl flex items-center justify-between">
        
        {/* ==================== MOVABLE WATERFLOW BRANDING ==================== */}
        <div className="relative flex max-w-[160px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] select-none">
          <div className="flex whitespace-nowrap gap-4 animate-waterflow py-1">
            
            {/* Primary Track */}
            <div className="flex gap-4 text-xl font-black tracking-tighter uppercase">
              <span className="text-slate-900 dark:text-white">TALI</span>
              <span className="text-purple-600 dark:text-purple-400">TECH.</span>
            </div>

            {/* Loop Duplicate */}
            <div className="flex gap-4 text-xl font-black tracking-tighter uppercase" aria-hidden="true">
              <span className="text-slate-900 dark:text-white">TALI</span>
              <span className="text-purple-600 dark:text-purple-400">TECH.</span>
            </div>

          </div>
        </div>

        {/* ==================== FLOATING PILL CAPSULE ==================== */}
        <nav className="flex items-center gap-1 rounded-full border border-black/5 dark:border-white/15 bg-white/60 dark:bg-slate-900/40 px-3 py-2 shadow-xl backdrop-blur-xl ring-1 ring-black/5 transition-colors duration-300 sm:gap-2">
          
          {/* Navigation Mapping */}
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`rounded-full px-4 py-2 text-[11px] font-black tracking-widest transition-all duration-300 ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                    : "text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          {/* Theme Mode Toggle Button */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Theme Mode"
            className={`relative ml-2 flex h-8 w-8 items-center justify-center rounded-full text-sm shadow-md transition-all duration-500 hover:scale-110 active:scale-95 ${
              isDarkMode 
                ? "bg-gradient-to-b from-sky-400 to-blue-600 text-yellow-300 shadow-blue-500/40" 
                : "bg-gradient-to-b from-amber-400 to-orange-500 text-white shadow-orange-500/40"
            }`}
          >
            <span className="transition-transform duration-500 select-none">
              {isDarkMode ? "☀️" : "🌙"}
            </span>
          </button>

        </nav>

        {/* Balanced spacer block to keep everything perfectly centered */}
        <div className="hidden lg:block w-[160px]" />
      </div>
    </header>
  );
}