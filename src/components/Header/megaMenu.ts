export const navItems = [
  { label: "A empresa", to: "/" },
  {
    label: "Estabelecimentos",
    to: "/estabelecimentos",
    links: [
      { label: "Conheça a plataforma", to: "/estabelecimentos" },
      { label: "Feiras e mercados", to: "/estabelecimentos" },
      { label: "Produtos e ofertas", to: "/estabelecimentos" },
      { label: "Receber pedidos", to: "/como-funciona" },
      { label: "Área do empreendedor", to: "/como-funciona" },
      { label: "Preciso de ajuda", to: "/suporte" },
    ],
  },
  {
    label: "Entregadores",
    to: "/entregadores",
    links: [
      { label: "Quero fazer entregas", to: "/entregadores" },
      { label: "Entregas de bicicleta", to: "/entregadores" },
      { label: "Rotas menores", to: "/entregadores" },
      { label: "Como funciona o app", to: "/como-funciona" },
      { label: "Regiões atendidas", to: "/entregadores" },
      { label: "Suporte ao entregador", to: "/suporte" },
    ],
  },
  {
    label: "Como funciona",
    to: "/como-funciona",
    links: [
      { label: "Comprar pelo aplicativo", to: "/como-funciona" },
      { label: "Vender pelo Armazém Tag", to: "/estabelecimentos" },
      { label: "Fazer entregas", to: "/entregadores" },
      { label: "App do cliente", to: "/como-funciona" },
      { label: "App do parceiro", to: "/como-funciona" },
      { label: "App do entregador", to: "/como-funciona" },
      { label: "Perguntas frequentes", to: "/suporte" },
    ],
  },
  { label: "Suporte", to: "/suporte" },
] as const;

export type NavItem = (typeof navItems)[number];
export type MegaNavItem = Extract<NavItem, { links: unknown }>;
