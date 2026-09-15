import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/projects";
import { TechnologyIcon } from "./TechnologyIcon";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0e] transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
      {/* Preview */}
      <Link
        href={`/projetos/${project.slug}`}
        className="relative block aspect-video overflow-hidden bg-zinc-900"
      >
        <Image
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full border border-green-400/20 bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-green-400 backdrop-blur-md">
            destaque
          </span>
        )}

        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all duration-300 group-hover:border-green-400/30 group-hover:bg-green-400 group-hover:text-black">
          <ArrowUpRight size={17} />
        </span>
      </Link>

      {/* Content */}
      <div className="p-6 md:p-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-green-400">
            projeto
          </span>

          <span className="h-1 w-1 rounded-full bg-zinc-700" />

          <span className="text-xs text-zinc-500">
            {project.status === "completed" ? "Concluído" : "Em andamento"}
          </span>
        </div>

        <Link href={`/projetos/${project.slug}`}>
          <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-green-400">
            {project.title}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {project.description}
        </p>

        {/* Case */}
        <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              desafio
            </span>

            <p className="mt-1 text-sm leading-6 text-zinc-400">
              {project.problem}
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              solução
            </span>

            <p className="mt-1 text-sm leading-6 text-zinc-400">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology.name}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/8 bg-white/[0.02] px-2.5 py-1.5 text-[11px] text-zinc-500"
            >
              <TechnologyIcon icon={technology.icon} size={13} />
              {technology.name}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span className="rounded-md border border-white/8 bg-white/[0.02] px-2.5 py-1.5 text-[11px] text-zinc-600">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/projetos/${project.slug}`}
          className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-green-400"
        >
          <span>Conhecer projeto</span>

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}
