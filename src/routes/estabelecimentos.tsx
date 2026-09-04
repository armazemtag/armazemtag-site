import { createFileRoute } from "@tanstack/react-router";
import { Estabelecimentos } from "@/screens/Estabelecimentos";

export const Route = createFileRoute("/estabelecimentos")({
  head: () => ({
    meta: [
      { title: "Estabelecimentos | Armazém Tag" },
      {
        name: "description",
        content: "Feiras, mercados e comércios locais com entregas rápidas no seu bairro.",
      },
    ],
  }),
  component: Estabelecimentos,
});
