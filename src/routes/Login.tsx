import { useEffect, useState, version } from "react";
import F_input from "../components/elements/F_input";
import { useAuth } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { FcKey } from "react-icons/fc";
import { IoMdKey } from "react-icons/io";
import { AuthResponse, AuthResponseError } from "../data/types";
// Password1;

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const auth = useAuth();

  if (auth.isAuthenticated) {
    return <Navigate to="/" />;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "user") {
      setUser(value);
    }
    if (name === "pass") {
      setPass(value);
    }
    if (name === "empresa") {
      setEmpresa(value);
    }
  }

  const headers = new Headers({
    Authorization: "Basic " + btoa(`${user}:${pass}`), //aG46aG4zMjE=
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch("api/maineswarDemo/rec/usuarios/login", {
        method: "POST",
        headers,
        body: JSON.stringify({ empresa }),
      });

      const data = await res.json();
      if (data.resp) {
        //const json = (await res.json()) as AuthResponseError;
        //setErrorResponse(json.body.error);
        auth.setAuthenticatedTrue();
        console.log(data.msg1);
      } else {
        console.log(data.msg);
      }
    } catch (error) {
      console.log("Problema de conexión: " + error);
    }
  }

  return (
    <div className="mx-auto px-2 max-w-[520px] my-40">
      <div>
        <p className="text-orange-500 font-semibold text-center py-2">
          Software Empresarial
        </p>
      </div>
      <div className="rounded-2xl bg-gray-200 shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <h1 className="text-2xl text-gray-500 font-medium mt-2 mx-auto">
            Maines ERP
          </h1>
          <p className="mx-auto">ERP + Business Intelligence + eComerce</p>
          <p className="mx-auto">version {version}</p>
          <div className="flex justify-around">
            <F_input
              titulo="Usuario/RFC"
              name="user"
              value={user}
              ph="Usuario/RFC"
              required
              columna
              classNameLabel="text-[15px] font-semibold"
              onChange={handleChange}
            ></F_input>
            <F_input
              titulo="Contraseña"
              type="password"
              name="pass"
              value={pass}
              ph="Contraseña"
              required
              columna
              classNameLabel="text-[15px] font-semibold"
              onChange={handleChange}
            ></F_input>
          </div>
          <F_input
            titulo="Cliente/Empresa"
            name="empresa"
            value={empresa}
            ph="Cliente/Empresa"
            required
            columna
            onChange={handleChange}
            classNameLabel="text-[15px] font-semibold"
            classNameIn="mx-32"
          ></F_input>

          <button className="border-2 rounded-md w-24 mx-auto my-4 text-sky-900 font-semibold">
            Ingresar
          </button>
        </form>
      </div>
      <div className="py-2 flex justify-center">
        <a href="#" className="text-sm flex gap-2">
          <IoMdKey size="1.5em" />
          Recuperar Contraseña
        </a>
      </div>
    </div>
  );
}
