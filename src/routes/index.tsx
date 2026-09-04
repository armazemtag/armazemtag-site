import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/screens/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pertinho | Delivery do seu bairro" },
      {
        name: "description",
        content: "Feiras, mercados, refeições e produtos locais entregues rapidamente na sua casa.",
      },
      { property: "og:title", content: "Pertinho | Delivery do seu bairro" },
      {
        property: "og:description",
        content: "O delivery local que conecta você ao melhor do seu bairro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
