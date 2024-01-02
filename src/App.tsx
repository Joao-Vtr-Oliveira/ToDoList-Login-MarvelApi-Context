import { useContext, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import { LoginContext, LoginContextProvider } from "./contexts/LoginContext";
import TodoList from "./components/TodoList";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <LoginContextProvider setIsLogged={setIsLogged}>
      <div className="bg-black w-screen h-screen flex flex-col justify-center items-center">
        <Header />
        {isLogged ? (
          <div className="flex flex-col justify-center items-center w-full h-full">
            <pre>
              <span className="text-custom-purple font-bold underline text-3xl font-sans mb-3 xl:text-5xl">TO-DO:</span>
              <Greeting />
            </pre>
            <div className="border rounded-md w-4/5 xl:w-2/5 h-auto mb-10">
              <TodoList />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <div className="border rounded-md w-4/5 h-2/3 xl:w-1/5 xl:h-2/3 ">
              <Login />
            </div>
          </div>
        )}
      </div>
    </LoginContextProvider>
  );
}

function Greeting() {
  const loginContext = useContext(LoginContext);
  return (
    <span className="text-white ml-5 font-serif text-lg xl:text-2xl">Olá {loginContext?.responseData.user.name || '!'}</span>
  );
}

export default App;
