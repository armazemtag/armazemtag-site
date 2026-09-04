import { createFileRoute } from "@tanstack/react-router";
import { Suporte } from "@/screens/Suporte";

export const Route = createFileRoute("/suporte")({
  head: () => ({
    meta: [
      { title: "Suporte | Armazém Tag" },
      {
        name: "description",
        content: "Central de ajuda e perguntas frequentes sobre entregas, pagamentos e parcerias.",
      },
    ],
  }),
  component: Suporte,
});
