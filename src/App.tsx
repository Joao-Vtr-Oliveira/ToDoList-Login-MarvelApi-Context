import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/Login/Login";
import { LoginContextProvider } from "./contexts/LoginContext";
import TodoList from "./pages/Todo/TodoList";
import NotFound from "./pages/NotFound/NotFound";
import { ChakraProvider } from "@chakra-ui/react";
import Marvel from "./pages/Marvel/Marvel";
import Home from "./pages/Home/Home";

function App() {
  return (
    <ChakraProvider>
      <LoginContextProvider>
        <BrowserRouter>
          <div className="h-screen flex flex-col justify-center items-center">
            <Header />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="/marvel" element={<Marvel />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </LoginContextProvider>
    </ChakraProvider>
  );
}

export default App;
