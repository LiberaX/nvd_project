import { Outlet, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useLayoutEffect } from "react";

export default function RootLayout() {
  const { isCartOpen, handleCartClose } = useCart();
  const location = useLocation();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.closest("#cartModal")) return;

      if (!e.target.closest("#cartSvg") && isCartOpen) handleCartClose();
    });
  }, [isCartOpen, handleCartClose]);

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      {isCartOpen && (
        <div className="bg-darkGray fixed inset-0 z-10 opacity-50"></div>
      )}
      <Outlet />
    </>
  );
}
