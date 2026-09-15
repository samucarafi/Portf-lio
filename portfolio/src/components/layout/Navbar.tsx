import { Menu } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navigation = [
  { label: "Início", href: "#home" },
  { label: "Serviços", href: "#services" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 backdrop-blur-xl">
          <a
            href="#home"
            className="font-mono text-sm font-bold tracking-tight"
          >
            <span className="text-green-500">~/</span>
            samuel
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/samucarafi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="#contact"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white md:hidden"
          >
            <Menu size={20} />
          </button>
        </nav>
      </div>
    </header>
  );
}
