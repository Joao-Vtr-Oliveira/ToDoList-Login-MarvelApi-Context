import { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import useSessionCheck from "../../requests/useSessionCheck";

function NotFound() {
  const loginContext = useContext(LoginContext);
  if (loginContext) {
    const checkSession = useSessionCheck(loginContext);
    useEffect(() => {
      const timer = setTimeout(() => {
        checkSession();
      }, 3000);
    }, [checkSession]);
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="h-auto">
        <div className="text-center">
          <h1 className="text-5xl text-custom-purple underline">
            Page not found!
          </h1>
          <h3 className="text-3xl text-white">
            Getting back to the Login page in 3 seconds!
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
