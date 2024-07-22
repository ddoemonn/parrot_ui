interface RadioGroupProps {
  options: { value: string; label: string }[];
  name: string;
  onChange: (value: string) => void;
  value: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, onChange, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      {options.map(option => (
        <label
          key={option.value}
          className="flex items-center space-x-2"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={handleChange}
            className=" h-4 w-4  border-gray-300 accent-black"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
