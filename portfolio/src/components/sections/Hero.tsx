import { ArrowDown, ArrowUpRight, Circle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "66px 66px",
          }}
        />

        <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-green-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32">
        {/* Status */}
        <div className="mb-10 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>

          <span className="font-mono text-sm text-zinc-400">
            disponível para novos projetos
          </span>
        </div>

        {/* Terminal */}
        <div className="mb-5 font-mono text-sm text-green-400 md:text-base">
          samuel@portfolio:~$
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Soluções digitais
          <br />
          <span className="text-zinc-500">para o seu negócio.</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg md:text-xl md:leading-8">
          Desenvolvo sites, lojas virtuais e sistemas personalizados para
          empresas que querem ter uma presença digital profissional e oferecer
          uma experiência melhor para seus clientes.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-green-500 px-6 font-semibold text-black transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_35px_rgba(34,197,94,0.18)]"
          >
            Ver projetos
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-6 font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            Entrar em contato
          </a>
        </div>

        {/* Bottom hint */}
        <div className="mt-20 flex items-center gap-3 text-zinc-600">
          <ArrowDown size={15} />

          <span className="font-mono text-xs">explore</span>

          <Circle size={4} fill="currentColor" />
        </div>
      </div>
    </section>
  );
}
