import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quem é responsável pela entrega?",
    a: "A entrega é realizada pelo próprio estabelecimento ou por um entregador escolhido por ele. A Armazém Tag fornece a tecnologia para organizar o pedido e acompanhar seus status.",
  },
  {
    q: "Com quem o cliente fala sobre o pedido?",
    a: "O cliente trata diretamente com o estabelecimento assuntos relacionados ao produto, preparo, prazo e entrega. A Armazém Tag presta suporte para dificuldades técnicas relacionadas ao uso da plataforma.",
  },
  {
    q: "Quais são os requisitos para cadastrar um estabelecimento?",
    a: "O estabelecimento deve trabalhar com produtos à pronta entrega, já preparados ou disponíveis para despacho, manter preços e estoque atualizados e possuir uma forma própria de realizar as entregas.",
  },
  {
    q: "Como o estabelecimento mantém as entregas rápidas?",
    a: "O estabelecimento deve definir um raio de atendimento compatível com sua capacidade e contar com entregadores suficientes para a demanda. Os pedidos não devem ser acumulados por longos períodos antes da saída, pois isso compromete a rapidez e a qualidade da entrega.",
  },
  {
    q: "Quais são minhas responsabilidades com os pagamentos?",
    a: "O estabelecimento deve cumprir corretamente os pedidos aceitos e garantir a entrega dos produtos anunciados. Quando houver produto ausente, incorreto, impróprio para consumo ou pedido não entregue, deverá oferecer a correção do pedido, a troca do produto ou o reembolso total ou parcial, conforme o caso e as regras da plataforma. A troca deverá ser combinada com o cliente e realizada pelo estabelecimento. Quando houver reembolso, a Armazém Tag registra a ocorrência e processa o estorno por meio do parceiro financeiro.",
  },
  {
    q: "Quanto custa a entrega?",
    a: "A Armazém Tag conecta clientes a estabelecimentos próximos. Por isso, as taxas de entrega são reduzidas: grátis, R$ 3, R$ 5 ou no máximo R$ 7. O valor é definido pelo estabelecimento conforme a distância e aparece antes da confirmação do pedido. Quando a entrega for grátis, o custo será assumido pelo próprio estabelecimento, e não pela Armazém Tag.",
  },
];

export function FaqBlock() {
  return (
    <div id="faq" className="rounded-section border border-border p-6">
      <h2 className="font-display text-2xl font-extrabold">Perguntas frequentes</h2>
      <div className="mt-5 divide-y divide-border">
        {faqs.map(({ q, a }) => (
          <details key={q} className="group py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
              {q}
              <ChevronDown className="size-4 transition group-open:rotate-180" />
            </summary>
            <p className="pt-2 text-xs text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
