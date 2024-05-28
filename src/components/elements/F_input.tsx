import { IconType } from "react-icons";

interface InputProps {
  type?: string;
  name: string;
  value: string;
  ph?: string;
  ph2?: string;
  h?: number;
  w?: number;
  required?: boolean;
  classNameLabel?: string;
  classNameIn?: string;
  columna?: boolean;
  icono?: IconType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: (e: React.MouseEvent<SVGElement>) => void;
}

const F_input: React.FC<InputProps> = ({
  type = "text",
  name,
  value,
  ph = "texto aqui",
  ph2 = "texto aqui",
  h,
  w,
  required = false,
  classNameLabel,
  classNameIn,
  columna = false,
  icono: Icono,
  onChange,
  onIconClick,
}) => {
  let columnaa = "gap-1";
  if (columna) columnaa = "flex-col";

  return (
    <div className={"px-1 flex" + " " + columnaa}>
      <label
        htmlFor={name}
        className={
          "font-normal text-[12px] text-center my-auto" + " " + classNameLabel
        } //
      >
        {ph}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={ph2}
        required={required}
        onChange={onChange}
        className={
          "font-normal text-[12px] border-2 rounded-md border-cyan-800 px-2 py-[1px]" +
          " " +
          classNameIn
        }
        style={{ height: `${h}px`, width: `${w}px` }}
      />
      {Icono && ( //si se manda un icono como prop entonces se renderiza
        <Icono
          className="my-auto cursor-pointer"
          size={20}
          onClick={onIconClick}
        />
      )}
    </div>
  );
};

export default F_input;
