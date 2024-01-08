import { createContext, useState, ReactNode } from "react";
import { RequestReturn } from "../types/RequestReturn";

type LoginContextProviderProps = {
  children: ReactNode;
};

export type LoginContextType = {
  responseData?: RequestReturn;
  setResponseData: (data: RequestReturn) => void;
};

export const LoginContext = createContext<LoginContextType | null>(null);

export const LoginContextProvider = ({
  children,
}: LoginContextProviderProps) => {

  const [responseData, setResponseData] = useState<RequestReturn>();
  const updateRequest = (data: RequestReturn) => {
    setResponseData(data);
  };

  return (
    <LoginContext.Provider
      value={{responseData, setResponseData: updateRequest }}
    >
      {children}
    </LoginContext.Provider>
  );
};
