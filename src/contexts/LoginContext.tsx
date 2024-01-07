import { createContext, useState, ReactNode } from "react";
import { RequestReturn } from "../types/RequestReturn";

type LoginContextProviderProps = {
  children: ReactNode;
  setIsLogged: (isLogged: boolean) => void;
};

export type LoginContextType = {
  setIsLogged: (isLogged: boolean) => void;
  responseData?: RequestReturn;
  setResponseData: (data: RequestReturn) => void;
};

export const LoginContext = createContext<LoginContextType | null>(null);

export const LoginContextProvider = ({
  children,
  setIsLogged,
}: LoginContextProviderProps) => {

  const [responseData, setResponseData] = useState<RequestReturn>();
  const updateRequest = (data: RequestReturn) => {
    setResponseData(data);
  };

  return (
    <LoginContext.Provider
      value={{setIsLogged, responseData, setResponseData: updateRequest }}
    >
      {children}
    </LoginContext.Provider>
  );
};
