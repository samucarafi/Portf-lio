import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0e] transition-colors hover:border-white/15">
      <Link
        href={`/projetos/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-zinc-900"
      >
        <Image
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full border border-green-400/20 bg-black/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-green-400 backdrop-blur-md">
            Destaque
          </span>
        )}

        <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-colors group-hover:bg-green-500 group-hover:text-black">
          <ArrowUpRight size={16} />
        </span>
      </Link>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-green-400">
            Projeto
          </span>

          <span className="h-1 w-1 rounded-full bg-zinc-700" />

          <span className="text-xs text-zinc-600">
            {project.status === "completed" ? "Concluído" : "Em andamento"}
          </span>
        </div>

        <Link href={`/projetos/${project.slug}`}>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-green-400 sm:text-2xl">
            {project.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {project.description}
        </p>

        <Link
          href={`/projetos/${project.slug}`}
          className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-medium text-zinc-400 transition-colors hover:text-green-400"
        >
          Conhecer projeto
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
