import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
import AuthProvider from "./Auth/AuthProvider.tsx";
import Login from "./routes/Login.tsx";
import { menuData } from "./data/menuItems.tsx";
import PuntoVenta from "./routes/PuntoVenta.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import { MenuItem } from "./data/types.tsx";

const createRoutes = (routes: MenuItem[]) => {
  return routes.map((route) => [
    {
      path: route.url,
      element: route.render,
      children: route.children ? createRoutes(route.children) : [],
    },
  ]);
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "lista-clientes/",
            element: <Dashboard />,
          },
          {
            path: "punto-venta/",
            element: <PuntoVenta />,
          },
          {
            path: "captura-colaboradores/",
            element: <PuntoVenta />,
          },
          {
            path: "lista-colaboradores/demo",
            element: <Dashboard />,
          },
          {
            path: "conf-campania",
            element: <PuntoVenta />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
