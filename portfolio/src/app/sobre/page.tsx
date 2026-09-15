import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} />
          Voltar para início
        </Link>
      </div>

      <AboutSection />
      <ExperienceSection />
    </main>
  );
}
