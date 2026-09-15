import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section id="projects" className="border-t border-white/10 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-green-400">Projetos</p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Alguns trabalhos.
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-500 md:text-base">
              Projetos desenvolvidos para transformar ideias em experiências
              digitais.
            </p>
          </div>

          <Link
            href="/projetos"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-green-400"
          >
            Ver todos
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
