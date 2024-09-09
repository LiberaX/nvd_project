import { useEffect } from "react";

export default function InputNumber({ value, setValue, size }) {
  let buttonSize = "gap-[20px] w-[120px] p-[15px]";

  useEffect(() => {
    if (!value) setValue(1);
  }, [value, setValue]);

  function handleDecrease() {
    setValue((curr) => --curr);
  }

  function handleIncrease() {
    setValue((curr) => ++curr);
  }

  if (size === "sm") buttonSize = "gap-[12px] w-[96px] py-[7px] px-[11px]";

  return (
    <div className={`inline-flex  justify-center bg-lightGray ${buttonSize}`}>
      <button
        className="w-[18px] h-[18px] font-bold text-[13px] text-black hover:text-warmOrange"
        onClick={handleDecrease}
      >
        -
      </button>
      <span
        type="number"
        value={value}
        disabled
        className="text-[13px] text-bold"
      >
        {value}
      </span>
      <button
        className="w-[18px] h-[18px] font-bold text-[13px] text-black hover:text-warmOrange"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}
