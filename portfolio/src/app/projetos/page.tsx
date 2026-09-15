import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:pb-32 md:pt-36">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} />
          Voltar para início
        </Link>

        <header className="mt-12 max-w-3xl md:mt-16">
          <p className="text-sm font-medium text-green-400">Projetos</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Trabalhos que saíram do papel.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Alguns dos projetos que desenvolvi para transformar ideias e
            necessidades em experiências digitais.
          </p>
        </header>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
