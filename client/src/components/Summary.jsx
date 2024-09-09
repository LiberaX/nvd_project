import { useCart } from "../context/CartContext";

export default function Summary() {
  const { cart: c, getTotal } = useCart();

  const cart = c.map((item) => {
    let title = item.title.split(" ");
    title.pop();
    title = title.join(" ");

    return { ...item, title };
  });

  return (
    <aside className="w-[350px] p-8 bg-white self-start flex flex-col gap-[32px] rounded-lg">
      <h6 className="h6">Summary</h6>
      <ul className="flex flex-col gap-[24px]">
        {cart.map((item) => (
          <li key={item.id} className="flex gap-[15px]">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-[64px] rounded-lg"
            />
            <div className="w-full">
              <p className="p font-bold">{item.title}</p>
              <p className="p text-[14px] opacity-50">${item.price}</p>
            </div>
            <p className="p opacity-50">x{item.amount}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-[8px]">
        <span
          className="flex justify-between items-center
        "
        >
          <p className="uppercase opacity-50 text-[15px]">Total</p>{" "}
          <p className="font-bold text-[18px]">${getTotal()}</p>
        </span>
        <span
          className="flex justify-between items-center
        "
        >
          <p className="uppercase opacity-50 text-[15px]">Shipping</p>{" "}
          <p className="font-bold text-[18px]">${50}</p>
        </span>
        <span
          className="flex justify-between items-center mt-[24px]
        "
        >
          <p className="uppercase opacity-50 text-[15px]">Grand total</p>{" "}
          <p className="font-bold text-[18px] text-warmOrange">
            ${getTotal() + 50}
          </p>
        </span>
      </div>
      <button className="btn btn-primary" type="submit" form="checkout-form">
        Continue & Pay
      </button>
    </aside>
  );
}
