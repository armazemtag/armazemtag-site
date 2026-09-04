import { Bike, MapPin, Route } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { CourierCta } from "@/components/CourierCta";

export function Entregadores() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <Header />

      <section id="top" className="bg-tint">
        <div className="section-shell pt-[calc(var(--header-height)+2.5rem)] pb-10 text-center sm:pb-12">
          <span className="text-xs font-bold text-primary">Entregadores</span>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Entregas de bicicleta pelo seu bairro
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Foco em rotas menores: distância curta e proximidade com o estabelecimento.
          </p>
        </div>
      </section>

      <section className="section-shell pb-4">
        <CourierCta />
      </section>

      <section className="section-shell py-8">
        <SectionTitle>Entrega por perto</SectionTitle>
        <div className="grid gap-3 md:grid-cols-3">
          <article className="rounded-card bg-tint p-5">
            <Bike className="mb-5 size-11 rounded-full bg-background p-2.5 text-primary" />
            <h3 className="font-display text-xl font-extrabold">Distância curta</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Pedidos próximos ao comércio, feitos para caber em uma entrega rápida de bicicleta.
            </p>
          </article>
          <article className="rounded-card bg-soft p-5">
            <Route className="mb-5 size-11 rounded-full bg-background p-2.5 text-primary" />
            <h3 className="font-display text-xl font-extrabold">Rotas menores</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Percursos curtos e conhecidos, repetidos todos os dias com previsibilidade e
              agilidade.
            </p>
          </article>
          <article className="rounded-card bg-tint p-5">
            <MapPin className="mb-5 size-11 rounded-full bg-background p-2.5 text-primary" />
            <h3 className="font-display text-xl font-extrabold">Proximidade</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Ainda não temos um sistema para classificar a segurança das rotas, por isso
              priorizamos o mais perto de casa.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
