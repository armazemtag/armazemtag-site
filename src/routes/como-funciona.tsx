import { createFileRoute } from "@tanstack/react-router";
import { ComoFunciona } from "@/screens/ComoFunciona";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como funciona | Armazém Tag" },
      {
        name: "description",
        content: "App do Cliente, App do Parceiro e App Entregador.",
      },
    ],
  }),
  component: ComoFunciona,
});
