import { useContext, useState, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login/Login";
import { LoginContext, LoginContextProvider } from "./contexts/LoginContext";
import TodoList from "./pages/Todo/TodoList";
import NotFound from "./pages/NotFound/NotFound";

interface StyledContainerProps {
  children: ReactNode;
}

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginContextProvider setIsLogged={setIsLogged}>
      <BrowserRouter>
        <div className="bg-black w-screen h-screen flex flex-col justify-center items-center">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <StyledContainerLogin>
                  <Login />
                </StyledContainerLogin>
              }
            />
            <Route
              path="/todo"
              element={
                <StyledContainerTodo>
                  <TodoList />
                </StyledContainerTodo>
              }
            />
            <Route
              path="*"
              element={
                <StyledContainerNotFound>
                  <NotFound />
                </StyledContainerNotFound>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

function StyledContainerLogin({ children }: StyledContainerProps) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="border rounded-md w-4/5 h-2/3 xl:w-1/5 xl:h-2/3">
        {children}
      </div>
    </div>
  );
}

function StyledContainerTodo({ children }: StyledContainerProps) {
  const loginContext = useContext(LoginContext);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <pre>
        <span className="text-custom-purple font-bold underline text-3xl font-sans mb-3 xl:text-5xl">
          TO-DO:
        </span>
        <span className="text-white ml-5 font-serif text-lg xl:text-2xl">
          Olá {loginContext?.responseData?.user.name || "!"}
        </span>
      </pre>
      <div className="border rounded-md w-4/5 xl:w-2/5 h-auto mb-10">
        {children}
      </div>
    </div>
  );
}

function StyledContainerNotFound({children}: StyledContainerProps) {
  return(
    <div className="flex justify-center items-center w-full h-full">
      <div className="h-auto">
        {children}
      </div>
    </div>
  )
}

export default App;