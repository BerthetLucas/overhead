import Nav from "../components/NavBar";
import Footer from "../components/footer";
import CarouselDefault from "../components/Caroussel";

function Home() {
  return (
    <div>
      <div className="fixed top-0 w-full z-10 bg-white">
        <Nav />
      </div>
      <CarouselDefault />
      <Footer />
    </div>
  );
}

export default Home;
