import Image from "next/image";

export type ProjectCardProps = {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  imageUrl: string;
  className?: string; // Added to pass custom grid-span classes from the parent page
};

export default function ProjectCard({
  title,
  description,
  longDescription,
  techStack,
  githubUrl,
  liveUrl,
  imageUrl,
  className = "", // Defaults to empty if not provided
}: ProjectCardProps) {
  return (
    <article 
      className={`group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/30 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/60 ${className}`}
    >
      {/* 
        The grid container below dynamically handles layouts:
        - For a standard card (1 column): It remains stacked vertically.
        - For a featured card (2 columns): It snaps to a side-by-side layout on desktops.
      */}
      <div className={`grid grid-cols-1 w-full h-full ${className.includes("md:col-span-2") ? "md:grid-cols-2" : ""}`}>
        
        {/* Image Container */}
        <div className={`relative w-full overflow-hidden min-h-[224px] ${className.includes("md:col-span-2") ? "h-full" : "h-56"}`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col justify-between p-6 space-y-4">
          <div className="space-y-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300">
                Featured work
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white group-hover:text-sky-300 transition-colors">
                {title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{description}</p>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">{longDescription}</p>
          </div>

          <div className="space-y-4">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-400 hover:bg-slate-800"
                >
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}