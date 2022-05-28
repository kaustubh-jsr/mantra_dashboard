import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { links } from "../data/dummy";
const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  // This below function hides the sidebar if the screen size is less than 900, and any
  // link on the sidebar is clicked, so as the user does not have to manually hide the sidebar
  // to view contents behind sidebar on a smaller screen
  const handleSidebarOnResize = () => {
    if (screenSize < 900 && activeMenu) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <aside className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleSidebarOnResize}
              className="flex items-center gap-2 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img
                src={process.env.PUBLIC_URL + "transparent_logo.png"}
                alt="Mantras"
                className="h-5"
              />{" "}
              Mantra
            </Link>
            <TooltipComponent position="BottomCenter" content="Menu">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={() => {
                  setActiveMenu((prev) => !prev);
                }}
                style={{ color: currentColor }}
              >
                {" "}
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => {
              return (
                <div key={item.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                      onClick={handleSidebarOnResize}
                      style={({ isActive }) => ({
                        backgroundColor: isActive && currentColor,
                      })}
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              );
            })}
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
