"use client";

import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("SENDING");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "d74b76c7-3269-4108-9590-7dd69e66b574");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("SUCCESS");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Transmission error:", error);
      setStatus("ERROR");
    }
  }

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-transparent">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Heading & Social Handles */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
                GET IN TOUCH
              </p>
              {/* Made text dark slate in light mode and white in dark mode */}
              <h2 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase sm:text-6xl">
                LET'S BUILD.
              </h2>
              <p className="max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-300 pt-2">
                Have a project in mind, an opening on your team, or need a scalable architecture? 
                Drop a message and let's engineer something resilient together.
              </p>
            </div>

            {/* Social Channel Blocks */}
            <div className="space-y-3 pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                SOCIAL CHANNELS
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/yonatan-shitaye/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 transition hover:border-purple-500 dark:hover:border-purple-400/50 hover:text-purple-600 dark:hover:text-white shadow-sm dark:shadow-none"
                >
                  <span>in</span> LinkedIn
                </a>
               
                <a
                  href="mailto:yonatanshitaye@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 transition hover:border-purple-500 dark:hover:border-purple-400/50 hover:text-purple-600 dark:hover:text-white shadow-sm dark:shadow-none"
                >
                  Email
                </a>
                
                <a
                  href="https://t.me/Talicho1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 transition hover:border-purple-500 dark:hover:border-purple-400/50 hover:text-purple-600 dark:hover:text-white shadow-sm dark:shadow-none"
                >
                  🚀 Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Crisp Container */}
          <div className="rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 p-8 shadow-2xl dark:shadow-purple-950/10 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Yonatan Shitaye"
                  className="w-full rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/40 px-5 py-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30"
                />
              </div>

              {/* Email Address Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="yourname@example.com"
                  className="w-full rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/40 px-5 py-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30"
                />
              </div>

              {/* Message Input Container */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Let's build something..."
                  className="w-full resize-none rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/40 px-5 py-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30"
                />
              </div>

              {/* Submission Action CTA */}
              <button
                type="submit"
                disabled={status === "SENDING"}
                className="w-full rounded-2xl bg-purple-600 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99] shadow-lg shadow-purple-600/20 dark:shadow-purple-900/30"
              >
                {status === "IDLE" && "Send MESSAGE ✦"}
                {status === "SENDING" && "SENDING Message..."}
                {status === "SUCCESS" && "Message SENT SUCCESSFULLY! ✓"}
                {status === "ERROR" && "Message FAILED to SEND. RETRY ✕"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}