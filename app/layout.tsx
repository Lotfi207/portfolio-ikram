import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ikram Lotfi — Développeur Full-Stack & Cloud",
  description: "Portfolio d’Ikram Lotfi, étudiant en Master Informatique spécialisé en développement full-stack et cloud.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body><header className="site-header"><a className="logo" href="#accueil">IL<span>.</span></a><nav aria-label="Navigation principale"><a href="#apropos">À propos</a><a href="#projets">Projets</a><a href="#competences">Compétences</a><a href="#parcours">Parcours</a></nav><a className="nav-contact" href="#contact">Contact <span>↗</span></a></header><main>{children}</main><footer><span>© 2026 Ikram Lotfi</span><span>Conçu avec soin à Lille</span><a href="#accueil">Retour en haut ↑</a></footer></body></html>;
}
