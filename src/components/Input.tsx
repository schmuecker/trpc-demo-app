type InputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type="text"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Input;
