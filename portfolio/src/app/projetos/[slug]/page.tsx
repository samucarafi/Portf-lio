import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { projects } from "@/data/projects";
import { TechnologyIcon } from "@/components/projects/TechnologyIcon";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: `${project.title} | Samuel Rafino`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="font-mono text-sm text-green-500">error::404</p>

          <h1 className="mt-3 text-3xl font-bold">Projeto não encontrado</h1>

          <Link
            href="/#projects"
            className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
          >
            <ArrowLeft size={16} />
            Voltar para projetos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} />
          cd ~/projects
        </Link>

        <div className="mt-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-green-400">
              {project.category}
            </span>

            {project.featured && (
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                featured
              </span>
            )}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  project.status === "completed"
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}
              />

              {project.status === "completed" ? "completed" : "in-progress"}
            </span>
          </div>
          <p className="mt-10 font-mono text-xs text-zinc-600">
            $ open ./projects/{project.slug}
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-green-400"
              >
                Visitar projeto
                <ArrowUpRight size={17} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-200 transition-colors hover:bg-white/[0.06]"
              >
                <FaGithub size={16} />
                Código
              </a>
            )}
          </div>
        </div>

        <div className="relative mt-16 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
          <Image
            src={project.image}
            alt={`Preview do projeto ${project.title}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-green-500">
              ~/about
            </p>

            <h2 className="mt-3 text-3xl font-bold">Sobre o projeto</h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
              {project.longDescription}
            </p>
            <section className="mt-20 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                  desafio
                </span>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
                  solução
                </span>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {project.solution}
                </p>
              </div>

              <div className="rounded-2xl border border-green-400/10 bg-green-400/[0.03] p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-green-500/70">
                  resultado
                </span>

                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  {project.result}
                </p>
              </div>
            </section>
            <div className="mt-12">
              <p className="font-mono text-xs uppercase tracking-widest text-green-500">
                ~/features
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Principais funcionalidades
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <div className="mt-0.5 rounded-full bg-green-500/10 p-1 text-green-500">
                      <Check size={13} />
                    </div>

                    <span className="text-sm text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                stack
              </p>

              <div className="mt-5 space-y-3">
                {project.technologies.map((technology) => (
                  <div
                    key={technology.name}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="text-zinc-500">
                      <TechnologyIcon icon={technology.icon} size={17} />
                    </span>

                    {technology.name}
                  </div>
                ))}
              </div>

              <div className="my-6 h-px bg-white/5" />

              <div className="space-y-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink size={15} />
                      Live demo
                    </span>

                    <ArrowUpRight size={14} />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <FaGithub size={15} />
                      Repository
                    </span>

                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
