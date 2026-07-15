import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Chef from "./components/Chef";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#0B0B0F] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <Chef />
      <Gallery />
      <Reviews />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;