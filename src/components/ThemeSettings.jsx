import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { currentColor, setColor, currentMode, setMode, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button
            onClick={() => {
              setThemeSettings(false);
            }}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:bg-light-gray hover:drop-shadow-xl"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col p-4 ml-4 border-t-1 border-color">
          <p className="font-semibold text-lg">Theme Mode</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              checked={currentMode === "Light"}
              onChange={setMode}
              className="cursor-pointer"
            />
            <label htmlFor="light" className="ml-4 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              checked={currentMode === "Dark"}
              onChange={setMode}
              className="cursor-pointer"
            />
            <label htmlFor="dark" className="ml-4 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col p-4 ml-4 border-t-1 border-color">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3 mt-3">
            {themeColors.map((color) => (
              <button
                key={color.name}
                className="h-10 w-10 rounded-full"
                onClick={() => setColor(color.color)}
                style={{ backgroundColor: color.color }}
              >
                <BsCheck
                  className={`ml-2 text-2xl text-white ${
                    currentColor === color.color ? "block" : "hidden"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
