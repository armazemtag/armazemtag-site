import { ChevronDown } from "lucide-react";

const faqs = [
  "Como funcionam as entregas?",
  "Quais bairros são atendidos?",
  "Quais formas de pagamento?",
  "Como ser parceiro?",
];

export function FaqBlock() {
  return (
    <div id="faq" className="rounded-section border border-border p-6">
      <h2 className="font-display text-2xl font-extrabold">Perguntas frequentes</h2>
      <div className="mt-5 divide-y divide-border">
        {faqs.map((q) => (
          <details key={q} className="group py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
              {q}
              <ChevronDown className="size-4 transition group-open:rotate-180" />
            </summary>
            <p className="pt-2 text-xs text-muted-foreground">
              Tudo é resolvido pelo app, com acompanhamento simples e suporte local.
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
