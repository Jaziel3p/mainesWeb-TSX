import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "../data/types";
import { FcCollapse, FcExpand } from "react-icons/fc";

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const navigate = useNavigate();

  const handleClick = (item: MenuItem) => {
    if (item.children && item.children.length > 0) {
      toggleExpand(item.id);
    } else {
      navigate(item.url);
    }
  };

  const toggleExpand = (id: number) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderMenuItems = (menuItems: MenuItem[]) => {
    return menuItems.map((item) => (
      <li key={item.id}>
        <div
          className="flex items-center justify-between p-2 hover:bg-slate-700 rounded-md cursor-pointer"
          onClick={() => handleClick(item)}
        >
          <div className="flex items-center space-x-2">
            <span>{item.icono}</span>
            <span>{item.nombre}</span>
          </div>
          {item.children && item.children.length > 0 && (
            <span>{expanded[item.id] ? <FcCollapse /> : <FcExpand />}</span>
          )}
        </div>
        {item.children && item.children.length > 0 && expanded[item.id] && (
          <ul className="pl-4">{renderMenuItems(item.children)}</ul>
        )}
      </li>
    ));
  };

  return <ul className="space-y-2">{renderMenuItems(items)}</ul>;
};

export default Menu;
