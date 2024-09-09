import { useLoaderData } from "react-router-dom";
import CategoryItemPage from "../components/CategoryItemPage";
import Navbar from "../components/Navbar";
import Container from "../components/ui/Container";
import { app } from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import Category from "../components/Category";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

export async function loader({ request }) {
  const { pathname } = new URL(request.url);
  const db = getDatabase(app);
  const dbRef = ref(db, pathname);
  const snapshot = await get(dbRef);

  if (!snapshot.exists()) return;

  return Object.values(snapshot.val());
}

export default function CategoryPage({ title }) {
  const items = useLoaderData();

  return (
    <main className="space-y-[160px]">
      <div className="bg-darkGray">
        <Container>
          <Navbar />
          <h2 className="h2 text-white py-[100px] text-center">{title}</h2>
        </Container>
      </div>
      <Container>
        <ul className="flex flex-col gap-[160px]">
          {items.map((item, i) => (
            <CategoryItemPage item={item} key={i} dir={+i % 2 === 0} />
          ))}
        </ul>
      </Container>
      <Container>
        <Category />
      </Container>
      <Container>
        <AboutUs />
      </Container>
      <Footer />
    </main>
  );
}
