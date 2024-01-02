import { createContext, useState, ReactNode } from "react";
import { LoginContextType } from "../types/LoginContextType";
import { RequestReturn } from "../types/RequestReturn";

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

  const [responseData, setResponseData] = useState<RequestReturn>({ user: {name: ''}, sessionToken: "" });
  const updateRequest = (data: RequestReturn) => {
    setResponseData(data);
  };

  return (
    <LoginContext.Provider
      value={{ infos, setInfos: updateInfos, setIsLogged, responseData, setResponseData: updateRequest }}
    >
      {children}
    </LoginContext.Provider>
  );
};
