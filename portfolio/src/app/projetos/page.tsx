import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20 md:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} />
          Voltar para início
        </Link>

        <header className="mt-10 max-w-3xl md:mt-14">
          <p className="text-sm font-medium text-green-400">Projetos</p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Trabalhos que saíram do papel.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Alguns dos projetos que desenvolvi para transformar ideias e
            necessidades em experiências digitais.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
