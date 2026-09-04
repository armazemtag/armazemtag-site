import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryGrid } from "@/components/CategoryGrid";
import { MarketGrid } from "@/components/MarketGrid";
import { OfferMural } from "@/components/OfferMural";

export function Estabelecimentos() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <Header />

      <section id="top" className="bg-tint">
        <div className="section-shell pt-[calc(var(--header-height)+2.5rem)] pb-10 text-center sm:pb-12">
          <span className="text-xs font-bold text-primary">Estabelecimentos</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Feiras, mercados e comércios do seu bairro
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tudo o que você compra perto de casa: categorias, feiras, mercados e as ofertas do dia.
          </p>
        </div>
      </section>

      <CategoryGrid />
      <MarketGrid />
      <OfferMural />

      <Footer />
    </main>
  );
}
