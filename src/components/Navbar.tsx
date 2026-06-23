"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      
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
        <div className="relative flex max-w-[120px] sm:max-w-[160px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] select-none">
          <div className="flex whitespace-nowrap gap-4 animate-waterflow py-1">
            
            {/* Primary Track */}
            <div className="flex gap-4 text-lg sm:text-xl font-black tracking-tighter uppercase">
              <span className="text-slate-900 dark:text-white">TALI</span>
              <span className="text-purple-600 dark:text-purple-400">TECH.</span>
            </div>

            {/* Loop Duplicate */}
            <div className="flex gap-4 text-lg sm:text-xl font-black tracking-tighter uppercase" aria-hidden="true">
              <span className="text-slate-900 dark:text-white">TALI</span>
              <span className="text-purple-600 dark:text-purple-400">TECH.</span>
            </div>

          </div>
        </div>

        {/* ==================== FLOATING PILL CAPSULE (DESKTOP) ==================== */}
        {/* Hiding links on mobile via `hidden md:flex`, maintaining old styles on desktop */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-black/5 dark:border-white/15 bg-white/60 dark:bg-slate-900/40 px-3 py-2 shadow-xl backdrop-blur-xl ring-1 ring-black/5 transition-colors duration-300 sm:gap-2">
          
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

        {/* ==================== COMPACT CONTROLS (MOBILE & TABLET) ==================== */}
        {/* Shows just the Theme Toggle and a Burger button on phone viewports */}
        <div className="flex md:hidden items-center gap-2 rounded-full border border-black/5 dark:border-white/15 bg-white/60 dark:bg-slate-900/40 p-1.5 shadow-xl backdrop-blur-xl ring-1 ring-black/5">
          
          {/* Mobile Theme Mode Toggle */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Theme Mode"
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm shadow-sm transition-all ${
              isDarkMode 
                ? "bg-gradient-to-b from-sky-400 to-blue-600 text-yellow-300" 
                : "bg-gradient-to-b from-amber-400 to-orange-500 text-white"
            }`}
          >
            <span>{isDarkMode ? "☀️" : "🌙"}</span>
          </button>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white transition-all active:scale-95"
          >
            {isMenuOpen ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Balanced spacer block to keep desktop layouts perfectly centered */}
        <div className="hidden md:block w-[120px] sm:w-[160px]" />
      </div>

      {/* ==================== FULLSCREEN MOBILE OVERLAY DRAWER ==================== */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-40 rounded-3xl border border-black/5 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 p-6 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsMenuOpen(false); // Closes drawer automatically on link selection
                  }}
                  className={`w-full rounded-2xl px-5 py-3.5 text-xs font-black tracking-widest uppercase transition-all ${
                    isActive
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}