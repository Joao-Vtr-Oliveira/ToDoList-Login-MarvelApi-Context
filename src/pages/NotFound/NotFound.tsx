import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className="text-center">
      <h1 className='text-5xl text-custom-purple underline'>Page not found!</h1>
      <h3 className='text-3xl text-white'>Please, get back to the <span className="text-blue-300 underline hover:cursor-pointer hover:text-blue-500" onClick={handleClick}>home page.</span></h3>
    </div>
  )
}

export default NotFound;