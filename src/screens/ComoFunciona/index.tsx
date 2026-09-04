import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SolutionsGrid } from "@/components/SolutionsGrid";

export function ComoFunciona() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <Header />

      <section id="top" className="bg-tint">
        <div className="section-shell pt-[calc(var(--header-height)+2.5rem)] pb-10 text-center sm:pb-12">
          <span className="text-xs font-bold text-primary">Como funciona</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Uma solução para cada lado da entrega
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Clientes, comerciantes, entregadores e empreendedores: cada um tem o seu app.
          </p>
        </div>
      </section>

      <div className="pt-6 sm:pt-8">
        <SolutionsGrid />
      </div>

      <Footer />
    </main>
  );
}
