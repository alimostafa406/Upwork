
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardsPage from "./components/Cards";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <div className=" min-h-screen bg-gray-100 py-6">
      <div className="w-[95%] md:w-[95%] lg:w-[95%] xl:w-[90%] mx-auto">
        <Navbar />
        <Hero />
        <Searchbar />
        <CardsPage />
      </div>
    </div>
  );
}
