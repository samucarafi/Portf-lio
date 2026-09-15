import {
  ArrowUpRight,
  LayoutTemplate,
  ShoppingBag,
  Settings2,
  Megaphone,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: LayoutTemplate,
    title: "Sites profissionais",
    description:
      "Uma presença digital moderna para apresentar sua empresa, seus serviços e transmitir confiança aos seus clientes.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Lojas virtuais",
    description:
      "Uma loja completa para apresentar seus produtos, receber pedidos e transformar sua presença online em vendas.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Sistemas personalizados",
    description:
      "Soluções desenvolvidas de acordo com a rotina do seu negócio para facilitar processos e economizar tempo.",
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Landing Pages",
    description:
      "Páginas estratégicas para divulgar produtos, serviços ou campanhas e transformar visitantes em clientes.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative border-t border-white/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <span className="font-mono text-sm text-green-400">// serviços</span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Soluções digitais para o seu negócio.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
            Cada projeto é pensado para resolver uma necessidade real, com um
            visual profissional e uma experiência simples para seus clientes.
          </p>
        </div>

        {/* Services */}
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative min-h-[280px] bg-[#0b0d0e] p-7 transition-colors duration-300 hover:bg-[#101413] sm:p-8 md:min-h-[310px] md:p-10"
              >
                {/* Number */}
                <span className="absolute right-7 top-7 font-mono text-xs text-zinc-700 md:right-10 md:top-10">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-300 group-hover:border-green-400/30 group-hover:bg-green-400/5 group-hover:text-green-400">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <div className="mt-10 max-w-md">
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-zinc-400 md:text-base md:leading-7">
                    {service.description}
                  </p>
                </div>

                {/* Link */}
                <div className="absolute bottom-7 left-7 flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 group-hover:text-green-400 md:bottom-10 md:left-10">
                  <span>Saiba mais</span>

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
