import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/ui/Container";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import Checkout from "../components/Checkout";
import Summary from "../components/Summary";
import CheckoutModal from "../components/CheckoutModal";

export default function CheckoutPage() {
  const { cart, orderComplete } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cart.length) navigate(-1);
  }, [cart, navigate]);

  return (
    <>
      {orderComplete && <CheckoutModal />}
      <header className="bg-darkGray">
        <Container>
          <Navbar />
        </Container>
      </header>
      <BackButton />
      <Container>
        <main className="flex gap-[30px] mt-10 mb-[140px]">
          <Checkout />
          <Summary />
        </main>
      </Container>
      <Footer />
    </>
  );
}
