import { ButtonType } from "../types/ButtonType"

function Button({text, onClick, className, ...rest}: ButtonType) {
  return (
    <button onClick={onClick} className={`text-gray-500 w-3/4 h-12 mt-0 font-mono bg-blue-100 font-bold rounded-md border border-gray-300 hover:border-custom-purple hover:italic hover:bg-blue-200 disabled:hover:bg-blue-100 disabled:border-red-400 disabled:text-gray-500 disabled:font-normal disabled:italic ${className} xl:mt-0`} {...rest}>{text}</button>
  )
}

export default Button