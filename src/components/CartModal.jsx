import CartModalItem from "./CartModalItem";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartModal() {
  const { cart, handleEmptyCart, getTotal, handleCartClose } = useCart();
  const navigate = useNavigate();

  function handleClick() {
    handleCartClose();
    navigate("/checkout");
  }

  if (!cart.length)
    return (
      <div
        className="flex flex-col gap-[32px] w-[380px] bg-white absolute right-0 top-[130px] rounded-lg p-8 z-20"
        id="cartModal"
      >
        <span className="sub-title text-center">Cart is empty</span>
      </div>
    );

  return (
    <div
      className="flex flex-col gap-[32px] w-[380px] bg-white absolute right-0 top-[130px] rounded-lg p-8 z-20"
      id="cartModal"
    >
      <div className="flex justify-between items-center">
        <h6 className="h6">Cart ({cart.length})</h6>
        <button
          className="text-[15px] font-medium opacity-50 underline hover:text-warmOrange leading-[25px]"
          onClick={handleEmptyCart}
        >
          Remove all
        </button>
      </div>
      <ul className="flex flex-col gap-[24px]">
        {cart.map((item) => (
          <CartModalItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="flex justify-between">
        <h3 className="text-[15px] font-medium opacity-50 uppercase">Total</h3>
        <span className="text-[18px] font-bold">
          ${getTotal().toLocaleString()}
        </span>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Checkout
      </button>
    </div>
  );
}
