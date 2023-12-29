import { useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import InputText from "./InputText";
import Button from "./Button";

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const loginContext = useContext(LoginContext);
  if (!loginContext) return null;

  const handleLogin = () => {
    if(!user || !password){
      alert('Por favor, digite valores válidos');
      return;
    };
    loginContext.setInfos(user, password);
    loginContext.setIsLogged(true);
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <div className="flex flex-col items-center">
      <InputText
        value={user}
        placeholder="Usuário"
        onChange={handleUserChange}
      />
      <InputText
        value={password}
        placeholder="Senha"
        onChange={handlePasswordChange}
        type='password'
      />

      <Button onClick={handleLogin} text="Login" className={'mt-24'}/>
    </div>
  );
};

export default Login;
