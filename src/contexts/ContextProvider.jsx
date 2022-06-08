import { React, useContext, createContext, useState, useEffect } from "react";

const StateContext = createContext();
const sideIconsIntialState = {
  chat: false,
  notification: false,
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(sideIconsIntialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("color", color);
  };

  const handleClick = (clicked) => {
    setIsClicked((prev) => ({
      ...sideIconsIntialState,
      [clicked]: !prev[clicked],
    }));
  };

  useEffect(() => {
    setColor(
      localStorage.getItem("color") ? localStorage.getItem("color") : "#03C9D7"
    );
    localStorage.setItem(
      localStorage.getItem("themeMode")
        ? localStorage.getItem("themeMode")
        : "Light"
    );
    setCurrentMode(
      localStorage.getItem("themeMode")
        ? localStorage.getItem("themeMode")
        : "Light"
    );
  }, []);
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setColor,
        currentMode,
        setMode,
        themeSettings,
        setThemeSettings,
        sideIconsIntialState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
