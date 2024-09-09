import { useEffect, useState } from "react";
import InputNumber from "./ui/InputNumber";
import { useCart } from "../context/CartContext";

export default function CartModalItem({ item }) {
  const { handleAdd, handleRemove } = useCart();
  const [amount, setAmount] = useState(item.amount);

  let title = item.title.split(" ");
  title.pop();
  title = title.join(" ");

  useEffect(() => {
    if (amount > item.amount) handleAdd(item);

    if (amount < item.amount) handleRemove(item.id);
  }, [amount, item, handleAdd, handleRemove]);

  return (
    <li className="flex gap-[15px] items-center">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-[64px] rounded-lg"
      />
      <div className="w-full">
        <h3 className="text-[15px] font-bold">{title}</h3>
        <span className="text-[14px] font-bold opacity-50">${item.price}</span>
      </div>
      <InputNumber size="sm" value={amount} setValue={setAmount} />
    </li>
  );
}
