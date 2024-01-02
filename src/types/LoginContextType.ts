import { RequestReturn } from "./RequestReturn";

export type LoginContextType = {
  infos: {
    user: string;
    password: string;
  };
  setInfos: (user: string, password: string) => void;
  setIsLogged: (isLogged: boolean) => void;
  responseData: RequestReturn;
  setResponseData: (data: RequestReturn) => void;
};
