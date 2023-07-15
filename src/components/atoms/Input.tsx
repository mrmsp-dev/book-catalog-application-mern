interface InputProps {
  type: string;
  name: string;
  pattern?: string;
  id: string;
  value: string;
  className?: string;
  placeholder: string;
  required?: boolean;
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  name,
  id,
  placeholder,
  required,
  handleOnChange,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder={placeholder}
      required={required}
      onChange={handleOnChange}
    />
  );
};

export default Input;
