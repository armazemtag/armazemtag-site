import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";

const solutions = [
  {
    title: "App do Cliente",
    text: "Compre em poucos cliques e receba rapidinho.",
    to: "/como-funciona",
  },
  {
    title: "App do Parceiro",
    text: "Gerencie seu negócio e receba pedidos.",
    to: "/estabelecimentos",
  },
  {
    title: "App do Entregador",
    text: "Mais entregas feitas, trabalho com flexibilidade.",
    to: "/entregadores",
  },
  {
    title: "Área do Empreendedor",
    text: "Acompanhe vendas e gestão em um só lugar.",
    to: "/como-funciona",
  },
] as const;

export function SolutionsGrid() {
  return (
    <section id="solucoes" className="section-shell pb-10 sm:pb-14">
      <SectionTitle>Nossas soluções para todos</SectionTitle>
      <div className="grid gap-3 md:grid-cols-4 mt-1 sm:mt-2">
        {solutions.map(({ title, text, to }, i) => (
          <article
            key={title}
            className={`min-h-48 rounded-card p-5 ${i % 2 === 0 ? "bg-tint" : "bg-soft"}`}
          >
            <span className="text-xs font-bold text-primary">SOLUÇÃO 0{i + 1}</span>
            <h3 className="mt-5 font-display text-xl font-extrabold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            <Link
              to={to}
              className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-primary"
            >
              Conhecer agora <ArrowRight className="size-3" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
