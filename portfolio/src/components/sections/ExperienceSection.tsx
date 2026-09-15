import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2025 — atual",
    role: "Desenvolvedor Full Stack",
    company: "Projetos independentes",
    description:
      "Desenvolvimento de sites, lojas virtuais e sistemas personalizados, desde o planejamento até a implementação.",
  },
  {
    period: "2024 — 2025",
    role: "Desenvolvimento Web",
    company: "Projetos e estudos",
    description:
      "Criação de aplicações e interfaces web para colocar conhecimentos em prática e construir experiências cada vez melhores.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Header */}
          <div>
            <span className="font-mono text-sm text-green-400">
              {/* experiência */}
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Construindo na prática.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-zinc-500">
              Uma trajetória construída através de projetos reais, aprendizado
              constante e desafios diferentes a cada novo trabalho.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute bottom-0 left-[5px] top-2 w-px bg-white/10" />

            <div className="space-y-10">
              {experiences.map((experience) => (
                <article
                  key={`${experience.period}-${experience.role}`}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full border-2 border-[#08090a] bg-green-400 ring-1 ring-green-400/30" />

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-mono text-xs text-green-400">
                        {experience.period}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                    {experience.description}
                  </p>

                  <a
                    href="#projects"
                    className="group mt-5 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-green-400"
                  >
                    Ver projetos relacionados
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
