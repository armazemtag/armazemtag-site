import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqBlock } from "@/components/FaqBlock";

export function Suporte() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <Header />

      <section id="top" className="bg-tint">
        <div className="section-shell pt-[calc(var(--header-height)+2.5rem)] pb-10 text-center sm:pb-12">
          <span className="text-xs font-bold text-primary">Suporte</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Central de ajuda
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tire suas dúvidas sobre entregas, bairros atendidos, pagamentos e parcerias.
          </p>
        </div>
      </section>

      <section className="section-shell pb-10">
        <FaqBlock />
      </section>

      <Footer />
    </main>
  );
}
