import Menu from "./components/Menu.tsx";
import { menuData } from "./data/menuItems.tsx";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      {
        <div className="flex">
          <aside className="w-64 h-screen p-4 bg-slate-900 text-white">
            <div className="bg-slate-900 p-10 my-2">
              <h1 className="text-slate-100 text-center">MAINES</h1>
            </div>
            <Menu items={menuData} />
          </aside>
          <main className="flex-1 p-4">{<Outlet />}</main>
        </div>
      }
    </div>
  );
};

export default App;
