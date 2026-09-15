import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5521973402054?text=Olá%20Samuel!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0e] p-6 sm:p-8 md:p-10">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Content */}
            <div className="max-w-2xl">
              <span className="font-mono text-sm text-green-400">Contato</span>

              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-5xl">
                Vamos conversar sobre seu projeto?
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                Tem uma ideia, precisa melhorar sua presença online ou quer
                tirar um projeto do papel? Me conte um pouco sobre o que você
                precisa.
              </p>

              {/* Contact info */}
              <div className="mt-8 flex flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="mailto:samucarafino@gmail.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-green-400"
                >
                  <Mail size={16} />
                  samucarafino@gmail.com
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-green-500 px-6 font-semibold text-black transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_35px_rgba(34,197,94,0.18)]"
              >
                <MessageCircle size={19} />
                Falar pelo WhatsApp
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="mailto:samucarafino@gmail.com"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-6 font-semibold text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <Mail size={18} />
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
