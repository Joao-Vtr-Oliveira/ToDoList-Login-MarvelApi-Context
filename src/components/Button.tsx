import { ButtonType } from "../types/ButtonType"

function Button({text, onClick, className}: ButtonType) {
  return (
    <button onClick={onClick} className={`text-white w-3/4 h-12 mt-0 font-mono font-bold rounded-md border border-gray-300 hover:border-custom-purple hover:italic ${className} xl:mt-0`}>{text}</button>
  )
}

export default Button