import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/Login/Login";
import { LoginContextProvider } from "./contexts/LoginContext";
import TodoList from "./pages/Todo/TodoList";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginContextProvider setIsLogged={setIsLogged}>
      <BrowserRouter>
        <div className="bg-black max-w-screen-xl-1366 w-full h-screen flex flex-col justify-center items-center">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<LoginPage />}
            />
            <Route
              path="/todo"
              element={<TodoList />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;