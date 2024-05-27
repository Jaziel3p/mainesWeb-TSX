import Login from "./routes/Login";
import Menu from "./pruebas/Menu";
import { MenuItem } from "./types/types";

const menuData: MenuItem[] = [
  {
    id: 1,
    nombre: "Ventas",
    icono: "📊",
    url: "/ventas",
    children: [
      {
        id: 11,
        nombre: "Lista de Clientes",
        icono: "📊",
        url: "/ventas/lista-clientes",
        children: [],
      },
      {
        id: 12,
        nombre: "Punto de Venta",
        icono: "📊",
        url: "/ventas/punto-venta",
        children: [],
      },
    ],
  },
  {
    id: 2,
    nombre: "RRHH",
    icono: "👥",
    url: "/rrhh",
    children: [
      {
        id: 21,
        nombre: "Captura de Colaboradores",
        icono: "🔧",
        url: "/rrhh/captura-colaboradores",
        children: [],
      },
      {
        id: 22,
        nombre: "Lista de Colaboradores",
        icono: "🛒",
        url: "/rrhh/lista-colaboradores",
        children: [
          {
            id: 221,
            nombre: "Demo",
            icono: "🛒",
            url: "/rrhh/lista-colaboradores/demo",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    nombre: "Configuracion",
    icono: "📊",
    url: "/configuracion",
    children: [
      {
        id: 31,
        nombre: "Configurar Campaña",
        icono: "🛒",
        url: "/configuracion/conf-campania",
        children: [],
      },
    ],
  },
];

const App: React.FC = () => {
  return (
    <div>
      {
        /* <Login></Login> */
        <div className="flex">
          <aside className="w-64 h-screen bg-gray-100 p-4">
            <div className="bg-slate-900 p-10 my-2">
              <h1 className="text-slate-100 text-center">MAINES</h1>
            </div>
            <Menu items={menuData} />
          </aside>
          <main className="flex-1 p-4">{/* Contenido principal */}</main>
        </div>
      }
    </div>
  );
};

export default App;
