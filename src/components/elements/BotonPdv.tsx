interface BotonPdvProps {
  children: string;
  className?: string;
}
const BotonPdv: React.FC<BotonPdvProps> = ({ children, className }) => {
  return (
    <button
      className={
        "rounded-3xl hover:bg-slate-200 py-2 px-4 text-sky-900 text-sm bg-zinc-200" +
        " " +
        className
      }
    >
      {children}
    </button>
  );
};

export default BotonPdv;
