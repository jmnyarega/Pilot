import { createContext, useContext, useEffect, useState } from "react";

import { IContextValues } from "../types/context.d";
import { IReactChildrenProps } from "../types";

import theme from "../constants/colors";
import screenSizes from "../constants/screen-sizes";

const AppContext = createContext<IContextValues>({});

const AppProvider: React.FC<IReactChildrenProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const contextValues = {
    theme,
    toggleOpen,
    open,
    active,
    setActive,
    isMobile,
    screenSizes,
  };

  const handleWidthChange = () => {
    setIsMobile(window.innerWidth < +screenSizes["desktop"].minWidth * 16);

    if (!isMobile) setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidthChange, false);
    return () => window.removeEventListener("resize", handleWidthChange, false);
  });

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
