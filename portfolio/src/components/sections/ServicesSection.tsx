import Link from "next/link";
import {
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
      "Presença digital moderna para apresentar sua empresa e seus serviços.",
  },
  {
    icon: ShoppingBag,
    title: "Lojas virtuais",
    description:
      "Estruturas completas para apresentar produtos e vender pela internet.",
  },
  {
    icon: Settings2,
    title: "Sistemas personalizados",
    description:
      "Soluções sob medida para organizar processos e facilitar tarefas.",
  },
  {
    icon: Megaphone,
    title: "Landing Pages",
    description:
      "Páginas objetivas para divulgar produtos, serviços ou campanhas.",
  },
];

export function ServicesSection() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-green-400">Serviços</p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              O que posso fazer por você.
            </h2>
          </div>

          <Link
            href="/servicos"
            className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-green-400"
          >
            Ver todos
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href="/servicos"
                className="group rounded-xl border border-white/10 bg-[#0b0d0e] p-5 transition-colors hover:border-white/15 hover:bg-white/[0.03]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-green-400">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-zinc-500">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-xs text-zinc-600 transition-colors group-hover:text-green-400">
                  Saiba mais
                  <ArrowUpRight size={13} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
