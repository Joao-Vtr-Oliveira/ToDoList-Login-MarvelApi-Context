import { useContext, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { login } from "../../requests/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const loginContext = useContext(LoginContext);
  if (!loginContext) return null;

  const handleLogin = async () => {
    loginContext.setIsLogged(true);

    const info = await login({ user, password });
    if (info) {
      localStorage.setItem("user", info.user.name);
      localStorage.setItem("sessionToken", info.sessionToken);
      loginContext.setResponseData(info);
    }
    navigate("/todo");
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <div className="flex flex-col items-center h-full gap-10 p-5 ">
      <InputText
        value={user}
        placeholder="Usuário"
        onChange={handleUserChange}
      />
      <InputText
        value={password}
        placeholder="Senha"
        onChange={handlePasswordChange}
        type="password"
      />

      <Button
        onClick={handleLogin}
        disabled={!(!!user && !!password)}
        text="Login"
        className={"mt-24"}
      />
    </div>
  );
};

export default Login;
