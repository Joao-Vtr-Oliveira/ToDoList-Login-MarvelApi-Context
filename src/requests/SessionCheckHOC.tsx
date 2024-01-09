import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../src/contexts/LoginContext";

const SessionCheckHOC = (WrappedComponent: React.ComponentType, delay: number = 0) => {
  return (props: React.ComponentProps<typeof WrappedComponent>) => {
    const loginContext = useContext(LoginContext);
    const navigate = useNavigate();
    useEffect(() => {
      const checkSession = () => {
        if (!loginContext?.responseData?.sessionToken) {
          console.log("Nenhum token de sessão encontrado, redirecionando...");
          setTimeout(() => {
            navigate("/");
          }, delay);
        } else {
          console.log("Token de sessão encontrado:",loginContext?.responseData?.sessionToken);
        }
      };

      checkSession();
    }, [props, navigate]);

    return <WrappedComponent {...props} />;
  };
};

export default SessionCheckHOC;
