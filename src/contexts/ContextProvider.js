import React, { useContext, createContext, useState, Children } from "react";

const stateContext = createContext();

const initialState = {
  notification: false,
  chat: false,
  userProfile: false,
  cart: false,
  themeSettings: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(() => {
    return localStorage.getItem("colorMode") || "#03c9D7";
  });
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("currentThemeMode") || "Light";
  });
  const [themeSetting, setThemeSetting] = useState(false);

  const handleClicked = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: !isClicked[clicked] });
  };
  const setMode = (e) => {
    setThemeMode(e);
    localStorage.setItem("currentThemeMode", e);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };
  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClicked,
        screenSize,
        setScreenSize,
        currentColor,
        themeMode,
        themeSetting,
        setThemeSetting,
        setMode,
        setColor,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => useContext(stateContext);
