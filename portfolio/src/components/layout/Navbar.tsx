"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-[#08090a]/85 px-4 shadow-lg backdrop-blur-xl md:px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-mono text-sm font-medium text-white"
          >
            ~/samuel
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-xs text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social + mobile button */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/samucarafi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-white/5 hover:text-white sm:flex"
            >
              <FaGithub size={16} />
            </a>

            <Link
              href="/contato"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-white/5 hover:text-white sm:flex"
            >
              <FaLinkedinIn size={15} />
            </Link>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition-colors hover:bg-white/5 md:hidden"
            >
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0e]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-2 flex gap-2 border-t border-white/10 p-2 sm:hidden">
              <a
                href="https://github.com/samucarafi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-white/[0.03] text-xs text-zinc-400"
              >
                <FaGithub size={15} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/samuelrafino/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
