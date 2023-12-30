import { useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import InputText from "./InputText";
import Button from "./Button";

const request = async (data: {user: string, password: string}) => {
  const url = 'https://run.mocky.io/v3/49bf0d3b-a77b-4bad-8648-98e9560e12ef';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

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
    request({user, password});
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
