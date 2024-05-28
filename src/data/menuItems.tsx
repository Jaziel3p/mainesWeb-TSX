import { MenuItem } from "./types";
import PuntoVenta from "../routes/PuntoVenta";
import Dashboard from "../routes/Dashboard";
import Home from "../routes/Home";
import {
  FcPaid,
  FcViewDetails,
  FcShop,
  FcBusinessman,
  FcAutomatic,
  FcButtingIn,
  FcContacts,
  FcSupport,
} from "react-icons/fc";

export const menuData: MenuItem[] = [
  {
    id: 1,
    nombre: "Ventas",
    icono: <FcPaid />,
    url: "",
    children: [
      {
        id: 11,
        nombre: "Lista de Clientes",
        icono: <FcViewDetails />,
        url: "lista-clientes",
        children: [],
      },
      {
        id: 12,
        nombre: "Punto de Venta",
        icono: <FcShop />,
        url: "punto-venta",
        children: [],
      },
    ],
  },
  {
    id: 2,
    nombre: "RRHH",
    icono: <FcBusinessman />,
    url: "",
    children: [
      {
        id: 21,
        nombre: "Captura de Colaboradores",
        icono: <FcButtingIn />,
        url: "captura-colaboradores",
        children: [],
      },
      {
        id: 22,
        nombre: "Lista de Colaboradores",
        icono: <FcContacts />,
        url: "lista-colaboradores",
        children: [
          {
            id: 221,
            nombre: "Demo",
            icono: "",
            url: "/lista-colaboradores/demo",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    nombre: "Configuracion",
    icono: <FcAutomatic />,
    url: "",
    children: [
      {
        id: 31,
        nombre: "Configurar Campaña",
        icono: <FcSupport />,
        url: "conf-campania",
        children: [],
      },
    ],
  },
];
