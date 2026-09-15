import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Rafino | Full Stack Developer",
  description:
    "Portfólio de Samuel Rafino, desenvolvedor Full Stack especializado na criação de aplicações web modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jetBrainsMono.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
