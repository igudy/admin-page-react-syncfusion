import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  useProfile: false,
  notificaton: false,
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
