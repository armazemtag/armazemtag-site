import { createFileRoute } from "@tanstack/react-router";
import { Entregadores } from "@/screens/Entregadores";

export const Route = createFileRoute("/entregadores")({
  head: () => ({
    meta: [
      { title: "Entregadores | Armazém Tag" },
      {
        name: "description",
        content: "Entregas de bicicleta em rotas curtas, perto de casa e do comércio local.",
      },
    ],
  }),
  component: Entregadores,
});
