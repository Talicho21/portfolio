"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-purple-100/10 dark:border-white/5 bg-purple-50/10 dark:bg-slate-950/20 py-8 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400">
          © 2026 Yonatan Shitaye <span className="text-purple-600 dark:text-purple-400">•</span> All Rights Reserved
        </p>
      </div>
    </footer>
  );
}