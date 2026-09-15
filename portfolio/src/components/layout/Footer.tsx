import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm text-zinc-300">~/samuel</p>

          <p className="mt-1 text-xs text-zinc-600">Desenvolvedor Full Stack</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/samucarafi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition-colors hover:border-white/20 hover:text-white"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/samuelrafino/"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition-colors hover:border-white/20 hover:text-white"
          >
            <FaLinkedinIn size={15} />
          </a>
        </div>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Samuel Rafino
        </p>
      </div>
    </footer>
  );
}
