import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Certificates from "@/components/Certificates";
import Testimony from "@/components/Testimony";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer"; // Imported the customized footer
import { projects as fallbackProjects, ProjectFallback } from "@/data/projects";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let displayProjects: ProjectFallback[] = fallbackProjects;
  
  try {
    const dbProjects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    
    if (dbProjects.length > 0) {
      displayProjects = dbProjects.map(project => ({
        id: project.id,
        title: project.title,
        description: project.description,
        longDescription: project.longDescription,
        techStack: project.techStack,
        githubUrl: project.githubUrl,
        liveUrl: project.liveUrl,
        imageUrl: project.imageUrl,
      }));
    }
  } catch (error) {
    console.warn("Home page falling back to local project data:", error);
  }
  return (
    /* 
      - bg-slate-50 shifts to bg-[#030712] (your deep dark theme) when .dark is active
      - text-slate-900 shifts to text-slate-100 automatically
      - transition-colors duration-500 guarantees a smooth visual blend
    */
<main className="min-h-screen bg-[#f3f4fd] text-[#1e1b4b] dark:bg-[#030712] dark:text-slate-100 transition-colors duration-500 selection:bg-purple-200">      <Hero />

      {/* 2. Glassmorphic Biography Section */}
      <About />
    
      {/* 3. Tech Stack Section */}
      <TechStack />

      {/* 4. Verified Skills & Certificates Section */}
      <Certificates />

      {/* 5. Recommendations & Testimony Section */}
      <Testimony />

      {/* 6. Projects Portfolio Section */}
      <section id="projects" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-600 dark:text-sky-300 transition-colors">
              Projects
            </p>
            {/* text-slate-900 in light mode, text-white in dark mode */}
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl transition-colors">
              Selected portfolio work
            </h2>
          </div>

          {/* 
            Bento Grid Wrapper:
            Changes layout to a flexible 3-column system on large screens.
          */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {displayProjects.map((project, index) => {
              // The first project (index 0) becomes the flagship Bento item
              const isFlagship = index === 0;
              const gridClass = isFlagship 
                ? "md:col-span-2 xl:col-span-3" 
                : "md:col-span-1";

              return (
                <ProjectCard 
                  key={project.id} 
                  {...project} 
                  className={gridClass} 
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Contact Form Section */}
      <ContactForm />
    </main>
  );
}