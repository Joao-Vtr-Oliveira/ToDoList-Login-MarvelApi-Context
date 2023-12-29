import { InputTextType } from "../types/InputTextType";

function InputText({
  value,
  placeholder,
  onKeyDown,
  type = "text",
  className,
  ...rest
}: InputTextType) {
  return (
    <input
      className={`w-3/4 h-10 mt-12 mb-0 text-center text-white font-mono bg-transparent rounded-md border border-gray-300 focus:outline-none  focus:border-custom-purple placeholder:italic placeholder:text-center xl:mb-24 ${className}`}
      type={type}
      value={value}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      {...rest}
    />
  );
}

export default InputText;
