import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  LayoutTemplate,
  ShoppingBag,
  Settings2,
  Megaphone,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Sites profissionais",
    description:
      "Sites modernos e responsivos para empresas, profissionais e negócios que querem apresentar seus serviços com mais profissionalismo.",
    features: [
      "Design personalizado",
      "Adaptado para celular",
      "Apresentação de serviços",
      "Formas de contato",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Lojas virtuais",
    description:
      "Lojas online completas para apresentar produtos, receber pedidos e oferecer uma experiência de compra simples para seus clientes.",
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Pagamento online",
      "Gestão de pedidos",
    ],
  },
  {
    icon: Settings2,
    title: "Sistemas personalizados",
    description:
      "Soluções desenvolvidas de acordo com a necessidade do seu negócio para organizar processos e facilitar tarefas.",
    features: [
      "Solução sob medida",
      "Processos personalizados",
      "Painéis administrativos",
      "Integrações",
    ],
  },
  {
    icon: Megaphone,
    title: "Landing Pages",
    description:
      "Páginas objetivas e estratégicas para divulgar um produto, serviço ou campanha e incentivar o visitante a entrar em contato.",
    features: [
      "Design focado no objetivo",
      "Estrutura responsiva",
      "Chamadas para ação",
      "Formulários de contato",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:pb-32 md:pt-36">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} />
          Voltar para início
        </Link>

        {/* Header */}
        <header className="mt-12 max-w-3xl md:mt-16">
          <span className="font-mono text-sm text-green-400">Serviços</span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Soluções para colocar sua ideia em prática.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
            Desenvolvo soluções digitais pensando no que realmente importa:
            apresentar seu negócio, facilitar seus processos e criar uma
            experiência melhor para seus clientes.
          </p>
        </header>

        {/* Services */}
        <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-[#0b0d0e] p-6 transition-colors hover:border-white/15 sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-green-400">
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <h2 className="mt-7 text-xl font-semibold text-white sm:text-2xl">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {service.description}
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-zinc-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Tem um projeto em mente?
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Vamos conversar sobre o que você precisa.
            </p>
          </div>

          <Link
            href="/contato"
            className="group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 text-sm font-semibold text-black transition-colors hover:bg-green-400 md:mt-0"
          >
            Entrar em contato
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
