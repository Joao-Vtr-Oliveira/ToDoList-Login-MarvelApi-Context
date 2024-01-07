import { useNavigate } from 'react-router-dom';
import { LoginContextType } from '../contexts/LoginContext';

const useSessionCheck = (loginContext: LoginContextType) => {
  const navigate = useNavigate();

  const checkSession = () => {
    if (!loginContext?.responseData?.sessionToken) {
      console.log('Nenhum token de sessão encontrado, redirecionando...');
      navigate("/");
    } else {
      console.log('Token de sessão encontrado:', loginContext.responseData.sessionToken);
    }
  };
  return checkSession;
};

export default useSessionCheck;
