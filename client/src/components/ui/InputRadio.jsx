export default function InputRadio({
  name,
  id,
  defaultValue,
  value,
  setValue,
  children,
}) {
  return (
    <div className="relative inline-block">
      <input
        className="sr-only peer"
        type="radio"
        value={defaultValue}
        name={name}
        id={id}
        checked={defaultValue === value}
        onChange={() => setValue(defaultValue)}
      />
      <div className="absolute w-[20px] h-[20px] border border-gray-2 rounded-full top-[18px] left-[18px]" />
      <div className="absolute w-[10px] h-[10px] bg-warmOrange rounded-full top-[23px] left-[23px] hidden peer-checked:block" />
      <label
        className="flex font-bold text-[14px] px-[50px] py-[18px] border border-gray-2 rounded-lg cursor-pointer focus:outline-none hover:border-warmOrange peer-checked:border-warmOrange"
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}
