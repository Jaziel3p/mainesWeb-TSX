export const menuData = [
  {
    id: 1,
    nombre: "Dashboard",
    icono: "📊",
    url: "/dashboard",
    children: [],
  },
  {
    id: 2,
    nombre: "Usuarios",
    icono: "👥",
    url: "/usuarios",
    children: [
      {
        id: 3,
        nombre: "Administradores",
        icono: "🔧",
        url: "/usuarios/admin",
        children: [],
      },
      {
        id: 4,
        nombre: "Clientes",
        icono: "🛒",
        url: "/usuarios/clientes",
        children: [],
      },
    ],
  },
];
