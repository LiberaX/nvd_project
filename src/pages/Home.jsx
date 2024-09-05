import Hero from "../components/Hero";
import Container from "../components/ui/Container";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import ProductShowcase from "../components/ProductShowcase";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <header
        style={{ backgroundImage: "url(public/image-hero.jpg)" }}
        className="bg-center"
      >
        <Container>
          <Navbar />
          <Hero />
        </Container>
      </header>
      <section className="mt-[120px]">
        <Container>
          <Category />
        </Container>
      </section>
      <section className="mt-[170px]">
        <Container>
          <ProductShowcase />
        </Container>
      </section>
      <section className="mt-[200px]">
        <Container>
          <AboutUs />
        </Container>
      </section>
      <Footer className="mt-[200px]" />
    </>
  );
}
