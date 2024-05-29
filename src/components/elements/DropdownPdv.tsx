interface Opcion {
  texto: string;
  valor: string;
}

type DropdownPdvProps = {
  titulo: string;
  name: string;
  opciones: Opcion[];
  classNameLabel?: string;
  classNameIn?: string;
};

//Recibe un arreglo de objetos con texto y valor [{texto: "Opcion1", valor: "1"},]
const DropdownPdv: React.FC<DropdownPdvProps> = ({
  titulo,
  name,
  opciones,
  classNameLabel,
  classNameIn,
}) => {
  return (
    <div className="px-2">
      <label
        htmlFor={name}
        className={
          "font-normal text-[12px] text-center my-auto mr-1" +
          " " +
          classNameLabel
        }
      >
        {titulo}
      </label>
      <select
        name={name}
        id={name}
        className={
          "font-normal text-[12px] border-2 border-cyan-800 rounded-md" +
          " " +
          classNameIn
        }
      >
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion.valor}>
            {opcion.texto}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownPdv;
