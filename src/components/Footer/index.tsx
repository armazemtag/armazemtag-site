import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logos/vertical/at-logo-vertical-branco.png";

const footerSections = [
  {
    title: "Saiba mais",
    links: [
      { label: "Quem somos", to: "/" },
      { label: "Como funciona", to: "/como-funciona" },
      { label: "Blog", to: null },
    ],
  },
  {
    title: "Categorias",
    links: [
      { label: "Mercados", to: "/estabelecimentos" },
      { label: "Padarias", to: "/estabelecimentos" },
      { label: "Frutas e bebidas", to: "/estabelecimentos" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Central de ajuda", to: "/suporte" },
      { label: "Fale conosco", to: "/suporte" },
      { label: "Privacidade", to: null },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-shell grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src={logo} alt="Pertinho" className="h-[88px] w-auto" />
          <p className="mt-3 max-w-xs text-sm opacity-75">
            Conectando comércios, consumidores e entregadores. Mais local, mais rápido, mais nosso.
          </p>
        </div>
        {footerSections.map(({ title, links }) => (
          <div key={title}>
            <h3 className="font-bold">{title}</h3>
            <ul className="mt-3 space-y-2 text-sm opacity-75">
              {links.map((link) => (
                <li key={link.label}>
                  {link.to ? <Link to={link.to}>{link.label}</Link> : <span>{link.label}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-70">
        © 2026 Armazém Tag Delivery. CNPJ 68.956.874/0001-50. Uma empresa Digitals Lab Venture
        Studio.
      </div>
    </footer>
  );
}
