import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroHome from "@/assets/hero-home.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryGrid } from "@/components/CategoryGrid";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { FaqBlock } from "@/components/FaqBlock";
import { CourierCta } from "@/components/CourierCta";

export function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <Header />

      {/* Hero */}
      <section id="top" className="relative h-dvh overflow-hidden bg-[#f5efdf] max-md:h-[100svh]">
        <img
          src={heroHome}
          alt="Entregador chegando a um bairro com comércio local"
          width={1920}
          height={900}
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col justify-center px-5 pt-[calc(var(--header-height)+49px)] pb-16 text-center">
          <h1 className="font-display text-4xl font-extrabold leading-[.98] sm:text-6xl">
            O delivery local começa perto e chega rápido.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Conectamos você aos feirantes, restaurantes e comércios da região para uma entrega mais
            rápida, sustentável e humana.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-7 w-fit px-8 self-center">
            <Link to="/estabelecimentos">
              Começar pelo app <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <CategoryGrid />
      <div className="pt-2 sm:pt-4">
        <SolutionsGrid />
      </div>

      {/* FAQ + CTA */}
      <section className="section-shell grid gap-4 pb-10 lg:grid-cols-[.9fr_1.1fr]">
        <FaqBlock />
        <CourierCta />
      </section>

      <Footer />
    </main>
  );
}
