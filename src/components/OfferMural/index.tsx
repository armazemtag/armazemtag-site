import { ArrowRight, BadgePercent } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProductCrop } from "@/components/ProductCrop";

const offers: Array<[string, string, string, string]> = [
  ["Reino do Açaí", "Açaí na tigela", "R$ 19,90", "sprite-1"],
  ["Padaria Pão Quente", "Pães quentinhos agora", "R$ 7,50", "sprite-2"],
  ["Horta da Vila", "Cesta fresca do dia", "R$ 24,90", "sprite-3"],
  ["Frutas da Marlene", "Manga docinha chegou", "R$ 5,90", "sprite-4"],
  ["Marmitas da Ana", "Almoço caseiro", "R$ 12,90", "sprite-5"],
  ["Gás do Bruno", "Botijão com entrega", "R$ 115,00", "sprite-6"],
];

export function OfferMural() {
  return (
    <section id="ofertas" className="section-shell py-4">
      <div className="grid overflow-hidden rounded-section bg-tint lg:grid-cols-[.65fr_1.8fr]">
        <div className="flex flex-col justify-center p-7 lg:p-8">
          <BadgePercent className="mb-6 size-12 rounded-full bg-background p-3 text-primary" />
          <h2 className="font-display text-3xl font-extrabold">Mural de ofertas</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Ofertas e novidades dos comércios locais, atualizadas todos os dias.
          </p>
          <Button asChild variant="hero" className="mt-8 w-fit">
            <Link to="/estabelecimentos">
              Ver todas as ofertas <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {offers.map(([store, title, price, position]) => (
            <article key={title} className="bg-card p-3">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-bold">{store}</span>
                <span className="rounded-sm border border-primary/30 px-1.5 py-0.5 text-primary">
                  Chegou agora
                </span>
              </div>
              <div className="mt-2">
                <ProductCrop name={title} position={position} />
              </div>
              <h3 className="mt-2 font-display font-bold leading-tight">{title}</h3>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="font-bold text-primary">{price}</span>
                <span className="text-muted-foreground">♡ 128</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
