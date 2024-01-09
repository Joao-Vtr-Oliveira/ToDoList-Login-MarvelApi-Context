import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/Login/Login";
import { LoginContextProvider } from "./contexts/LoginContext";
import TodoList from "./pages/Todo/TodoList";
import NotFound from "./pages/NotFound/NotFound";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <LoginContextProvider>
        <BrowserRouter>
          <div className="max-w-screen-xl-1366 h-screen flex flex-col justify-center items-center">
            <Header />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </LoginContextProvider>
    </ChakraProvider>
  );
}

export default App;
