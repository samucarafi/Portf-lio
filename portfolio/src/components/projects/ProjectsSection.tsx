import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-green-400">Projetos</p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Alguns trabalhos.
            </h2>
          </div>

          <Link
            href="/projetos"
            className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-green-400"
          >
            <span className="hidden sm:inline">Ver todos</span>
            <span className="sm:hidden">Todos</span>

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
