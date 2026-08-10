"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh(); // Refresh the router so the layout picks up changes if any
      } else {
        const data = await res.json();
        setError(data.error || "Invalid password");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f3f4fd] dark:bg-[#030712] px-4 sm:px-6 transition-colors duration-500">
      <div className="w-full max-w-md p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 shadow-2xl backdrop-blur-xl ring-1 ring-black/5">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-purple-600 dark:text-sky-300">
            Secure Access
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
            Admin Login
          </h1>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-100">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950/80 px-4 py-3 text-slate-900 dark:text-slate-100 outline-none transition focus:border-purple-600 dark:focus:border-sky-400"
              required
            />
          </label>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-purple-600 dark:bg-sky-400 px-5 py-3 text-sm font-semibold text-white dark:text-slate-950 transition hover:bg-purple-500 dark:hover:bg-sky-300 disabled:opacity-60"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}
