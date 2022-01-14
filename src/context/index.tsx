import { createContext, useContext, useState } from "react";

import { IContextValues } from "../types/context.d";
import { IReactChildrenProps } from "../types";

import theme from "../constants/colors";

const AppContext = createContext<IContextValues>({});

const AppProvider: React.FC<IReactChildrenProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const toggleOpen = () => setOpen(!open);

  const contextValues = {
    theme,
    toggleOpen,
    open,
    active,
    setActive,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
