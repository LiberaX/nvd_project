export default function Input({
  id,
  label,
  errorMessage,
  inputType = "text",
  width = "310px",
  placeholder,
  name,
  onChange,
  onBlur,
  value = "",
}) {
  return (
    <div className={`flex flex-col gap-[10px] w-[${width}]`}>
      <div className="flex justify-between">
        <label htmlFor={id} className="font-bold text-[12px]">
          {label}
        </label>
        {errorMessage && (
          <span className="font-medium text-[12px] text-error">
            {errorMessage}
          </span>
        )}
      </div>
      <input
        id={id}
        type={inputType}
        className={`input ${errorMessage ? "input-error" : ""}`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
}
