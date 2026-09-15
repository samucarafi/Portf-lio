import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desenvolvimento sob medida",
    description:
      "Cada projeto é pensado de acordo com os objetivos e necessidades de quem está por trás do negócio.",
  },
  {
    icon: Sparkles,
    title: "Foco na experiência",
    description:
      "Interfaces bonitas, rápidas e fáceis de usar, tanto para quem acessa quanto para quem administra.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-white/10 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Intro */}
          <div>
            <span className="font-mono text-sm text-green-400">Sobre mim</span>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Tecnologia com propósito.
            </h2>
          </div>

          {/* Content */}
          <div>
            <div className="space-y-5 text-base leading-8 text-zinc-400 md:text-lg">
              <p>
                Sou Samuel Rafino, desenvolvedor apaixonado por criar
                experiências digitais que realmente fazem sentido para as
                pessoas e para os negócios.
              </p>

              <p>
                Gosto de transformar ideias em produtos digitais funcionais,
                modernos e bem pensados — desde uma página para apresentar uma
                empresa até sistemas completos para resolver necessidades
                específicas.
              </p>

              <p>
                Meu objetivo em cada projeto é unir um bom visual, facilidade de
                uso e uma solução que ajude o negócio a alcançar seus objetivos.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-green-400/20 hover:bg-white/[0.04]"
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="text-green-400"
                    />

                    <h3 className="mt-5 font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-green-400"
            >
              Vamos conversar sobre seu projeto
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
