import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Versão 1.0.0",
  description: "Página de versão com confete ao carregar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
