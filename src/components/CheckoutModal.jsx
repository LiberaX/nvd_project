import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutModal() {
  const { cart: c, getTotal, handleOrderComplete, handleEmptyCart } = useCart();
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const cart = c.map((item) => {
    let title = item.title.split(" ");
    title.pop();
    title = title.join(" ");

    return { ...item, title };
  });

  const items = showMore ? cart : [cart[0]];

  function handleClick() {
    handleOrderComplete();
    handleEmptyCart();
    navigate("/");
  }

  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[540px] rounded-lg p-[48px] z-50 flex flex-col gap-10">
        <img
          src="/public/icon-order-confirmation.svg"
          alt="Icon"
          className="w-[64px]"
        />
        <h3 className="h3 w-[285px]">Thanks you for your order</h3>
        <div className="w-[440px] rounded-lg flex overflow-hidden">
          <ul className="w-[240px] bg-lightGray p-[24px]">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-[15px]">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-[50px]"
                />
                <div className="flex flex-col w-full">
                  <span className="font-bold text-[15px]">{item.title}</span>
                  <span className="font-bold text-[14px] opacity-50">
                    ${item.price}
                  </span>
                </div>
                <span className="font-bold text-[15px] opacity-50">
                  x{item.amount}
                </span>
              </li>
            ))}
            <p
              className="font-bold text-[12px] opacity-50 cursor-pointer text-center mt-[15px]"
              onClick={() => setShowMore((c) => !c)}
            >
              {!showMore ? "Show more" : "View less"}
            </p>
          </ul>
          <div className="w-[200px] text-white bg-black py-[40px] pl-[30px] flex flex-col gap-[10px]">
            <span className="uppercase font-medium opacity-50 text-[15px] mt-auto">
              Grand total
            </span>
            <span className="font-bold text-[18px]">${getTotal()}</span>
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Back to home
        </button>
      </div>
    </>
  );
}
