import { useState } from "react";
import BotonPdv from "../components/elements/BotonPdv";
import F_input from "../components/elements/F_input";
import { IoMdSearch } from "react-icons/io";
import DropdownPdv from "../components/elements/DropdownPdv";
import Modal from "../components/elements/Modal";

const PuntoVenta = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  function handleClick() {}
  return (
    <div>
      <div className="grid grid-rows-layout h-screen p-4">
        <div className="overflow-x-auto" id="TABLA">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-r">ClaveProd</th>
                <th className="py-2 px-4 border-b border-r">Producto</th>
                <th className="py-2 px-4 border-b border-r">UMedida</th>
                <th className="py-2 px-4 border-b border-r">Cant</th>
                <th className="py-2 px-4 border-b border-r">Precio</th>
                <th className="py-2 px-4 border-b border-r">Subtotal</th>
                <th className="py-2 px-4 border-b border-r">IVA</th>
                <th className="py-2 px-4 border-b border-r">Total</th>
                <th className="py-2 px-4 border-b border-r">Comentarios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Data 1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="">
          <div className="flex gap-2">
            <BotonPdv>F6- Cancelar</BotonPdv>
            <BotonPdv>F7- Cambiar</BotonPdv>
            <BotonPdv>F8- Borrar partida</BotonPdv>
            <BotonPdv>Ops. Partida</BotonPdv>
            <BotonPdv>F3- Cambiar tabla-captura</BotonPdv>
            <BotonPdv>g1</BotonPdv>
          </div>
          <div id="bloques" className="grid grid-cols-8 mt-4">
            <div
              id="bloque 1"
              className="col-span-3 flex flex-col gap-2 border-2 rounded-md p-2"
            >
              <div className="flex">
                <F_input
                  titulo="Almacen"
                  name="almacen"
                  value="AL1"
                  onChange={handleClick}
                  icono={IoMdSearch}
                  classNameIn="w-12"
                ></F_input>
                <F_input
                  titulo="Sucursal"
                  name="sucursal"
                  value=""
                  onChange={handleClick}
                  icono={IoMdSearch}
                  classNameIn="w-20"
                ></F_input>
              </div>
              <div className="flex">
                <F_input
                  titulo="Caja"
                  name="caja"
                  value=""
                  onChange={handleClick}
                  icono={IoMdSearch}
                  classNameIn="w-15"
                ></F_input>
                <DropdownPdv
                  opciones={[
                    { texto: "Retirado", valor: "retirado" },
                    { texto: "Entregado", valor: "entregado" },
                  ]}
                  titulo="Forma Entrega"
                  name="formaEntrega"
                ></DropdownPdv>
              </div>
              <div className="flex">
                <F_input
                  titulo="Vendedor"
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
                  titulo="Mensaje"
                  name="mensaje"
                  value=""
                  columna
                  onChange={handleClick}
                  classNameIn="h-20"
                ></F_input>
              </div>
            </div>
            <div
              id="bloque 2"
              className="col-span-3 flex flex-col gap-4 border-2 rounded-md p-3 mx-1"
            >
              <F_input
                titulo="Producto (F4)"
                name="producto"
                value=""
                onChange={handleClick}
                icono={IoMdSearch}
                onIconClick={handleOpenModal}
                classNameIn="w-[60%]"
              ></F_input>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div>
                  <h2 className="text-lg font-semibold">Escoge una opcion</h2>
                  <ul className="mt-4">
                    <li className="mb-2">
                      <button className="px-4 py-2 bg-green-500 text-white rounded">
                        Option 1
                      </button>
                    </li>
                    <li className="mb-2">
                      <button className="px-4 py-2 bg-green-500 text-white rounded">
                        Option 2
                      </button>
                    </li>
                    <li className="mb-2">
                      <button className="px-4 py-2 bg-green-500 text-white rounded">
                        Option 3
                      </button>
                    </li>
                  </ul>
                </div>
              </Modal>
              <div className="flex justify-center">
                <BotonPdv>F5 COBRAR</BotonPdv>
              </div>
              <div className="flex">
                <F_input
                  titulo="Cliente"
                  name="cliente"
                  value=""
                  onChange={handleClick}
                  icono={IoMdSearch}
                  classNameIn="w-[50%]"
                ></F_input>
                <input
                  type="text"
                  className="font-normal text-[12px] border-2 rounded-md border-cyan-800 px-2 py-[1px]"
                />
              </div>
              <div>
                <DropdownPdv
                  opciones={[{ texto: "Contado", valor: "contado" }]}
                  titulo="Forma de Pago"
                  name="formaPago"
                ></DropdownPdv>
              </div>
            </div>
            <div
              id="bloque 3"
              className="col-span-2 p-2 border-2 rounded-md flex justify-center items-center"
            >
              <div className="flex flex-col gap-2 items-end">
                <F_input
                  titulo="TOTAL"
                  name="total"
                  ph=""
                  value=""
                  onChange={handleClick}
                  classNameIn="w-[120px] bg-green-600"
                ></F_input>
                <F_input
                  titulo="Moneda"
                  name="moneda"
                  value="MXM"
                  onChange={handleClick}
                  icono={IoMdSearch}
                  classNameIn="w-[70px]"
                ></F_input>
                <F_input
                  titulo="Descuento Global"
                  name="descuentoGlobal"
                  value=""
                  onChange={handleClick}
                  icono={IoMdSearch}
                  classNameIn="w-[70px]"
                ></F_input>
                <DropdownPdv
                  opciones={[{ texto: "A", valor: "A" }]}
                  titulo="Serie de Folios"
                  name="serieFolios"
                ></DropdownPdv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuntoVenta;
