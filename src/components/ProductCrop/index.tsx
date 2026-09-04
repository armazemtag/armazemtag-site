import productSpriteUrl from "@/assets/product-grid.svg";

export function ProductCrop({ name, position }: { name: string; position: string }) {
  return (
    <div className="aspect-square overflow-hidden rounded-md">
      <img
        src={productSpriteUrl}
        alt={name}
        width={1536}
        height={1024}
        loading="lazy"
        className={`product-sprite max-w-none ${position}`}
      />
    </div>
  );
}
