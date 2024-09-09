import { useLoaderData } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Container from "../components/ui/Container";
import { getDatabase, ref, get } from "firebase/database";
import InputNumber from "../components/ui/InputNumber";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import BackButton from "../components/BackButton";

export async function loader({ request }) {
  const { pathname } = new URL(request.url);

  const db = getDatabase();
  const dbRef = ref(db, pathname);
  const snapshot = await get(dbRef);

  if (!snapshot.exists()) return null;

  return snapshot.val();
}

export default function ProductPage() {
  const data = useLoaderData();
  const [amount, setAmount] = useState(1);
  const { handleAdd } = useCart();

  function onAddToCart() {
    handleAdd(data, amount);
  }

  return (
    <>
      <header className="bg-darkGray">
        <Container>
          <Navbar />
        </Container>
      </header>
      <BackButton />

      <main className="space-y-[160px]">
        <Container>
          <div className="mt-10 flex justify-between items-center">
            <div className="w-[540px]">
              <img src={data.thumbnail} alt={data.title} />
            </div>
            <div className="flex flex-col gap-8 w-[445px]">
              <h2 className="h2">{data.title}</h2>
              <p className="p opacity-50">{data.description}</p>
              <h6 className="h6">${data.price}</h6>
              <div className="flex gap-3">
                <InputNumber value={amount} setValue={setAmount} />
                <button className="btn btn-primary" onClick={onAddToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[160px] flex justify-between">
            <div className="w-[635px]">
              <h3 className="h3">Features</h3>
              <p className="p opacity-50 mt-8">{data.features}</p>
            </div>
            <div>
              <h3 className="h3">In the box</h3>
              <div className="mt-8">
                {data.inTheBox.map((item, i) => (
                  <p className="p mb-2" key={i}>
                    <span className="text-warmOrange font-bold mr-5">
                      {item.amount}
                    </span>
                    <span className="opacity-50">{item.item}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-[160px] flex justify-between">
            <div className="flex flex-col gap-8">
              <img src={data.gallery[0]} className="rounded-lg" />
              <img src={data.gallery[1]} className="rounded-lg" />
            </div>
            <div>
              <img src={data.gallery[2]} className="rounded-lg" />
            </div>
          </div>
        </Container>
        <Container>
          <Category />
        </Container>
        <Container>
          <AboutUs />
        </Container>
        <Footer />
      </main>
    </>
  );
}
