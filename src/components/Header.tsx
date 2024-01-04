import Svg from "./Svg";

//h-16
function Header() {
  return (
    <div className="w-screen h-16 bg-gray-500 flex items-center justify-around">
      <div>
        <Svg type="todo" />
      </div>
      <div className="flex justify-between w-44">
        <Svg type="github" />
        <Svg type="instagram" />
        <Svg type="reddit" />
      </div>
    </div>
  );
}

export default Header;
