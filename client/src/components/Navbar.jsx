import Nav from "./Nav";
import IconCart from "./ui/IconCart";
import CartModal from "./CartModal";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { isCartOpen, handleCartToggle, getCartAmount } = useCart();

  return (
    <div className="flex justify-between py-[35px] border-b border-white border-opacity-20 relative z-30">
      <div>
        <img src="/public/logo.svg" alt="logo" />
      </div>
      <Nav />
      <button onClick={handleCartToggle} id="cartSvg">
        <IconCart />
        <span className="text-white bg-error w-[25px] h-[25px] rounded-full absolute top-[20px] -right-[20px]">
          {getCartAmount()}
        </span>
      </button>
      {isCartOpen && <CartModal />}
    </div>
  );
}
