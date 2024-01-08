import LoginSvg from "./LoginSvg";
import Svg from "./Svg";

function Header() {
  return (
    <div className="w-screen h-16 bg-gray-500 flex items-center justify-around">
      <div>
        <LoginSvg />
      </div>
      <div className="flex justify-between w-44">
        <Svg type="github" />
        <Svg type="linkedin" />
        <Svg type="reddit" />
      </div>
    </div>
  );
}

export default Header;
