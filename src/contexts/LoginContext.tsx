import { createContext, useState, ReactNode } from "react";
import { LoginContextType } from "../types/LoginContextType";

type LoginContextProviderProps = {
  children: ReactNode;
  setIsLogged: (isLogged: boolean) => void;
};

export const LoginContext = createContext<LoginContextType | null>(null);

export const LoginContextProvider = ({
  children,
  setIsLogged,
}: LoginContextProviderProps) => {
  const [infos, setInfos] = useState({ user: "", password: "" });

  const updateInfos = (user: string, password: string) => {
    setInfos({ user, password });
  };

  return (
    <LoginContext.Provider
      value={{ infos, setInfos: updateInfos, setIsLogged }}
    >
      {children}
    </LoginContext.Provider>
  );
};
