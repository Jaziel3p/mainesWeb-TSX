import BotonPdv from "../components/elements/BotonPdv";
import F_input from "../components/elements/F_input";
import { IoMdSearch } from "react-icons/io";

const PuntoVenta = () => {
  function handleClick() {}
  return (
    <div>
      <div className="flex flex-col">
        <div>tabla</div>
        <div>
          <div className="flex gap-2">
            <BotonPdv>F6- Cancelar</BotonPdv>
            <BotonPdv>F7- Cambiar</BotonPdv>
            <BotonPdv>F8- Borrar partida</BotonPdv>
            <BotonPdv>Ops. Partida</BotonPdv>
            <BotonPdv>F3- Cambiar tabla-captura</BotonPdv>
            <BotonPdv>g1</BotonPdv>
          </div>
          <div id="bloques" className="grid grid-cols-4 my-4">
            <div
              id="bloque 1"
              className="flex flex-col gap-2 border-2 rounded-md p-2"
            >
              <div className="flex">
                <F_input
                  ph="Almacen"
                  name="almacen"
                  value="AL1"
                  onChange={handleClick}
                  icono={IoMdSearch}
                  classNameIn="w-12"
                ></F_input>
                <F_input
                  ph="Sucursal"
                  name="sucursal"
                  value=""
                  onChange={handleClick}
                  icono={IoMdSearch}
                  classNameIn="w-20"
                ></F_input>
              </div>
              <div className="flex">
                <F_input
                  ph="Caja"
                  name="caja"
                  value=""
                  onChange={handleClick}
                  icono={IoMdSearch}
                  classNameIn="w-12"
                ></F_input>
                <F_input
                  ph="Forma entrega"
                  name="formaEntrega"
                  value=""
                  onChange={handleClick}
                  classNameIn="w-24"
                ></F_input>
              </div>
              <div className="flex">
                <F_input
                  ph="Vendedor"
                  name="vendedor"
                  value=""
                  onChange={handleClick}
                  icono={IoMdSearch}
                  classNameIn="w-8"
                ></F_input>
                <input
                  type="text"
                  className="font-normal text-[12px] border-2 rounded-md border-cyan-800 px-2 py-[1px]"
                />
              </div>
              <div>
                <F_input
                  ph="Mensaje"
                  name="mensaje"
                  value=""
                  columna
                  onChange={handleClick}
                  classNameIn="h-20"
                ></F_input>
              </div>
            </div>
            <div id="bloque 2">
              <F_input
                ph="Producto (F4)"
                name="producto"
                value=""
                onChange={handleClick}
                icono={IoMdSearch}
                classNameIn="w-[60%]"
              ></F_input>
              <BotonPdv className="mx-auto">Cobrar</BotonPdv>
            </div>
            <div id="bloque 3" className="col-span-2">
              bloque 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuntoVenta;
