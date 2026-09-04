import { Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCrop } from "@/components/ProductCrop";

const categories: Array<[string, string]> = [
  ["Açaí", "sprite-1"],
  ["Padaria", "sprite-2"],
  ["Mercado", "sprite-3"],
  ["Frutas", "sprite-4"],
  ["Refeições", "sprite-5"],
  ["Gás", "sprite-6"],
];

export function CategoryGrid() {
  return (
    <section className="section-shell pt-7 pb-8 sm:pt-11 sm:pb-12">
      <SectionTitle>Categorias em destaque</SectionTitle>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {categories.map(([name, position]) => (
          <Link
            key={name}
            to="/estabelecimentos"
            className="group overflow-hidden rounded-card border border-border bg-card p-2 text-center shadow-soft transition hover:-translate-y-1 hover:border-primary/30"
          >
            <ProductCrop name={name} position={position} />
            <span className="mt-2 block text-xs font-bold sm:text-sm">{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
