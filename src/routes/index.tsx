import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgePercent,
  Bike,
  ChevronDown,
  Clock3,
  Code2,
  HeartHandshake,
  MapPin,
  Menu,
  PackageCheck,
  Search,
  ShoppingBasket,
  Store,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/hero-neighborhood.jpg.asset.json";
import productAsset from "@/assets/product-grid.jpg.asset.json";
import marketAsset from "@/assets/market.jpg.asset.json";
import courierAsset from "@/assets/courier.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pertinho | Delivery do seu bairro" },
      { name: "description", content: "Feiras, mercados, refeições e produtos locais entregues rapidamente na sua casa." },
      { property: "og:title", content: "Pertinho | Delivery do seu bairro" },
      { property: "og:description", content: "O delivery local que conecta você ao melhor do seu bairro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories: Array<[string, string]> = [
  ["Açaí", "sprite-1"], ["Padaria", "sprite-2"], ["Mercado", "sprite-3"],
  ["Frutas", "sprite-4"], ["Refeições", "sprite-5"], ["Gás", "sprite-6"],
];

const offers: Array<[string, string, string, string]> = [
  ["Reino do Açaí", "Açaí na tigela", "R$ 19,90", "sprite-1"],
  ["Padaria Pão Quente", "Pães quentinhos agora", "R$ 7,50", "sprite-2"],
  ["Horta da Vila", "Cesta fresca do dia", "R$ 24,90", "sprite-3"],
  ["Frutas da Marlene", "Manga docinha chegou", "R$ 5,90", "sprite-4"],
  ["Marmitas da Ana", "Almoço caseiro", "R$ 12,90", "sprite-5"],
  ["Gás do Bruno", "Botijão com entrega", "R$ 115,00", "sprite-6"],
];

const marketCards = ["Feira 8 de Maio", "Feira do Centro", "Mercado Municipal"];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-6xl px-4 pt-4">
        <nav className="flex h-14 items-center justify-between rounded-full border border-border bg-background/90 px-5 shadow-nav backdrop-blur-xl">
          <a href="#top" className="font-display text-2xl font-extrabold text-primary"><span className="text-accent-foreground">=</span>pertinho</a>
          <div className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a href="#feiras" className="hover:text-primary">Ver eventos</a>
            <a href="#feiras" className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Feirões</a>
            <a href="#solucoes" className="hover:text-primary">Para parceiros</a>
            <a href="#ofertas" className="hover:text-primary">Ofertas</a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex"><UserRound /> Entrar</Button>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu"><Menu /></Button>
          </div>
        </nav>
      </header>

      <section id="top" className="relative min-h-[760px] pt-28 sm:min-h-[810px]">
        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/90 px-3 py-1.5 text-xs font-bold text-primary"><MapPin className="size-3.5" /> delivery local</div>
          <h1 className="font-display text-4xl font-extrabold leading-[.98] sm:text-6xl">O delivery local começa perto e chega rápido.</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">Conectamos você aos feirantes, restaurantes e comércios da região para uma entrega mais rápida, sustentável e humana.</p>
          <Button asChild variant="hero" size="xl" className="mt-6"><a href="#ofertas">Começar pelo app <ArrowRight /></a></Button>
        </div>
        <img src={heroAsset.url} alt="Entregador chegando a um bairro com comércio local" width={1920} height={900} className="absolute inset-x-0 bottom-0 h-[530px] w-full object-cover object-bottom sm:h-[600px]" />
      </section>

      <section className="section-shell -mt-1 pb-8 pt-6">
        <SectionTitle>Categorias em destaque</SectionTitle>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {categories.map(([name, position]) => (
            <a key={name} href="#ofertas" className="group overflow-hidden rounded-card border border-border bg-card p-2 text-center shadow-soft transition hover:-translate-y-1 hover:border-primary/30">
              <ProductCrop name={name} position={position} />
              <span className="mt-2 block text-xs font-bold sm:text-sm">{name}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="feiras" className="section-shell py-8">
        <div className="overflow-hidden rounded-section bg-tint p-4 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.55fr_.65fr]">
            <div className="grid gap-3 sm:grid-cols-3">
              {marketCards.map((name, index) => (
                <article key={name} className="overflow-hidden rounded-card border border-border bg-card shadow-soft">
                  <div className="relative"><img src={marketAsset.url} alt={name} width={1536} height={900} loading="lazy" className={`h-44 w-full object-cover ${index === 1 ? "object-center" : index === 2 ? "object-right" : "object-left"}`} /><span className="absolute left-2 top-2 rounded-sm bg-status px-2 py-1 text-[10px] font-bold text-status-foreground">Aberta</span></div>
                  <div className="p-3"><h3 className="font-display font-bold">{name}</h3><p className="mt-1 text-xs text-muted-foreground">Produtos frescos direto do produtor</p><p className="mt-3 flex items-center gap-1 text-[10px] text-muted-foreground"><MapPin className="size-3" /> No seu bairro</p></div>
                </article>
              ))}
            </div>
            <div className="flex flex-col justify-center p-3 sm:p-6"><Store className="mb-5 size-11 rounded-full bg-background p-2.5 text-primary" /><h2 className="font-display text-3xl font-extrabold">Feiras e mercados</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Compre direto do pequeno, fortaleça a comunidade e receba frutas, legumes, peixes e muito mais fresquinhos.</p><Button asChild variant="hero" className="mt-6 w-fit"><a href="#ofertas">Explorar feiras <ArrowRight /></a></Button></div>
          </div>
        </div>
      </section>

      <section id="ofertas" className="section-shell py-4">
        <div className="grid overflow-hidden rounded-section bg-tint lg:grid-cols-[.65fr_1.8fr]">
          <div className="flex flex-col justify-center p-7 lg:p-8"><BadgePercent className="mb-6 size-12 rounded-full bg-background p-3 text-primary" /><h2 className="font-display text-3xl font-extrabold">Mural de ofertas</h2><p className="mt-3 text-sm text-muted-foreground">Ofertas e novidades dos comércios locais, atualizadas todos os dias.</p><Button asChild variant="hero" className="mt-8 w-fit"><a href="#como-funciona">Ver todas as ofertas <ArrowRight /></a></Button></div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {offers.map(([store, title, price, position]) => (
              <article key={title} className="bg-card p-3"><div className="flex items-center justify-between text-[10px]"><span className="font-bold">{store}</span><span className="rounded-sm border border-primary/30 px-1.5 py-0.5 text-primary">Chegou agora</span></div><div className="mt-2"><ProductCrop name={title} position={position} /></div><h3 className="mt-2 font-display font-bold leading-tight">{title}</h3><div className="mt-2 flex items-center justify-between text-xs"><span className="font-bold text-primary">{price}</span><span className="text-muted-foreground">♡ 128</span></div></article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section-shell py-10">
        <SectionTitle>Como funciona</SectionTitle>
        <div className="grid gap-3 md:grid-cols-4">
          {[[Search,"Escolha o que precisa","Encontre categorias e comércios."],[ShoppingBasket,"Adicione ao carrinho","Produtos do seu bairro numa entrega."],[Bike,"Acompanhe o pedido","Entrega rápida por feirantes e parceiros."],[PackageCheck,"Receba rapidinho","No mesmo dia, sem complicação."]].map(([Icon,title,text], index) => {
            const IconComponent = Icon as typeof Search;
            return <article key={title as string} className="flex gap-4 rounded-card border border-border p-4"><span className="font-display text-xs font-bold text-primary">0{index + 1}</span><div><IconComponent className="mb-3 size-7 text-primary"/><h3 className="font-display text-sm font-bold">{title as string}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text as string}</p></div></article>
          })}
        </div>
      </section>

      <section className="section-shell pb-10">
        <SectionTitle>Por que escolher o Pertinho?</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[[Clock3,"Entrega local e rápida","Do seu bairro para sua casa."],[HeartHandshake,"Fomento ao bairro","Seu dinheiro fica na comunidade."],[Store,"Mais negócio","Mais vendas e renda local."],[Code2,"Tecnologia simples","Conexão de quem faz acontecer."]].map(([Icon,title,text]) => { const IconComponent = Icon as typeof Clock3; return <article key={title as string} className="flex gap-3 rounded-card border border-border p-4"><IconComponent className="size-7 shrink-0 text-primary"/><div><h3 className="font-display text-sm font-bold">{title as string}</h3><p className="mt-1 text-xs text-muted-foreground">{text as string}</p></div></article>})}
        </div>
      </section>

      <section id="solucoes" className="section-shell pb-10">
        <SectionTitle>Nossas soluções para todos</SectionTitle>
        <div className="grid gap-3 md:grid-cols-4">
          {[["App do Cliente","Compre em poucos cliques e receba rapidinho."],["App do Parceiro","Gerencie seu negócio e receba pedidos."],["App do Entregador","Mais entregas feitas, trabalho com flexibilidade."],["Área do Empreendedor","Acompanhe vendas e gestão em um só lugar."]].map(([title,text],i) => <article key={title} className={`min-h-48 rounded-card p-5 ${i % 2 === 0 ? "bg-tint" : "bg-soft"}`}><span className="text-xs font-bold text-primary">SOLUÇÃO 0{i+1}</span><h3 className="mt-5 font-display text-xl font-extrabold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p><a href="#top" className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-primary">Conhecer agora <ArrowRight className="size-3"/></a></article>)}
        </div>
      </section>

      <section className="section-shell grid gap-4 pb-10 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-section border border-border p-6"><h2 className="font-display text-2xl font-extrabold">Perguntas frequentes</h2><div className="mt-5 divide-y divide-border">{["Como funcionam as entregas?","Quais bairros são atendidos?","Quais formas de pagamento?","Como ser parceiro?"].map((q)=><details key={q} className="group py-3"><summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">{q}<ChevronDown className="size-4 transition group-open:rotate-180"/></summary><p className="pt-2 text-xs text-muted-foreground">Tudo é resolvido pelo app, com acompanhamento simples e suporte local.</p></details>)}</div></div>
        <div className="grid overflow-hidden rounded-section bg-tint sm:grid-cols-[1fr_.85fr]"><div className="flex flex-col justify-center p-7"><h2 className="font-display text-3xl font-extrabold">O bairro é seu.<br/>A entrega é nossa.</h2><p className="mt-3 text-sm text-muted-foreground">Mais do que um app de entrega, um movimento de conexão e crescimento local.</p><Button asChild variant="hero" className="mt-6 w-fit"><a href="#top">Conhecer mais <ArrowRight /></a></Button></div><img src={courierAsset.url} alt="Entregador local com caixa de compras" width={1024} height={768} loading="lazy" className="h-full min-h-64 w-full object-cover"/></div>
      </section>

      <footer className="bg-primary text-primary-foreground"><div className="section-shell grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-5"><div className="lg:col-span-2"><div className="font-display text-3xl font-extrabold">=pertinho</div><p className="mt-3 max-w-xs text-sm opacity-75">Conectando comércios, consumidores e entregadores. Mais local, mais rápido, mais nosso.</p></div>{[["Saiba mais","Quem somos","Como funciona","Blog"],["Categorias","Mercados","Padarias","Frutas e bebidas"],["Suporte","Central de ajuda","Fale conosco","Privacidade"]].map(([head,...links])=><div key={head}><h3 className="font-bold">{head}</h3><ul className="mt-3 space-y-2 text-sm opacity-75">{links.map(link=><li key={link}><a href="#top">{link}</a></li>)}</ul></div>)}</div><div className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-70">© 2026 Pertinho. Feito para conectar o bairro.</div></footer>
    </main>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="mb-5 flex items-center justify-center gap-4"><span className="h-px w-7 bg-primary"/><h2 className="font-display text-xl font-extrabold sm:text-2xl">{children}</h2><span className="h-px w-7 bg-primary"/></div>;
}

function ProductCrop({ name, position }: { name: string; position: string }) {
  return <div className="aspect-square overflow-hidden rounded-md"><img src={productAsset.url} alt={name} width={1536} height={1024} loading="lazy" className={`product-sprite max-w-none ${position}`} /></div>;
}
