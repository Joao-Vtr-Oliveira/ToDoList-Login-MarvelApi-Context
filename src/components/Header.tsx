import Svg from "./Svg";
import AnchorSvg from "./AnchorSvg";

function Header() {
  return (
    <div className="w-screen h-16 bg-[#570FA0] flex items-center justify-between">
      <div className="flex items-center justify-around w-52">
        <Svg type="home" />
        <AnchorSvg type="github" />
        <AnchorSvg type="linkedin" />
        <AnchorSvg type="reddit" />
      </div>
      <div>
        <Svg type="disconnect" className="hover:text-red-400"/>
      </div>
    </div>
  );
}

export default Header;
