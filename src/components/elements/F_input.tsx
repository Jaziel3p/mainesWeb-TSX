interface InputProps {
  type?: string;
  name: string;
  value: string;
  ph?: string;
  h?: number;
  w?: number;
  classNameLabel?: string;
  classNameIn?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const F_input: React.FC<InputProps> = ({
  type = "text",
  name,
  value,
  ph = "texto aqui",
  h,
  w,
  classNameLabel,
  classNameIn,
  onChange,
}) => {
  return (
    <div className="flex flex-col px-2">
      <label
        htmlFor={name}
        className={"font-medium text-center " + classNameLabel} //dejar espacio entre concatenciones
      >
        {ph}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={
          "border-2 rounded-md border-cyan-800 px-2 py-[1px] " + classNameIn
        }
        style={{ height: `${h}px`, width: `${w}px` }}
      />
    </div>
  );
};

export default F_input;
