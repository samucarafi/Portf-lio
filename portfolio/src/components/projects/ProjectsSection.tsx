import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm text-green-500">~/projects</p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Projetos selecionados
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Alguns dos projetos que desenvolvi, explorando diferentes
              tecnologias, problemas e arquiteturas.
            </p>
          </div>

          <a
            href="https://github.com/samucarafi"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-500 transition-colors hover:text-white"
          >
            ver todos no GitHub
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
