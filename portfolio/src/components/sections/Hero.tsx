import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-20 md:pb-24">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.5)]" />

          <span className="text-xs text-zinc-500 sm:text-sm">
            Disponível para novos projetos
          </span>
        </div>

        <p className="mt-7 font-mono text-xs text-green-400 sm:text-sm">
          samuel@portfolio:~$
        </p>

        <h1 className="mt-4 max-w-4xl text-[2.65rem] font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-5xl md:text-7xl lg:text-8xl">
          Soluções digitais
          <br />
          <span className="text-zinc-500">para o seu negócio.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7 md:text-lg">
          Sites, lojas virtuais e sistemas personalizados para transformar
          ideias em experiências digitais profissionais.
        </p>

        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <Link
            href="/projetos"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 text-sm font-semibold text-black transition-colors hover:bg-green-400"
          >
            Ver projetos
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/contato"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 px-5 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            Entrar em contato
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-2 text-zinc-600 sm:mt-12">
          <ArrowDown size={14} />

          <span className="text-xs">Conheça meu trabalho</span>
        </div>
      </div>
    </section>
  );
}
