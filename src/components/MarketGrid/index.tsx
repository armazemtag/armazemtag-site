import { ArrowRight, MapPin, Store } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import marketImg from "@/assets/market.svg";

const marketCards = ["Feira 8 de Maio", "Feira do Centro", "Mercado Municipal"];

export function MarketGrid() {
  return (
    <section id="feiras" className="section-shell py-8">
      <div className="overflow-hidden rounded-section bg-tint p-4 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.55fr_.65fr]">
          <div className="grid gap-3 sm:grid-cols-3">
            {marketCards.map((name, index) => (
              <article
                key={name}
                className="overflow-hidden rounded-card border border-border bg-card shadow-soft"
              >
                <div className="relative">
                  <img
                    src={marketImg}
                    alt={name}
                    width={1536}
                    height={900}
                    loading="lazy"
                    className={`h-44 w-full object-cover ${index === 1 ? "object-center" : index === 2 ? "object-right" : "object-left"}`}
                  />
                  <span className="absolute left-2 top-2 rounded-sm bg-status px-2 py-1 text-[10px] font-bold text-status-foreground">
                    Aberta
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="font-display font-bold">{name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Produtos frescos direto do produtor
                  </p>
                  <p className="mt-3 flex items-center gap-1 text-[10px] text-muted-foreground">
                    <MapPin className="size-3" /> No seu bairro
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="flex flex-col justify-center p-3 sm:p-6">
            <Store className="mb-5 size-11 rounded-full bg-background p-2.5 text-primary" />
            <h2 className="font-display text-3xl font-extrabold">Feiras e mercados</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Compre direto do pequeno, fortaleça a comunidade e receba frutas, legumes, peixes e
              muito mais fresquinhos.
            </p>
            <Button asChild variant="hero" className="mt-6 w-fit">
              <Link to="/estabelecimentos">
                Explorar feiras <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
